import React, { FC, ReactNode } from 'react';

import { Context } from '.';

import { useMemoRankedSpreads } from './useMemoRankedSpreads';

export const Provider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const rankedSpreads = {
    [40]: useMemoRankedSpreads(40),
    [41]: useMemoRankedSpreads(41),
    [50]: useMemoRankedSpreads(50),
    [51]: useMemoRankedSpreads(51),
  };

  return <Context.Provider value={rankedSpreads}>{children}</Context.Provider>;
};
