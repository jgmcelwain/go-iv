import { useMemo } from 'react';

import { LevelCapNumber } from '../../data/levelCap';
import { Pokemon } from '../../data/pokedex';

import { useLeague } from '../useLeague';
import { useCandidate } from '../useCandidate';

import { getRankedSpreads, rankSpread } from '../../lib/generateRankedSpreads';

function useRankingOptions(levelCapNumber: LevelCapNumber, species: Pokemon) {
  const { league } = useLeague();
  const { candidate } = useCandidate();

  return {
    pokemon: species,
    floor: candidate.floor,
    maxCP: league.cp,
    maxLevel: levelCapNumber,
    minLevel: candidate.minimumLevel,
    rankingMetric: candidate.rankingMetric,
  };
}

export function useRankedSpreadsAtLevelCap(
  levelCapNumber: LevelCapNumber,
  species: Pokemon,
) {
  return getRankedSpreads(useRankingOptions(levelCapNumber, species));
}

export function useCandidateSpreadAtLevelCap(
  levelCapNumber: LevelCapNumber,
  species: Pokemon,
) {
  const { candidate } = useCandidate();
  const options = useRankingOptions(levelCapNumber, species);
  const { atk, def, sta } = candidate.ivs;
  const { pokemon, floor, maxCP, maxLevel, minLevel, rankingMetric } = options;

  return useMemo(
    () =>
      rankSpread(
        { pokemon, floor, maxCP, maxLevel, minLevel, rankingMetric },
        { atk, def, sta },
      ),
    [pokemon, floor, maxCP, maxLevel, minLevel, rankingMetric, atk, def, sta],
  );
}
