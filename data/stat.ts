export type StatKey = 'atk' | 'def' | 'sta';

export const STATS: { key: StatKey; name: string }[] = [
  { key: 'atk', name: 'Attack' },
  { key: 'def', name: 'Defense' },
  { key: 'sta', name: 'Stamina' },
];

export type RankableMetric = StatKey | 'product';

export const RANKABLE_METRICS: { key: RankableMetric; name: string }[] = [
  { key: 'product', name: 'Stat Product' },
  { key: 'atk', name: 'Attack' },
  { key: 'def', name: 'Defense' },
  { key: 'sta', name: 'Stamina' },
];
