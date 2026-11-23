import { RankableMetric } from '../data/stat';
import { RankedSpread, getMetricPercent } from '../lib/generateRankedSpreads';

export type SpreadColors = {
  background: string;
  text: string;
};

export function getPercentColors(percent: number | undefined): SpreadColors {
  if (percent === undefined) {
    return { background: 'bg-gray-100', text: 'text-gray-700' };
  }

  if (percent === 1) {
    return { background: 'bg-purple-50', text: 'text-purple-800' };
  } else if (percent >= 0.98) {
    return { background: 'bg-green-50', text: 'text-green-800' };
  } else if (percent >= 0.95) {
    return { background: 'bg-yellow-50', text: 'text-yellow-800' };
  } else if (percent >= 0.9) {
    return { background: 'bg-orange-50', text: 'text-orange-800' };
  } else {
    return { background: 'bg-red-50', text: 'text-red-800' };
  }
}

export function getRankedSpreadColors(
  rankedSpread: RankedSpread | undefined,
  rankingMetric: RankableMetric,
): SpreadColors {
  return getPercentColors(
    rankedSpread && getMetricPercent(rankedSpread, rankingMetric),
  );
}
