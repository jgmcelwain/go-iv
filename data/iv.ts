export type IV =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;

export const IV_RANGE: IV[] = Array.from({ length: 16 }).map((_, i) => i as IV);

export const MIN_IV = IV_RANGE[0];

export const MAX_IV = IV_RANGE[IV_RANGE.length - 1];
