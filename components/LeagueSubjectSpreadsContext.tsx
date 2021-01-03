import React, {
  FunctionComponent,
  createContext,
  useContext,
  useMemo,
  ReactChild,
} from 'react';
import { Context as LeagueContext } from './LeagueContext';
import { Context as SettingsContext } from './SettingsContext';
import { Context as SubjectContext } from './SubjectContext';

import { generateRankedSpreads } from '../lib/generateRankedSpreads';
import {
  LevelCapNumber,
  LEVEL_CAPS,
  RankedSpreadStats,
} from '../data/reference';

type LeagueRankedSubjectSpreads = {
  [K in LevelCapNumber]?: RankedSpreadStats[];
};

export const Context = createContext<LeagueRankedSubjectSpreads>(null);

export const Wrapper: FunctionComponent<{
  children: ReactChild | ReactChild[];
}> = ({ children }) => {
  const { subject } = useContext(SubjectContext);
  const { settings } = useContext(SettingsContext);
  const { league } = useContext(LeagueContext);

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
