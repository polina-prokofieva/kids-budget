import type { CurrencyCode } from "../_types/currency";

export function getCurrencySymbol(currency: CurrencyCode) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
  })
    .formatToParts(0)
    .find(p => p.type === 'currency')!
    .value;
}
