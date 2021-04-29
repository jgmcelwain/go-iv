import { createContext, useContext } from 'react';
import { League, LevelCap } from '../../data/reference';

export { Provider } from './Provider';

type DisplayMode = 'candidate' | 'top';
export const Context = createContext<{
  league: League;
  displayMode: DisplayMode;
  inspectedLevelCap: LevelCap;
  setDisplayMode: (arg0: DisplayMode, arg2?: LevelCap) => void;
}>(null);

export function useLeague() {
  const value = useContext(Context);

  return value;
}
