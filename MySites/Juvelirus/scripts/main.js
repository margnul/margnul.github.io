// import Cart from "./Cart.js";
// import Product from "./Product.js";

// new Cart()
// new Product()

// Получаем текущую страницу
const pageName = document.body.dataset.page;

// Cart загружается только на нужных страницах
if (pageName === "cart" ) {
  import("./Cart.js").then(({ default: Cart }) => {
    new Cart();
  });
}

// Product загружается только на странице товара
if (pageName === "product") {
  import("./Product.js").then(({ default: Product }) => {
    new Product();
  });
}
