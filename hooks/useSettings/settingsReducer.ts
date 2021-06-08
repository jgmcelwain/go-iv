import { Dispatch as ReactDispatch } from 'react';

import { LeagueKey } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { OutputDataKey } from '../../data/outputData';
import { ActionMap } from '../../utils/actionMap';

import { Settings } from '.';

export enum SettingsActionTypes {
  League,
  LevelCap,
  OutputData,
  Speculative,
  ShadowToggle,
  RankingMetric,
  ImpossibleFloors,
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
  [SettingsActionTypes.ShadowToggle]: boolean;
  [SettingsActionTypes.RankingMetric]: boolean;
  [SettingsActionTypes.ImpossibleFloors]: boolean;
};
type Action = ActionMap<PayloadTypes>[keyof ActionMap<PayloadTypes>];
export type Dispatch = ReactDispatch<Action>;

export function settingsReducer(state: Settings, action: Action): Settings {
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
    case SettingsActionTypes.ShadowToggle: {
      return {
        ...state,
        showShadowToggle: action.payload,
      };
    }
    case SettingsActionTypes.RankingMetric: {
      return {
        ...state,
        showRankingMetric: action.payload,
      };
    }
    case SettingsActionTypes.ImpossibleFloors: {
      return {
        ...state,
        allowImpossibleFloors: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
