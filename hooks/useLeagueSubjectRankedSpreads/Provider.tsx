import React, { FunctionComponent, ReactChild } from 'react';

import { Context } from '.';

import { useLeague } from '../useLeague';
import { useMemoRankedSpreads } from './useMemoRankedSpreads';

export const Provider: FunctionComponent<{
  children: ReactChild | ReactChild[];
}> = ({ children }) => {
  const { league } = useLeague();

  const rankedSpreads = {
    [40]: useMemoRankedSpreads(league.cp, 40),
    [41]: useMemoRankedSpreads(league.cp, 41),
    [50]: useMemoRankedSpreads(league.cp, 50),
    [51]: useMemoRankedSpreads(league.cp, 51),
  };

  return <Context.Provider value={rankedSpreads}>{children}</Context.Provider>;
};
