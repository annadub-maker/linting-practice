import { formatPrice, formatCurrency } from "./format.js";

const cart = [];

export function addToCart(product, quantity) {
  var existing = cart.find((item) => item.id == product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
    });
  }
  return cart;
}

export function cartTotal() {
  let total = 0;
  const discount = 0.1;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  return formatPrice(total);
}

export function renderCart(target) {
  target.innerHTML = cart
    .map((item) => `<li>${item.title} x ${item.quantity}</li>`)
    .join("");
  console.log("cart updated", cartCount);
}
