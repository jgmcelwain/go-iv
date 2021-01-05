import { useMemo } from 'react';

import {
  LeagueCPCap,
  LevelCapNumber,
  RankedSpreadStats,
} from '../../data/reference';

import { useSubject } from '../useSubject';
import { useSettings } from '../useSettings';

import { generateRankedSpreads } from '../../lib/generateRankedSpreads';

export function useMemoRankedSpreads(
  cp: LeagueCPCap,
  levelCapNumber: LevelCapNumber,
) {
  const { subject } = useSubject();
  const { settings } = useSettings();

  const value = useMemo<RankedSpreadStats[]>(() => {
    if (settings.levelCaps[levelCapNumber] === true) {
      return generateRankedSpreads(
        subject.species,
        subject.floor,
        cp,
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
