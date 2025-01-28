export type IVFloor =
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
  | 14;

export const IV_FLOORS: { value: IVFloor; name: string | null }[] = [
  { value: 0, name: 'Wild Catch' },
  { value: 1, name: 'Good Friend Trade' },
  { value: 2, name: 'Great Friend Trade' },
  { value: 3, name: 'Ultra Friend Trade' },
  { value: 4, name: 'Weather Boost' },
  { value: 5, name: 'Best Friend Trade' },
  { value: 6, name: 'Shadow Raid, Giovanni' },
  { value: 7, name: 'Boosted Shadow Raid' },
  { value: 8, name: null },
  { value: 9, name: null },
  { value: 10, name: 'Raid, Egg, Research' },
  { value: 11, name: null },
  { value: 12, name: 'Lucky Trade' },
  { value: 13, name: null },
  { value: 14, name: null },
];

export const MIN_IV_FLOOR = IV_FLOORS[0].value;

export const MAX_IV_FLOOR = IV_FLOORS[IV_FLOORS.length - 1].value;
