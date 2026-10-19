import { LeagueCPCap } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { IVFloor } from '../../data/ivFloor';
import { Pokemon, PokemonIVs, PokemonStats } from '../../data/pokedex';

import { getMaximizedStats } from './getMaximizedStats';
import { getIVSpreads } from './getIVSpreads';
import { RankableMetric } from '../../data/stat';

export type ComparableToMax = {
  value: number;
  percentOfMax: number;
};
export type SpreadWithMaximizedStats = {
  ivs: PokemonIVs;
  cp: number;
  level: number;
  product: number;
  bulkProduct: number;
  stats: PokemonStats;
};
export type RankedSpread = {
  ivs: PokemonIVs;
  cp: number;
  level: number;
  rank: number;
  product: ComparableToMax;
  bulkProduct: ComparableToMax;
  stats: {
    atk: ComparableToMax;
    def: ComparableToMax;
    sta: ComparableToMax;
  };
};

type ScoredSpread = SpreadWithMaximizedStats & {
  score: number;
  tiebreak: number;
};

type RankingOptions = {
  pokemon: Pokemon;
  floor: IVFloor;
  maxCP: LeagueCPCap;
  maxLevel: LevelCapNumber;
  minLevel: number;
  rankingMetric: RankableMetric;
};

const compareToMax = (value: number, max: number): ComparableToMax => ({
  value,
  percentOfMax: value / max,
});

function getScoredSpreads({
  pokemon,
  floor,
  maxCP,
  maxLevel,
  minLevel,
  rankingMetric,
}: RankingOptions) {
  const spreads: ScoredSpread[] = [];

  for (const ivs of getIVSpreads(floor)) {
    const spread = getMaximizedStats(pokemon, ivs, maxCP, maxLevel);
    if (spread.level < minLevel) continue;

    spreads.push({
      ...spread,
      score:
        rankingMetric === 'product' || rankingMetric === 'bulkProduct'
          ? spread[rankingMetric]
          : spread.stats[rankingMetric],
      // spreads with equal scores share a rank, so the tiebreak only decides
      // the order they are listed in
      tiebreak: rankingMetric === 'product' ? spread.cp : spread.product,
    });
  }

  return spreads;
}

const compareSpreads = (a: ScoredSpread, b: ScoredSpread) =>
  b.score - a.score || b.tiebreak - a.tiebreak;

const toRankedSpread = (
  spread: ScoredSpread,
  rank: number,
  rankOne: ScoredSpread,
): RankedSpread => ({
  rank,
  ivs: spread.ivs,
  cp: spread.cp,
  level: spread.level,
  stats: {
    atk: compareToMax(spread.stats.atk, rankOne.stats.atk),
    def: compareToMax(spread.stats.def, rankOne.stats.def),
    sta: compareToMax(spread.stats.sta, rankOne.stats.sta),
  },
  product: compareToMax(spread.product, rankOne.product),
  bulkProduct: compareToMax(spread.bulkProduct, rankOne.bulkProduct),
});

export function generateRankedSpreads(options: RankingOptions) {
  const spreads = getScoredSpreads(options).sort(compareSpreads);

  let rank = 1;
  return spreads.map((spread, i) => {
    if (i > 0 && spread.score !== spreads[i - 1].score) rank = i + 1;
    return toRankedSpread(spread, rank, spreads[0]);
  });
}

export function rankSpread(options: RankingOptions, ivs: PokemonIVs) {
  const spreads = getScoredSpreads(options);
  const target = spreads.find(
    (spread) =>
      spread.ivs.atk === ivs.atk &&
      spread.ivs.def === ivs.def &&
      spread.ivs.sta === ivs.sta,
  );
  if (target === undefined) return undefined;

  let rankOne = spreads[0];
  let higherCount = 0;
  for (const spread of spreads) {
    if (compareSpreads(spread, rankOne) < 0) rankOne = spread;
    if (spread.score > target.score) higherCount++;
  }

  return toRankedSpread(target, higherCount + 1, rankOne);
}

const CACHE_LIMIT = 6;
const cache = new Map<string, readonly RankedSpread[]>();

export function getRankedSpreads(
  options: RankingOptions,
): readonly RankedSpread[] {
  const { pokemon, floor, maxCP, maxLevel, minLevel, rankingMetric } = options;
  const key = [pokemon.id, floor, maxCP, maxLevel, minLevel, rankingMetric]
    .map(String)
    .join('|');

  const cached = cache.get(key);
  if (cached) {
    cache.delete(key);
    cache.set(key, cached);
    return cached;
  }

  const spreads = generateRankedSpreads(options);
  if (cache.size >= CACHE_LIMIT) {
    const oldestKey = cache.keys().next().value as string;
    cache.delete(oldestKey);
  }
  cache.set(key, spreads);
  return spreads;
}
