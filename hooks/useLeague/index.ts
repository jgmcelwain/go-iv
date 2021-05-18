import { createContext, useContext } from 'react';

import { League } from '../../data/league';
import { LevelCap } from '../../data/levelCap';

export { Provider } from './Provider';

type DisplayMode = 'candidate' | 'top';
export const Context =
  createContext<{
    league: League;
    displayMode: DisplayMode;
    inspectedLevelCap: LevelCap;
    setDisplayMode: (arg0: DisplayMode, arg2?: LevelCap) => void;
  }>(null);

export function useLeague() {
  return useContext(Context);
}
