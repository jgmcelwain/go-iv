import {
  IVFloor,
  LeagueCPCap,
  LevelCapNumber,
  Pokemon,
  RankedSpreadStats,
} from '../../data/reference';
import { getMaximizedStats } from './getMaximizedStats';
import { getIVSpreads } from './getIVSpreads';

export function generateRankedSpreads(
  pokemon: Pokemon,
  floor: IVFloor,
  maxCP: LeagueCPCap,
  maxLevel: LevelCapNumber,
) {
  console.log(pokemon.id, floor, maxCP, maxLevel);
  return getIVSpreads(floor)
    .map((ivs) => getMaximizedStats(pokemon, ivs, maxCP, maxLevel))
    .sort((a, b) => {
      // in instances where two spreads have the same product (usually as a
      // result of hp rounding) give preference to the spread with higher cp.
      if (b.product === a.product) {
        return b.cp - a.cp;
      }

      return b.product - a.product;
    })
    .map(
      (stats, i, all): RankedSpreadStats => {
        const percent = stats.product / all[0].product;
        const rank = i + 1;

        return { ...stats, percent, rank };
      },
    );
}
