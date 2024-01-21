import { createContext, useContext } from 'react';

import { League } from '../../data/league';
import { LevelCap } from '../../data/levelCap';
import { useCollapsedState } from './Provider';

export { Provider } from './Provider';

export const Context = createContext<{
  league: League;
  setInspectedLevelCap: (arg0: LevelCap | null) => void;
  inspectedLevelCap: LevelCap | null;
  collapsed: ReturnType<typeof useCollapsedState>;
} | null>(null);

export function useLeague() {
  const value = useContext(Context);

  if (value === null) {
    throw new Error(
      'useLeague must be called within the context of a LeagueProvider',
    );
  }

  return value;
}
