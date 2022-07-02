export type OutputDataKey =
  | 'level'
  | 'rank'
  | 'cp'
  | 'stats'
  | 'statProduct'
  | 'percent';

export type OutputField = {
  key: OutputDataKey;
  name: string;
  description?: string;
};

export const OUTPUT_DATA: OutputField[] = [
  { key: 'rank', name: 'Rank' },
  { key: 'level', name: 'Level' },
  { key: 'cp', name: 'CP' },
  {
    key: 'statProduct',
    name: 'Stat Product',
    description:
      'Standard metric used to rank spreads - calculated by multiplying the generated Attack, Defense and Stamina values together.',
  },
  {
    key: 'stats',
    name: 'Stats',
    description: 'Attack, Defense and Stamina, as calculated in-game.',
  },
  {
    key: 'percent',
    name: '% of Rank 1',
    description:
      'Display a percentage under each Stat and the Stat Product comparing the value to that of the Rank 1 spread.',
  },
];
