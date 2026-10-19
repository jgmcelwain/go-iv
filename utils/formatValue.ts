const formatters = new Map<string, Intl.NumberFormat>();

export function formatValue(
  value: number,
  fractionDigits?: number,
  options?: Pick<Intl.NumberFormatOptions, 'style'>,
) {
  const key = `${fractionDigits ?? ''}|${options?.style ?? ''}`;
  let formatter = formatters.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
      ...options,
    });
    formatters.set(key, formatter);
  }

  return formatter.format(value);
}
