export function formatValue(
  value: number,
  fractionDigits?: number,
  options?: Intl.NumberFormatOptions,
) {
  const numberFormatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
    ...options,
  });

  return numberFormatter.format(value);
}
