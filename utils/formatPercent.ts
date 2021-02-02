/**
 * Format a numerical value as a percentage.
 *
 * @param value - The number to be formatted.
 * @returns Formatted % string
 */
export function formatPercent(value: number) {
  if (value === 1 || value === 0) {
    return `${value * 100}%`;
  }

  return `${(value * 100).toFixed(2)}%`;
}
