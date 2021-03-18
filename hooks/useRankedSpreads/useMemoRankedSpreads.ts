import { useMemo } from 'react';

import { LevelCapNumber, RankedSpread } from '../../data/reference';

import { useLeague } from '../useLeague';
import { useSubject } from '../useSubject';
import { useSettings } from '../useSettings';

import { generateRankedSpreads } from '../../lib/generateRankedSpreads';

export function useMemoRankedSpreads(levelCapNumber: LevelCapNumber) {
  const { league } = useLeague();
  const { subject } = useSubject();
  const { settings } = useSettings();

  const value = useMemo<RankedSpread[]>(() => {
    if (settings.levelCaps[levelCapNumber] === false) return [];

    return generateRankedSpreads(
      subject.species,
      subject.floor,
      league.cp,
      levelCapNumber,
    );
  }, [
    settings.levelCaps[levelCapNumber],
    subject.species.stats.atk,
    subject.species.stats.def,
    subject.species.stats.sta,
    subject.floor,
  ]);

  return value;
}
