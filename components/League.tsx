import React, {
  createContext,
  FunctionComponent,
  useState,
  useMemo,
} from 'react';

import { League, LevelCap } from '../data/reference';

import LeagueHeader from './LeagueHeader';
import LeagueSubject from './LeagueSubject';
import LeagueTopSpreadsForLevel from './LeagueTopSpreadsForLevel';

type DisplayMode = 'subject' | 'top';

export const LeagueDisplayModeContext = createContext<{
  displayMode: DisplayMode;
  inspectedLevelCap: LevelCap;
  setDisplayMode: (arg0: DisplayMode, arg2?: LevelCap) => void;
}>(null);

const LeagueWrapper: FunctionComponent<{ league: League }> = ({ league }) => {
  const [inspectedLevelCap, setInspectedLevelCap] = useState<LevelCap>(null);
  const displayMode = useMemo(
    () => (inspectedLevelCap !== null ? 'top' : 'subject'),
    [inspectedLevelCap],
  );

  return (
    <LeagueDisplayModeContext.Provider
      value={{
        displayMode,
        inspectedLevelCap,
        setDisplayMode: (mode, levelCap) => {
          setInspectedLevelCap(mode === 'subject' ? null : levelCap);
        },
      }}
    >
      <div className='w-full sm:rounded-lg overflow-hidden'>
        <LeagueHeader league={league} />

        <div className='w-full overflow-x-scroll bg-gray-100'>
          {displayMode === 'subject' ? (
            <LeagueSubject league={league} />
          ) : (
            <LeagueTopSpreadsForLevel
              league={league}
              levelCap={inspectedLevelCap}
            />
          )}
        </div>
      </div>
    </LeagueDisplayModeContext.Provider>
  );
};

export default LeagueWrapper;
