import { useMemo } from 'react';

import { LevelCapNumber, isLevelCapEnabled } from '../../data/levelCap';
import { Pokemon } from '../../data/pokedex';

import { useLeague } from '../useLeague';
import { useCandidate } from '../useCandidate';
import { useSettings } from '../useSettings';

import {
  generateRankedSpreads,
  RankedSpread,
} from '../../lib/generateRankedSpreads';

export function useMemoRankedSpreads(
  levelCapNumber: LevelCapNumber,
  otherForm?: Pokemon,
) {
  const { league } = useLeague();
  const { candidate } = useCandidate();
  const { settings } = useSettings();
  const species = otherForm ?? candidate.species.defaultForm;

  const value = useMemo<RankedSpread[]>(() => {
    if (
      !isLevelCapEnabled(levelCapNumber, settings.levelCaps, {
        showMegaLevelCaps: settings.showMegaLevelCaps,
        isMasterLeague: league.cp === 10000,
        isMegaSpecies: species.name.startsWith('Mega '),
      })
    ) {
      return [];
    }

    return generateRankedSpreads(
      species,
      candidate.floor,
      league.cp,
      levelCapNumber,
      candidate.minimumLevel,
      candidate.rankingMetric,
      settings.formChangeWholeLevels,
    );
  }, [
    settings.levelCaps,
    settings.showMegaLevelCaps,
    settings.formChangeWholeLevels,
    levelCapNumber,
    species,
    candidate.floor,
    candidate.minimumLevel,
    candidate.rankingMetric,
    league.cp,
  ]);

  return value;
}
