import { Dispatch as ReactDispatch } from 'react';

import {
  ActionMap,
  LeagueKey,
  LevelCapNumber,
  OutputDataKey,
} from '../../data/reference';

import { Settings } from '.';

export enum SettingsActionTypes {
  League,
  LevelCap,
  OutputData,
  Speculative,
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
  [SettingsActionTypes.Speculative]: boolean;
};
type Actions = ActionMap<PayloadTypes>[keyof ActionMap<PayloadTypes>];
export type Dispatch = ReactDispatch<Actions>;

export function settingsReducer(state: Settings, action: Actions): Settings {
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
    case SettingsActionTypes.Speculative: {
      return {
        ...state,
        showSpeculative: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
