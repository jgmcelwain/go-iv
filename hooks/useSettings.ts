import { Dispatch as ReactDispatch, useEffect, useReducer } from 'react';

import Settings from '../components/Settings';
import {
  ActionMap,
  LeagueKey,
  LevelCapNumber,
  OutputDataKey,
} from '../data/reference';

import { Cookies } from 'react-cookie';
const cookie = new Cookies();

export type Settings = {
  leagues: { [key in LeagueKey]: boolean };
  levelCaps: { [key in LevelCapNumber]: boolean };
  outputData: { [key in OutputDataKey]: boolean };
};

export enum SettingsActionTypes {
  League,
  LevelCap,
  OutputData,
}

type PayloadTypes = {
  [SettingsActionTypes.League]: { key: LeagueKey; value: boolean };
  [SettingsActionTypes.LevelCap]: {
    key: LevelCapNumber;
    value: boolean;
  };
  [SettingsActionTypes.OutputData]: {
    key: OutputDataKey;
    value: boolean;
  };
};

type Actions = ActionMap<PayloadTypes>[keyof ActionMap<PayloadTypes>];
export type Dispatch = ReactDispatch<Actions>;

const defaultSettings: Settings = {
  leagues: { great: true, ultra: true, master: true },
  levelCaps: { 40: true, 41: true, 50: true, 51: true },
  outputData: {
    level: true,
    rank: true,
    cp: true,
    stats: true,
    statProduct: false,
    statProductPercent: true,
    maximizeButton: true,
  },
};
export function getInitialSettings(settingsCookie: string) {
  try {
    const parsed = JSON.parse(settingsCookie) as Settings;

    return parsed;
  } catch (err) {
    return defaultSettings;
  }
}

export function useSettings(
  initialValue: Settings,
): {
  settings: Settings;
  dispatch: Dispatch;
} {
  const [settings, dispatch] = useReducer(
    (state: Settings, action: Actions): Settings => {
      switch (action.type) {
        case SettingsActionTypes.League: {
          return {
            ...state,
            leagues: {
              ...state.leagues,
              [action.payload.key]: action.payload.value,
            },
          };
        }
        case SettingsActionTypes.LevelCap: {
          return {
            ...state,
            levelCaps: {
              ...state.levelCaps,
              [action.payload.key]: action.payload.value,
            },
          };
        }
        case SettingsActionTypes.OutputData: {
          return {
            ...state,
            outputData: {
              ...state.outputData,
              [action.payload.key]: action.payload.value,
            },
          };
        }
        default: {
          return state;
        }
      }
    },
    initialValue,
  );

  useEffect(() => {
    cookie.set('settings', settings);
  }, [settings]);

  return { settings, dispatch };
}
