import { Subject } from '../../hooks/useSubject';
import {
  LeagueCPCap,
  PokemonIVs,
  PokemonStats,
  PowerUpLevelCap,
} from '../reference';
import { getMaximizedStats } from './getMaximizedStats';
import { getPossibleIVs } from './getPossibleIVs';

type SpreadStats = {
  iv: PokemonIVs;
  cp: number;
  level: number;
  stats: PokemonStats;
  product: number;
  rank: number;
  percent: number;
};

export function rankCalculator(
  subject: Subject,
  maxCP: LeagueCPCap,
  maxLevel: PowerUpLevelCap,
) {
  const ivCombinations = getPossibleIVs(subject.floor);

  const all: SpreadStats[] = ivCombinations
    .map((iv) => getMaximizedStats(subject.species, iv, maxCP, maxLevel))
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
  return {
    subject:
      all.find(
        ({ iv }) =>
          iv.atk === subject.iv.atk &&
          iv.def === subject.iv.def &&
          iv.sta === subject.iv.sta,
      ) ?? null,
    best: all[0],
    all,
  };
}
