export function formatPrice(value) {
  return `EUR ${value.toFixed(2)}`;
}

export function formatCurrency(value, currency) {
  return `${currency} ${value.toFixed(2)}`;
}
