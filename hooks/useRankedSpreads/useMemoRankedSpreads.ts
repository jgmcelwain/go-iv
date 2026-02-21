import { useMemo } from 'react';

import { LevelCapNumber, isLevelCapEnabled } from '../../data/levelCap';

import { useLeague } from '../useLeague';
import { useCandidate } from '../useCandidate';
import { useSettings } from '../useSettings';

import {
  generateRankedSpreads,
  RankedSpread,
} from '../../lib/generateRankedSpreads';

export function useMemoRankedSpreads(levelCapNumber: LevelCapNumber) {
  const { league } = useLeague();
  const { candidate } = useCandidate();
  const { settings } = useSettings();

  const value = useMemo<RankedSpread[]>(() => {
    if (
      !isLevelCapEnabled(levelCapNumber, settings.levelCaps, {
        showMegaLevelCaps: settings.showMegaLevelCaps,
        isMasterLeague: league.cp === 10000,
        isMegaSpecies: candidate.species.name.startsWith('Mega '),
      })
    ) {
      return [];
    }

    return generateRankedSpreads(
      candidate.species,
      candidate.floor,
      league.cp,
      levelCapNumber,
      candidate.minimumLevel,
      candidate.rankingMetric,
    );
  }, [
    settings.levelCaps,
    settings.showMegaLevelCaps,
    levelCapNumber,
    candidate.species,
    candidate.species.name,
    candidate.floor,
    candidate.minimumLevel,
    candidate.rankingMetric,
    league.cp,
  ]);

  return value;
}
