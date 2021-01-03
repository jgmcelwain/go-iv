import { useContext } from 'react';

import { LeagueKey, LevelCapNumber, OutputDataKey } from '../../data/reference';

import { Context } from './Context';

export type Settings = {
  leagues: { [key in LeagueKey]: boolean };
  levelCaps: { [key in LevelCapNumber]: boolean };
  outputData: { [key in OutputDataKey]: boolean };
};

export * from './Context';
export * from './settingsReducer';
export * from './getInitialSettings';

export function useSettings() {
  const value = useContext(Context);

  return value;
}
