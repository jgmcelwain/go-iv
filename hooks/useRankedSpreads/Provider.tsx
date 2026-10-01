import React, { FC, ReactNode } from 'react';

import { Context } from '.';

import { useMemoRankedSpreads } from './useMemoRankedSpreads';
import { Pokemon } from '../../data/pokedex';

export const Provider: FC<{
  children: ReactNode;
  species?: Pokemon;
}> = ({ children, species }) => {
  const rankedSpreads = {
    [40]: useMemoRankedSpreads(40, species),
    [41]: useMemoRankedSpreads(41, species),
    [50]: useMemoRankedSpreads(50, species),
    [51]: useMemoRankedSpreads(51, species),
    [52]: useMemoRankedSpreads(52, species),
    [53]: useMemoRankedSpreads(53, species),
  };

  return <Context.Provider value={rankedSpreads}>{children}</Context.Provider>;
};
