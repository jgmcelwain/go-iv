export type StatKey = 'atk' | 'def' | 'sta';

export const STATS: { key: StatKey; name: string }[] = [
  { key: 'atk', name: 'Attack' },
  { key: 'def', name: 'Defense' },
  { key: 'sta', name: 'Stamina' },
];
