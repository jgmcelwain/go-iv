import React, { FunctionComponent, useMemo, ReactChild } from 'react';

import { Context, LeagueRankedSubjectSpreads } from '.';

import { useSubject } from '../useSubject';
import { useSettings } from '../useSettings';
import { useLeague } from '../useLeague';

import { generateRankedSpreads } from '../../lib/generateRankedSpreads';
import { LEVEL_CAPS } from '../../data/reference';

export const Provider: FunctionComponent<{
  children: ReactChild | ReactChild[];
}> = ({ children }) => {
  const { subject } = useSubject();
  const { settings } = useSettings();
  const { league } = useLeague();

  const rankedSpreads = useMemo<LeagueRankedSubjectSpreads>(() => {
    const output = {};

    for (let i = 0; i < LEVEL_CAPS.length; i++) {
      const { level } = LEVEL_CAPS[i];

      if (settings.levelCaps[level]) {
        output[level] = generateRankedSpreads(
          subject.species,
          subject.floor,
          league.cp,
          level,
        );
      }
    }

    return output;
  }, [
    settings.levelCaps,
    subject.species.stats.atk,
    subject.species.stats.def,
    subject.species.stats.sta,
    subject.floor,
  ]);

  return <Context.Provider value={rankedSpreads}>{children}</Context.Provider>;
};
