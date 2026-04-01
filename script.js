document.documentElement.classList.add("js");

const products = [
  { name: "Small Badam Milk", size: "Small", price: "&#8377;30", image: "assets/menu/small-badam-milk.svg" },
  { name: "Mini Badam Milk", size: "Mini", price: "&#8377;35", image: "assets/menu/mini-badam-milk.svg" },
  { name: "Regular Badam Milk", size: "Regular", price: "&#8377;50", image: "assets/menu/regular-badam-milk.svg" },
  { name: "Rose Milk", size: "Classic", price: "&#8377;30", image: "assets/menu/rose-milk.svg" },
  { name: "Sweet Lassi", size: "Classic", price: "&#8377;30", image: "assets/menu/sweet-lassi.svg" },
  { name: "Grape Juice", size: "Fresh", price: "&#8377;30", image: "assets/menu/grape-juice.svg" },
  { name: "Pala Kova (40g)", size: "40g", price: "&#8377;35", image: "assets/menu/pala-kova.svg" }
];

const productsGrid = document.querySelector("#productsGrid");
const whatsappLink = "https://wa.me/918374367207";

if (productsGrid) {
  const cards = products
    .map((product) => {
      return `
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
      `;
    })
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
