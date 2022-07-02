import { createContext, useContext } from 'react';

import { LeagueKey } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { OutputDataKey } from '../../data/outputData';
import { Dispatch } from './settingsReducer';

export { Provider } from './Provider';
export { SettingsActionTypes } from './settingsReducer';
export { getInitialSettings } from './getInitialSettings';

export const Context =
  createContext<{
    settings: Settings;
    dispatch: Dispatch;
  } | null>(null);

export type Settings = {
  leagues: { [key in LeagueKey]: boolean };
  leagueOrder: LeagueKey[];
  levelCaps: { [key in LevelCapNumber]: boolean };
  outputData: { [key in OutputDataKey]: boolean };
  showSpeculative: boolean;
  showShadowToggle: boolean;
  showRankingMetric: boolean;
  allowImpossibleFloors: boolean;
};

export function useSettings() {
  const value = useContext(Context);

  if (value === null) {
    throw new Error(
      'useSettings must be called within the context of a SettingsProvider',
    );
  }

  return value;
}
