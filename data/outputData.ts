export type OutputDataKey =
  | 'level'
  | 'rank'
  | 'cp'
  | 'stats'
  | 'statProduct'
  | 'percent';

export type OutputDataPoint = {
  key: OutputDataKey;
  name: string;
  description: string;
};

export const OUTPUT_DATA: OutputDataPoint[] = [
  { key: 'rank', name: 'Rank', description: '' },
  { key: 'level', name: 'Level', description: '' },
  { key: 'cp', name: 'CP', description: '' },
  {
    key: 'stats',
    name: 'Stats',
    description: 'Attack, Defense and Stamina, as calculated in-game.',
  },
  {
    key: 'statProduct',
    name: 'Stat Product',
    description:
      'The metric used to rank spreads - calculated by multiplying the generated Attack, Defense and Stamina values together.',
  },
  {
    key: 'percent',
    name: '% of Rank 1',
    description:
      'Display a percentage under Stat and the Stat Product for a Candidate comparing the value to that of the Rank 1 spread.',
  },
];
