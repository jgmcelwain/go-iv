import { RankedSpreadStats } from '../data/reference';

export type SpreadColors = {
  background: string;
  text: string;
};

export function getRankedSpreadColors(spread: RankedSpreadStats): SpreadColors {
  if (!spread?.percent) {
    return { background: 'transparent', text: 'transparent' };
  }

  if (spread.percent === 1) {
    return { background: 'bg-purple-50', text: 'text-purple-700' };
  } else if (spread.percent >= 0.98) {
    return { background: 'bg-green-50', text: 'text-green-700' };
  } else if (spread.percent >= 0.95) {
    return { background: 'bg-yellow-50', text: 'text-yellow-700' };
  } else if (spread.percent >= 0.9) {
    return { background: 'bg-orange-50', text: 'text-orange-700' };
  } else {
    return { background: 'bg-red-50', text: 'text-red-700' };
  }
}
