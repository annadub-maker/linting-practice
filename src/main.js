import { addToCart, cartTotal, renderCart } from "./cart.js";

const products = [
  { id: 1, title: "Backpack", price: 109.95 },
  { id: 2, title: "T-shirt", price: 22.3 },
  { id: 3, title: "Jacket", price: 55.99 },
];

addToCart(products[0], 1);
addToCart(products[1], 2);
addToCart(products[1], 1);

renderCart(document.querySelector("#cart"));
document.querySelector("#total").textContent = cartTotal();
