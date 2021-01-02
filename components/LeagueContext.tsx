import React, {
  FunctionComponent,
  ReactChild,
  createContext,
  useState,
  useMemo,
} from 'react';

import { League, LevelCap } from '../data/reference';

type DisplayMode = 'subject' | 'top';
export const Context = createContext<{
  league: League;
  displayMode: DisplayMode;
  inspectedLevelCap: LevelCap;
  setDisplayMode: (arg0: DisplayMode, arg2?: LevelCap) => void;
}>(null);

export const Wrapper: FunctionComponent<{
  league: League;
  children: ReactChild | ReactChild[];
}> = ({ league, children }) => {
  const [inspectedLevelCap, setInspectedLevelCap] = useState<LevelCap>(null);
  const displayMode = useMemo(
    () => (inspectedLevelCap !== null ? 'top' : 'subject'),
    [inspectedLevelCap],
  );

  return (
    <Context.Provider
      value={{
        league,
        displayMode,
        inspectedLevelCap,
        setDisplayMode: (mode, levelCap) => {
          setInspectedLevelCap(mode === 'subject' ? null : levelCap);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
