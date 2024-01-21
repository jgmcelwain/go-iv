import React, { FC, ReactNode, useState } from 'react';

import { League } from '../../data/league';
import { LevelCap } from '../../data/levelCap';

import { Context } from '.';

function useInspectedLevelCapState() {
  const [inspectedLevelCap, setInspectedLevelCap] = useState<LevelCap | null>(
    null,
  );

  return [inspectedLevelCap, setInspectedLevelCap] as const;
}

export function useCollapsedState() {
  const [collapsed, setCollapsed] = useState(false);

  const collapse = () => setCollapsed(true);
  const expand = () => setCollapsed(false);
  const toggle = () => setCollapsed((val) => !val);

  return {
    value: collapsed,
    collapse,
    expand,
    toggle,
  };
}

export const Provider: FC<{
  league: League;
  children: ReactNode;
}> = ({ league, children }) => {
  const [inspectedLevelCap, setInspectedLevelCap] = useInspectedLevelCapState();
  const collapsedState = useCollapsedState();

  return (
    <Context.Provider
      value={{
        league,
        inspectedLevelCap,
        setInspectedLevelCap,
        collapsed: collapsedState,
      }}
    >
      {children}
    </Context.Provider>
  );
};
