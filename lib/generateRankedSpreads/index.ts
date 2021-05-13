import { LeagueCPCap } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { IVFloor } from '../../data/ivFloor';
import { Pokemon, PokemonIVs } from '../../data/pokedex';

import { getMaximizedStats } from './getMaximizedStats';
import { getIVSpreads } from './getIVSpreads';
import { RankableMetric } from '../../data/stat';

export type ComparableToMax = {
  value: number;
  percentOfMax: number;
};
export type RankedSpread = {
  ivs: PokemonIVs;
  cp: number;
  level: number;
  rank: number;
  product: ComparableToMax;
  stats: {
    atk: ComparableToMax;
    def: ComparableToMax;
    sta: ComparableToMax;
  };
};

const compareToMax = (value: number, max: number): ComparableToMax => ({
  value,
  percentOfMax: value / max,
});

export function generateRankedSpreads(
  pokemon: Pokemon,
  floor: IVFloor,
  maxCP: LeagueCPCap,
  maxLevel: LevelCapNumber,
  rankingMetric: RankableMetric,
) {
  return getIVSpreads(floor)
    .map((ivs) => getMaximizedStats(pokemon, ivs, maxCP, maxLevel))
    .sort((a, b) => {
      function getRankableMetric(x: typeof a) {
        if (rankingMetric === 'product') {
          return x.product;
        } else {
          return x.stats[rankingMetric];
        }
      }

      // in instances where two spreads have the same rankable metric value we
      // should give preference to the spread with higher cp.
      if (getRankableMetric(b) === getRankableMetric(a)) {
        return b.cp - a.cp;
      }

      return getRankableMetric(b) - getRankableMetric(a);
    })
    .map(
      (spread, i, all): RankedSpread => {
        return {
          ivs: spread.ivs,
          cp: spread.cp,
          level: spread.level,
          rank: i + 1,
          stats: {
            atk: compareToMax(spread.stats.atk, all[0].stats.atk),
            def: compareToMax(spread.stats.def, all[0].stats.def),
            sta: compareToMax(spread.stats.sta, all[0].stats.sta),
          },
          product: compareToMax(spread.product, all[0].product),
        };
      },
    );
}
