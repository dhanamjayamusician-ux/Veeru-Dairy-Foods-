document.documentElement.classList.add("js");

const createImageDataUri = (title, subtitle, colors, accent = "#1A2A4A") => {
  const svg = `
    <svg width="640" height="480" viewBox="0 0 640 480" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="480" rx="36" fill="url(#bg)"/>
      <circle cx="508" cy="104" r="92" fill="#FFFFFF" fill-opacity="0.26"/>
      <circle cx="128" cy="394" r="110" fill="#FFFFFF" fill-opacity="0.18"/>
      <rect x="226" y="122" width="188" height="216" rx="34" fill="#FFF9EF" fill-opacity="0.9" stroke="#FFFFFF" stroke-opacity="0.55" stroke-width="8"/>
      <rect x="252" y="88" width="136" height="50" rx="24" fill="#FFFDF7" fill-opacity="0.95"/>
      <rect x="246" y="154" width="148" height="150" rx="24" fill="url(#drink)"/>
      <path d="M220 346C252 321 284 310 320 310C356 310 388 321 420 346" stroke="${colors[1]}" stroke-width="12" stroke-linecap="round"/>
      <circle cx="184" cy="146" r="13" fill="${colors[2]}"/>
      <circle cx="166" cy="168" r="11" fill="${colors[3]}"/>
      <circle cx="460" cy="304" r="12" fill="${colors[2]}"/>
      <text x="60" y="90" fill="${accent}" font-family="Poppins, Arial, sans-serif" font-size="28" font-weight="700">Veeru Dairy Foods</text>
      <text x="60" y="374" fill="${accent}" font-family="Georgia, serif" font-size="44" font-weight="700">${title}</text>
      <text x="60" y="414" fill="#5F5648" font-family="Poppins, Arial, sans-serif" font-size="22">${subtitle}</text>
      <defs>
        <linearGradient id="bg" x1="44" y1="28" x2="590" y2="450" gradientUnits="userSpaceOnUse">
          <stop stop-color="${colors[0]}"/>
          <stop offset="0.55" stop-color="${colors[1]}"/>
          <stop offset="1" stop-color="${colors[4]}"/>
        </linearGradient>
        <linearGradient id="drink" x1="246" y1="154" x2="394" y2="304" gradientUnits="userSpaceOnUse">
          <stop stop-color="${colors[5]}"/>
          <stop offset="1" stop-color="${colors[6]}"/>
        </linearGradient>
      </defs>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const products = [
  {
    name: "Small Badam Milk",
    size: "Small",
    price: "&#8377;30",
    image: createImageDataUri(
      "Small Badam Milk",
      "Freshly prepared daily",
      ["#F8E2B8", "#EDC472", "#A56A2A", "#C98B41", "#FFF3D7", "#EEC56F", "#DCA348"]
    )
  },
  {
    name: "Mini Badam Milk",
    size: "Mini",
    price: "&#8377;35",
    image: createImageDataUri(
      "Mini Badam Milk",
      "Small cup, rich almond flavor",
      ["#F8DFA7", "#E8AA39", "#A86D2F", "#D79235", "#FFF5DE", "#EFC56D", "#E09C2A"]
    )
  },
  {
    name: "Regular Badam Milk",
    size: "Regular",
    price: "&#8377;50",
    image: createImageDataUri(
      "Regular Badam Milk",
      "Full-bodied almond milk delight",
      ["#F7E4BA", "#E8B660", "#A66E32", "#D28A39", "#FFF6E3", "#F2C973", "#D79A38"]
    )
  },
  {
    name: "Rose Milk",
    size: "Classic",
    price: "&#8377;30",
    image: createImageDataUri(
      "Rose Milk",
      "Floral, chilled, and refreshing",
      ["#F7D5DD", "#EAA8B7", "#E06F8B", "#D96E8A", "#FFF2F4", "#F2B4C4", "#DA829B"]
    )
  },
  {
    name: "Sweet Lassi",
    size: "Classic",
    price: "&#8377;30",
    image: createImageDataUri(
      "Sweet Lassi",
      "Creamy and cooling",
      ["#F8F0BE", "#E9D57C", "#D7B44D", "#C7A03B", "#FFFCEC", "#F7EDBF", "#E6D167"]
    )
  },
  {
    name: "Grape Juice",
    size: "Fresh",
    price: "&#8377;30",
    image: createImageDataUri(
      "Grape Juice",
      "Bright, fruity, and chilled",
      ["#DDCEF3", "#A381D7", "#7A57B1", "#946DD0", "#F4EEFF", "#AD8BE3", "#7C57B6"]
    )
  },
  {
    name: "Pala Kova (40g)",
    size: "40g",
    price: "&#8377;35",
    image: createImageDataUri(
      "Pala Kova (40g)",
      "Rich milk sweet, soft and indulgent",
      ["#F5E3BF", "#E0B676", "#BC8A45", "#D3A260", "#FFF5E8", "#E6BE80", "#C78D45"]
    )
  }
];

const productsGrid = document.querySelector("#productsGrid");
const whatsappLink = "https://wa.me/918374367207";

if (productsGrid) {
  const cards = products
    .map(
      (product) => `
        <article class="product-card reveal">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-copy">
            <span class="product-size">${product.size}</span>
            <h3>${product.name}</h3>
          </div>
          <div class="product-meta">
            <span class="product-price">${product.price}</span>
            <a class="button button-primary" href="${whatsappLink}" target="_blank" rel="noreferrer">Order Now</a>
          </div>
        </article>
      `
    )
    .join("");

  productsGrid.innerHTML = cards;
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
