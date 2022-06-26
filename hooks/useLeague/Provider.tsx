import React, { FC, ReactNode, useState } from 'react';

import { League } from '../../data/league';
import { LevelCap } from '../../data/levelCap';

import { Context } from '.';

function useInspectedLevelCapState() {
  const [inspectedLevelCap, setInspectedLevelCap] =
    useState<LevelCap | null>(null);

  return [inspectedLevelCap, setInspectedLevelCap] as const;
}

export const Provider: FC<{
  league: League;
  children: ReactNode;
}> = ({ league, children }) => {
  const [inspectedLevelCap, setInspectedLevelCap] = useInspectedLevelCapState();

  return (
    <Context.Provider
      value={{
        league,
        inspectedLevelCap,
        setInspectedLevelCap,
      }}
    >
      {children}
    </Context.Provider>
  );
};
