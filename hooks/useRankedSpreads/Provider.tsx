import React, { FC, ReactNode } from 'react';

import { Context } from '.';

import { useRankedSpreadsAtLevelCap } from './useSpreadsAtLevelCap';
import { LevelCapNumber } from '../../data/levelCap';
import { Pokemon } from '../../data/pokedex';

export const Provider: FC<{
  children: ReactNode;
  levelCap: LevelCapNumber;
  species: Pokemon;
}> = ({ children, levelCap, species }) => {
  const rankedSpreads = useRankedSpreadsAtLevelCap(levelCap, species);

  return <Context.Provider value={rankedSpreads}>{children}</Context.Provider>;
};
