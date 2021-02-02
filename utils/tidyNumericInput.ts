/**
 * Claim a numeric input between a minimum & maximum value and returns as a specific type
 *
 * @typeParam T - return type of the tidied input
 * @param input - Value to be tidied.
 * @param min - Minimum possible return value
 * @param max - Maximum possible return value
 * @returns Tidied value
 */
export function tidyNumericInput<T extends number>(
  input: number,
  min: T,
  max: T,
): T {
  return Math.max(Math.min(input, max), min) as T;
}
