export function formatPercent(val: number) {
  if (val === 1 || val === 0) {
    return `${val * 100}%`;
  }

  return `${(val * 100).toFixed(2)}%`;
}
