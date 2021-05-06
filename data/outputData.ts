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
    description: '',
  },
  {
    key: 'statProduct',
    name: 'Stat Product',
    description: '',
  },
  {
    key: 'percent',
    name: '% of Rank 1',
    description: '',
  },
];
