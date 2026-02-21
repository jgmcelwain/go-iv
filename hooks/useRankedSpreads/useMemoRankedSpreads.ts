import { useMemo } from 'react';

import { LevelCapNumber, getMegaBaseCap } from '../../data/levelCap';

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
    const baseCap = getMegaBaseCap(levelCapNumber);

    if (baseCap !== null) {
      if (
        !settings.showMegaLevelCaps ||
        league.cp !== 10000 ||
        !candidate.species.name.startsWith('Mega ') ||
        settings.levelCaps[baseCap] === false
      ) {
        return [];
      }
    } else if (settings.levelCaps[levelCapNumber] === false) {
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
