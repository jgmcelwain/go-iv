import React, { FunctionComponent, ReactNode, useState, useMemo } from 'react';

import { League } from '../../data/league';
import { LevelCap } from '../../data/levelCap';

import { Context } from '.';

export const Provider: FunctionComponent<{
  league: League;
  children: ReactNode;
}> = ({ league, children }) => {
  const [inspectedLevelCap, setInspectedLevelCap] = useState<LevelCap>(null);
  const displayMode = useMemo(
    () => (inspectedLevelCap !== null ? 'top' : 'candidate'),
    [inspectedLevelCap],
  );

  return (
    <Context.Provider
      value={{
        league,
        displayMode,
        inspectedLevelCap,
        setDisplayMode: (mode, levelCap) => {
          setInspectedLevelCap(mode === 'candidate' ? null : levelCap);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
