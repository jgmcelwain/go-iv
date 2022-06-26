import { RankableMetric } from '../data/stat';
import { RankedSpread } from '../lib/generateRankedSpreads';

export type SpreadColors = {
  background: string;
  text: string;
};

export function getRankedSpreadColors(
  rankedSpread: RankedSpread | undefined,
  rankingMetric: RankableMetric,
): SpreadColors {
  const rankingMetricPercent =
    rankingMetric === 'product'
      ? rankedSpread?.product.percentOfMax
      : rankedSpread?.stats[rankingMetric].percentOfMax;

  if (rankingMetricPercent === undefined || rankedSpread === null) {
    return { background: 'transparent', text: 'transparent' };
  }

  if (rankingMetricPercent === 1) {
    return { background: 'bg-purple-50', text: 'text-purple-800' };
  } else if (rankingMetricPercent >= 0.98) {
    return { background: 'bg-green-50', text: 'text-green-800' };
  } else if (rankingMetricPercent >= 0.95) {
    return { background: 'bg-yellow-50', text: 'text-yellow-800' };
  } else if (rankingMetricPercent >= 0.9) {
    return { background: 'bg-orange-50', text: 'text-orange-800' };
  } else {
    return { background: 'bg-red-50', text: 'text-red-800' };
  }
}
