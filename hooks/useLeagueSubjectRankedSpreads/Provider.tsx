import React, { FunctionComponent, ReactChild } from 'react';

import { Context } from '.';
import { LevelCapNumber, RankedSpread } from '../../data/reference';

import { useMemoRankedSpreads } from './useMemoRankedSpreads';

export const Provider: FunctionComponent<{
  children: ReactChild | ReactChild[];
}> = ({ children }) => {
  const rankedSpreads: { [K in LevelCapNumber]: RankedSpread[] } = {
    [40]: useMemoRankedSpreads(40),
    [41]: useMemoRankedSpreads(41),
    [50]: useMemoRankedSpreads(50),
    [51]: useMemoRankedSpreads(51),
  };

  return <Context.Provider value={rankedSpreads}>{children}</Context.Provider>;
};
