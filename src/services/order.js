import { priceNormalize } from '../function';

export function calculateTotalCost(price, amount) {
  return price && amount
    ? priceNormalize(price * amount)
    : '';
}