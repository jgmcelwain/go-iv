import { LevelCapNumber } from '../data/levelCap';
import { POKEDEX, Pokemon, PokemonIVs } from '../data/pokedex';
import { RankableMetric } from '../data/stat';

import {
  RankedSpread,
  getMetricPercent,
  getRankedSpreads,
} from './generateRankedSpreads';

export type MegaLeagueSpread = {
  ivs: PokemonIVs;
  rank: number;
  averagePercent: number;
  great: RankedSpread;
  ultra: RankedSpread;
};

export const MEGA_POKEMON = POKEDEX.filter((pokemon) =>
  /\b(Mega|Primal)\b/.test(pokemon.name),
);

export const ivsKey = ({ atk, def, sta }: PokemonIVs) => `${atk}-${def}-${sta}`;

export function getMegaLeagueSpreads(
  pokemon: Pokemon,
  maxLevel: LevelCapNumber,
  rankingMetric: RankableMetric,
): MegaLeagueSpread[] {
  const options = {
    pokemon,
    floor: pokemon.floor ?? 0,
    maxLevel,
    minLevel: 1,
    rankingMetric,
  } as const;
  const ultraByIVs = new Map(
    getRankedSpreads({ ...options, maxCP: 2500 }).map((spread) => [
      ivsKey(spread.ivs),
      spread,
    ]),
  );

  const spreads = getRankedSpreads({ ...options, maxCP: 1500 }).flatMap(
    (great) => {
      const ultra = ultraByIVs.get(ivsKey(great.ivs));
      if (!ultra) return [];
      const averagePercent =
        (getMetricPercent(great, rankingMetric) +
          getMetricPercent(ultra, rankingMetric)) /
        2;
      return [{ ivs: great.ivs, rank: 0, averagePercent, great, ultra }];
    },
  );
  spreads.sort(
    (a, b) =>
      b.averagePercent - a.averagePercent ||
      a.great.rank + a.ultra.rank - (b.great.rank + b.ultra.rank),
  );

  let rank = 1;
  spreads.forEach((spread, i) => {
    if (i > 0 && spread.averagePercent !== spreads[i - 1].averagePercent) {
      rank = i + 1;
    }
    spread.rank = rank;
  });

  return spreads;
}
