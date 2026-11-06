const destinations = {
  brasil: {
    name: "Brasil",
    kicker: "DESTINOS PELO BRASIL",
    headline: "O Brasil tem uma viagem para cada vontade.",
    intro:
      "Do litoral ensolarado às cidades cheias de história, descubra experiências para aproveitar a diversidade brasileira no seu ritmo.",
    highlights: [
      { title: "Praias para relaxar", text: "Encontre cenários de mar e descanso em diferentes regiões do país." },
      { title: "Cultura e história", text: "Explore centros históricos, tradições locais e sabores regionais." },
      { title: "Natureza de perto", text: "Conheça parques, cachoeiras e paisagens marcantes." },
      { title: "Viagens para todos", text: "Combine passeios e hospedagem de acordo com seu estilo." },
    ],
    places: [
      { name: "Nordeste", text: "Praias, piscinas naturais e vilarejos para curtir dias de sol.", image: "https://tse3.mm.bing.net/th/id/OIP.6Tv5N3zfuWcMPY0JkdHcXAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Rio de Janeiro", text: "Paisagens icônicas, vida cultural e passeios à beira-mar.", image: "https://i.pinimg.com/originals/9f/26/38/9f26388a01cd8cbded803412b038add6.jpg" },
      { name: "Foz do Iguaçu", text: "Uma viagem para contemplar as famosas Cataratas e a natureza.", image: "https://tse3.mm.bing.net/th/id/OIP.83N1FlE2NBIOZlGbsnlG3wHaEd?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  americas: {
    name: "América do Sul e do Norte",
    kicker: "DESTINOS NAS AMÉRICAS",
    headline: "Duas Américas, muitas formas de viajar.",
    intro:
      "Descubra cidades cosmopolitas, paisagens naturais e culturas diversas em roteiros pela América do Sul e pela América do Norte.",
    highlights: [
      { title: "Cidades vibrantes", text: "Combine gastronomia, compras, cultura e passeios urbanos." },
      { title: "Paisagens naturais", text: "Encontre montanhas, praias, desertos e parques impressionantes." },
      { title: "Cultura e sabores", text: "Conheça tradições e cozinhas muito diferentes em cada país." },
      { title: "Roteiros variados", text: "Escolha entre viagens curtas, circuitos ou férias mais longas." },
    ],
    places: [
      { name: "Buenos Aires", text: "Arquitetura, cafés, cultura e passeios em clima portenho.", image: "https://tse3.mm.bing.net/th/id/OIP.FJ8PNM1SsWN688EN5ApWHQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Santiago e arredores", text: "Uma capital moderna com montanhas e vinícolas por perto.", image: "https://cdn.getyourguide.com/img/location/5cced31b8e609.jpeg/88.jpg" },
      { name: "Orlando", text: "Parques temáticos, compras e diversão para toda a família.", image: "https://th.bing.com/th/id/R.73d0b9ec24bbaa460ff0db91411a0ebe?rik=%2fNFdCEl53cUl3Q&pid=ImgRaw&r=0" },
      { name: "Nova York", text: "Museus, bairros, espetáculos e atrações para explorar a pé.", image: "https://tse2.mm.bing.net/th/id/OIF.meXIwK8K4RfkgdQoqzrdqA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  africa: {
    name: "África",
    kicker: "DESTINOS NA ÁFRICA",
    headline: "Uma viagem de paisagens e encontros inesquecíveis.",
    intro:
      "Explore cidades cheias de personalidade, patrimônios históricos e experiências de natureza em diferentes regiões do continente africano.",
    highlights: [
      { title: "Vida selvagem", text: "Planeje experiências de observação da natureza com orientação especializada." },
      { title: "História e cultura", text: "Descubra patrimônios, mercados e tradições locais." },
      { title: "Paisagens marcantes", text: "De montanhas e desertos a praias e reservas naturais." },
      { title: "Experiências únicas", text: "Monte um roteiro que respeite seu tempo e seus interesses." },
    ],
    places: [
      { name: "África Do Sul", text: "Paisagens costeiras, montanhas e uma cena cultural animada.", image: "https://www.infoescola.com/wp-content/uploads/2010/05/cidade-do-cabo_92510755.jpg" },
      { name: "Marrocos", text: "Medinas, arquitetura, mercados e paisagens do deserto.", image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/469000/469964-Hassan-Ii-Mosque.jpg" },
      { name: "Egito", text: "Monumentos históricos e passeios ligados à antiga civilização egípcia.", image: "https://tse4.mm.bing.net/th/id/OIP.6vT0zLv__FrWqB92qwoJOwHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  europa: {
    name: "Europa",
    kicker: "DESTINOS NA EUROPA",
    headline: "História, arte e novos sabores a cada parada.",
    intro:
      "Descubra cidades históricas, museus, belas paisagens e a gastronomia de diferentes países em uma viagem feita para você.",
    highlights: [
      { title: "Cultura e arte", text: "Visite museus, monumentos e bairros históricos." },
      { title: "Gastronomia", text: "Experimente sabores locais e mercados tradicionais." },
      { title: "Múltiplos destinos", text: "Conecte cidades e países em roteiros de trem ou avião." },
      { title: "Cada estação encanta", text: "Encontre atrações e paisagens diferentes ao longo do ano." },
    ],
    places: [
      { name: "Portugal", text: "Cidades históricas, litoral, vinhos e uma gastronomia acolhedora.", image: "https://th.bing.com/th/id/R.ae8bd4cd1522b8d758073cc58b0be08b?rik=cMhGohAAvewn9Q&pid=ImgRaw&r=0" },
      { name: "Paris", text: "Arte, arquitetura, cafés e passeios por bairros emblemáticos.", image: "https://eurolines.fr/wp-content/uploads/2022/07/visite-de-paris.jpg" },
      { name: "Roma", text: "Monumentos, praças e sabores que contam séculos de história.", image: "https://cdn.getyourguide.com/img/tour/e76659618b2b0d10c08cc86b4a28b136c1e3abbadc2ee1a992067b703a896d97.jpg/148.jpg" },
      { name: "Madri", text: "Museus, parques e uma vida cultural vibrante.", image: "https://www.viajaquepassa.com.br/wp-content/uploads/2022/04/Onde-se-hospedar-em-Madri-Centro-1024x683.jpg" },
    ],
  },
  asia: {
    name: "Ásia",
    kicker: "DESTINOS NA ÁSIA",
    headline: "Tradições e modernidade em uma viagem surpreendente.",
    intro:
      "Conheça templos, metrópoles, paisagens naturais e cozinhas marcantes em destinos asiáticos cheios de contrastes.",
    highlights: [
      { title: "Tradições milenares", text: "Visite templos, jardins e lugares de grande significado cultural." },
      { title: "Metrópoles modernas", text: "Explore cidades dinâmicas, tecnologia e centros de compras." },
      { title: "Sabores diferentes", text: "Descubra mercados e pratos que fazem parte da experiência local." },
      { title: "Natureza e descanso", text: "Inclua praias, montanhas e momentos de tranquilidade no roteiro." },
    ],
    places: [
      { name: "Japão", text: "Uma mistura de cidades modernas, templos e paisagens sazonais.", image: "https://tse1.mm.bing.net/th/id/OIP.ZGClc3wUhoNOrD4uSN9HpAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Tailândia", text: "Templos, mercados, praias e uma culinária muito rica.", image: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/07/passagens-aereas-tailandia-capa2019-05.jpg" },
      { name: "Coreia do Sul", text: "Cultura contemporânea, história e bairros cheios de energia.", image: "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2024/10/Luzes-de-Seul-Coreia-do-Sul.jpg" },
    ],
  },
  cruzeiros: {
    name: "Cruzeiros",
    kicker: "VIAGENS PELOS MARES",
    headline: "Vários destinos, uma experiência a bordo.",
    intro:
      "Desfrute de hospedagem, refeições e entretenimento no navio enquanto visita diferentes cidades e aproveita cada parada.",
    highlights: [
      { title: "Conforto a bordo", text: "Tenha sua hospedagem e diversas comodidades durante o trajeto." },
      { title: "Novas paradas", text: "Conheça mais de um destino sem precisar refazer as malas a cada etapa." },
      { title: "Lazer para todos", text: "Consulte opções de atividades, entretenimento e serviços a bordo." },
      { title: "Opções de duração", text: "Compare roteiros e datas para encontrar a viagem ideal." },
    ],
    places: [
      { name: "Costa brasileira", text: "Uma opção para aproveitar o litoral e conhecer diferentes cidades.", image: "https://www.blumarturismo.com.br/blog/wp-content/uploads/2023/09/pt_PT_RIO07A0I_landscape_sd_2x.webp" },
      { name: "Caribe", text: "Praias, águas claras e escalas em diferentes ilhas.", image: "https://tse1.mm.bing.net/th/id/OIP.rQEyUx4yv9pdfMvAwc6IegHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Mediterrâneo", text: "Cidades históricas, cultura e paisagens costeiras em um só roteiro.", image: "https://jornaldoscruzeiros.com.br/wp-content/uploads/2025/02/Costa-Smeralda.jpg" },
    ],
  },
};

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = text;
  return element;
}

function renderDestination(destination, key) {
  document.title = `${destination.name} | Fontana Turismo`;
  document.querySelector("#destinationKicker").textContent = destination.kicker;

  const title = document.querySelector("#destinationTitle");
  const emphasizedName = document.createElement("span");
  emphasizedName.textContent = destination.name;
  title.append(document.createTextNode("Explore "), emphasizedName);
  document.querySelector("#destinationIntro").textContent =
    `${destination.headline} ${destination.intro}`;

  const bookingUrl = `index.html?destino=${encodeURIComponent(key)}#agendar`;
  document.querySelector("#destinationBookingLink").href = bookingUrl;
  document.querySelector("#destinationCtaLink").href = bookingUrl;

  const highlights = document.querySelector("#destinationHighlights");
  destination.highlights.forEach((highlight) => {
    const card = document.createElement("article");
    card.className = "destination-highlight";
    card.append(
      createTextElement("strong", "", highlight.title),
      createTextElement("p", "", highlight.text),
    );
    highlights.append(card);
  });

  const places = document.querySelector("#destinationPlaces");
  destination.places.forEach((place, index) => {
    const column = createTextElement("div", "col-sm-6");
    const card = document.createElement("article");
    card.className = "destination-place-card";
    const image = document.createElement("img");
    image.className = "destination-place-image";
    image.dataset.imageSrc = place.image;
    image.alt = place.name;
    image.hidden = !place.image.trim();
    if (place.image.trim()) image.src = place.image;
    card.append(
      createTextElement("span", "", `IDEIA ${String(index + 1).padStart(2, "0")}`),
      createTextElement("h3", "", place.name),
      createTextElement("p", "", place.text),
      image,
    );
    column.append(card);
    places.append(column);
  });

  document.querySelector("#destinationNotFound").hidden = true;
  document.querySelector("#destinationContent").hidden = false;
}

const region = new URLSearchParams(window.location.search).get("regiao");
if (Object.hasOwn(destinations, region)) {
  renderDestination(destinations[region], region);
}
