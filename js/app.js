const destinationNames = {
  brasil: "Brasil",
  americas: "América do Sul e do Norte",
  africa: "África",
  europa: "Europa",
  asia: "Ásia",
  cruzeiros: "Cruzeiros",
  outro: "Outro destino",
};

const appointments = [];
let nextAppointmentId = 1;

const bookingForm = document.querySelector("#bookingForm");
const customerNameInput = document.querySelector("#customerName");
const customerPhoneInput = document.querySelector("#customerPhone");
const serviceTypeInput = document.querySelector("#serviceType");
const contactTypeInput = document.querySelector("#contactType");
const appointmentDateInput = document.querySelector("#appointmentDate");
const appointmentTimeInput = document.querySelector("#appointmentTime");
const dateField = document.querySelector("#dateField");
const timeField = document.querySelector("#timeField");
const appointmentDetailsInput = document.querySelector("#appointmentDetails");
const appointmentsList = document.querySelector("#appointmentsList");
const appointmentCount = document.querySelector("#appointmentCount");
const emptyState = document.querySelector("#emptyState");
const formFeedback = document.querySelector("#formFeedback");

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatAppointmentDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day, 12);
  return {
    day: String(day).padStart(2, "0"),
    month: new Intl.DateTimeFormat("pt-BR", { month: "short" })
      .format(date)
      .replace(".", ""),
    full: new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date),
  };
}

function showFeedback(message, type) {
  formFeedback.textContent = message;
  formFeedback.className = `feedback-message ${type}`;
  formFeedback.hidden = false;
}

function validatePhone() {
  const digits = customerPhoneInput.value.replace(/\D/g, "");
  const valid = digits.length === 10 || digits.length === 11;
  customerPhoneInput.setCustomValidity(
    valid ? "" : "Informe um celular válido com DDD.",
  );
  return valid;
}

function validateDate() {
  const date = appointmentDateInput.value;
  const valid = date !== "" && date >= getLocalDateString();
  appointmentDateInput.setCustomValidity(
    valid ? "" : "Escolha uma data a partir de hoje.",
  );
  return valid;
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function createAppointmentCard(appointment) {
  const date = appointment.date ? formatAppointmentDate(appointment.date) : null;
  const card = createElement("article", "appointment-card");
  const main = createElement("div", "appointment-main");
  if (date) {
    const dateBadge = createElement("div", "appointment-date-badge");
    dateBadge.setAttribute("aria-label", date.full);
    dateBadge.append(
      createElement("strong", "", date.day),
      createElement("span", "", date.month),
    );
    main.append(dateBadge);
  }

  const info = createElement("div", "appointment-info");
  info.append(
    createElement("h3", "", appointment.name),
    createElement(
      "p",
      "",
      `${destinationNames[appointment.destination]} · ${appointment.phone}`,
    ),
    createElement(
      "p",
      "",
      appointment.contactType === "store"
        ? "Visita à loja"
        : "Aguardando contato da agência",
    ),
  );
  if (appointment.details) {
    info.append(createElement("p", "", `Observação: ${appointment.details}`));
  }
  main.append(info);

  const meta = createElement("div", "appointment-meta");
  if (date) {
    meta.append(
      createElement("span", "appointment-time", `${date.full} · ${appointment.time}`),
    );
  }
  const removeButton = createElement("button", "remove-appointment", "Remover");
  removeButton.type = "button";
  removeButton.dataset.removeId = String(appointment.id);
  removeButton.setAttribute(
    "aria-label",
    date
      ? `Remover visita de ${appointment.name} em ${date.full} às ${appointment.time}`
      : `Remover solicitação de contato de ${appointment.name}`,
  );
  meta.append(removeButton);
  card.append(main, meta);
  return card;
}

function renderAppointments() {
  appointmentsList
    .querySelectorAll(".appointment-card")
    .forEach((card) => card.remove());

  const sortedAppointments = [...appointments].sort((first, second) =>
    `${first.date || "9999-99-99"} ${first.time || ""}`.localeCompare(
      `${second.date || "9999-99-99"} ${second.time || ""}`,
    ),
  );
  emptyState.hidden = sortedAppointments.length > 0;
  appointmentCount.textContent = `${sortedAppointments.length} ${
    sortedAppointments.length === 1 ? "solicitação" : "solicitações"
  }`;

  sortedAppointments.forEach((appointment) => {
    appointmentsList.append(createAppointmentCard(appointment));
  });
}

function resetValidation() {
  bookingForm.classList.remove("was-validated");
  [customerNameInput, customerPhoneInput, serviceTypeInput, appointmentDateInput, appointmentTimeInput, contactTypeInput]
    .forEach((input) => input.setCustomValidity(""));
}

function updateContactFields() {
  const scheduleVisit = contactTypeInput.value === "store";
  dateField.hidden = !scheduleVisit;
  timeField.hidden = !scheduleVisit;
  appointmentDateInput.required = scheduleVisit;
  appointmentTimeInput.required = scheduleVisit;
  appointmentDateInput.setCustomValidity("");
  appointmentTimeInput.setCustomValidity("");
}

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formFeedback.hidden = true;

  customerNameInput.value = customerNameInput.value.trim();
  validatePhone();
  if (contactTypeInput.value === "store") validateDate();
  bookingForm.classList.add("was-validated");

  if (!bookingForm.checkValidity()) {
    showFeedback("Confira os campos destacados antes de continuar.", "error");
    bookingForm.querySelector(":invalid")?.focus();
    return;
  }

  const contactType = contactTypeInput.value;
  appointments.push({
    id: nextAppointmentId++,
    name: customerNameInput.value,
    phone: customerPhoneInput.value.trim(),
    destination: serviceTypeInput.value,
    contactType,
    date: contactType === "store" ? appointmentDateInput.value : "",
    time: contactType === "store" ? appointmentTimeInput.value : "",
    details: appointmentDetailsInput.value.trim(),
  });

  renderAppointments();
  bookingForm.reset();
  updateContactFields();
  appointmentDateInput.min = getLocalDateString();
  resetValidation();
  showFeedback(
    contactType === "store"
      ? "Pedido de visita registrado nesta sessão. O horário ainda precisa ser confirmado pela agência."
      : "Pedido de contato registrado nesta sessão. Para a agência receber seu telefone, é preciso conectar um canal de atendimento.",
    "success",
  );
  document.querySelector("#meus-agendamentos").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

customerPhoneInput.addEventListener("input", validatePhone);
appointmentDateInput.addEventListener("input", validateDate);
contactTypeInput.addEventListener("change", updateContactFields);

appointmentsList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-id]");
  if (!removeButton) return;

  const appointmentId = Number(removeButton.dataset.removeId);
  const appointmentIndex = appointments.findIndex(
    (appointment) => appointment.id === appointmentId,
  );
  if (appointmentIndex === -1) return;

  appointments.splice(appointmentIndex, 1);
  renderAppointments();
  showFeedback("Solicitação removida da sua lista.", "success");
});

appointmentDateInput.min = getLocalDateString();
document.querySelectorAll("[data-image-src]").forEach((image) => {
  const imageSource = image.dataset.imageSrc.trim();
  if (imageSource) {
    image.src = imageSource;
    image.hidden = false;
  }
});
const requestedDestination = new URLSearchParams(window.location.search).get("destino");
if (Object.hasOwn(destinationNames, requestedDestination)) {
  serviceTypeInput.value = requestedDestination;
}
updateContactFields();
renderAppointments();
