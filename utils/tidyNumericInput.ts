export function tidyNumericInput<T extends number>(
  val: number,
  min: T,
  max: T,
): T {
  return Math.max(Math.min(val, max), min) as T;
}
