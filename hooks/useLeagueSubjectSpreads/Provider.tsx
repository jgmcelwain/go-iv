import React, { FunctionComponent, ReactChild } from 'react';

import { Context, LeagueRankedSubjectSpreads } from '.';

import { useMemoRankedSpreads } from './useMemoRankedSpreads';

export const Provider: FunctionComponent<{
  children: ReactChild | ReactChild[];
}> = ({ children }) => {
  const rankedSpreads: LeagueRankedSubjectSpreads = {
    [40]: useMemoRankedSpreads(40),
    [41]: useMemoRankedSpreads(41),
    [50]: useMemoRankedSpreads(50),
    [51]: useMemoRankedSpreads(51),
  };

  return <Context.Provider value={rankedSpreads}>{children}</Context.Provider>;
};
