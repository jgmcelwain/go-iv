import { useMemo } from 'react';

import { LevelCapNumber, RankedSpreadStats } from '../../data/reference';

import { useSubject } from '../useSubject';
import { useSettings } from '../useSettings';
import { useLeague } from '../useLeague';

import { generateRankedSpreads } from '../../lib/generateRankedSpreads';

export function useMemoRankedSpreads(levelCapNumber: LevelCapNumber) {
  const { subject } = useSubject();
  const { settings } = useSettings();
  const { league } = useLeague();

  const value = useMemo<RankedSpreadStats[]>(() => {
    if (settings.levelCaps[levelCapNumber] === true) {
      return generateRankedSpreads(
        subject.species,
        subject.floor,
        league.cp,
        levelCapNumber,
      );
    } else {
      return [];
    }
  }, [
    settings.levelCaps[levelCapNumber],
    subject.species.stats.atk,
    subject.species.stats.def,
    subject.species.stats.sta,
    subject.floor,
  ]);

  return value;
}
