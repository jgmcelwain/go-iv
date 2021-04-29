import { useMemo } from 'react';

import { LevelCapNumber, RankedSpread } from '../../data/reference';

import { useLeague } from '../useLeague';
import { useCandidate } from '../useCandidate';
import { useSettings } from '../useSettings';

import { generateRankedSpreads } from '../../lib/generateRankedSpreads';

export function useMemoRankedSpreads(levelCapNumber: LevelCapNumber) {
  const { league } = useLeague();
  const { candidate } = useCandidate();
  const { settings } = useSettings();

  const value = useMemo<RankedSpread[]>(() => {
    if (settings.levelCaps[levelCapNumber] === false) return [];

    return generateRankedSpreads(
      candidate.species,
      candidate.floor,
      league.cp,
      levelCapNumber,
    );
  }, [
    settings.levelCaps[levelCapNumber],
    candidate.species.stats.atk,
    candidate.species.stats.def,
    candidate.species.stats.sta,
    candidate.floor,
  ]);

  return value;
}
