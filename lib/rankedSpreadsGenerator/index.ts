import {
  LeagueCPCap,
  PokemonIVs,
  PokemonStats,
  LevelCapNumber,
  Pokemon,
  IVFloor,
} from '../../data/reference';
import { getMaximizedStats } from './getMaximizedStats';
import { getPossibleIVs } from './getPossibleIVs';

type SpreadStats = {
  ivs: PokemonIVs;
  cp: number;
  level: number;
  stats: PokemonStats;
  product: number;
  rank: number;
  percent: number;
};

export function rankedSpreadsGenerator(
  pokemon: Pokemon,
  floor: IVFloor,
  maxCP: LeagueCPCap,
  maxLevel: LevelCapNumber,
) {
  const ivCombinations = getPossibleIVs(floor);

  const ranks: SpreadStats[] = ivCombinations
    .map((iv) => getMaximizedStats(pokemon, iv, maxCP, maxLevel))
    .sort((a, b) => {
      if (b.product === a.product) {
        return b.cp - a.cp;
      }

      return b.product - a.product ?? b.cp - a.cp;
    })
    .map((stats, i, all) => {
      const percent = stats.product / all[0].product;
      const rank = i + 1;

      return { ...stats, percent, rank };
    });

  return ranks;
}
