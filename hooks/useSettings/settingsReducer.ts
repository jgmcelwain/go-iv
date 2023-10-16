import { Dispatch as ReactDispatch } from 'react';
import { Settings } from '.';

import { LeagueKey } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { OutputDataKey } from '../../data/outputData';
import { ActionMap } from '../../utils/actionMap';

export enum SettingsActionTypes {
  League,
  LeagueOrder,
  LevelCap,
  OutputData,
  Speculative,
  RankingMetric,
  MinimumLevel,
  ImpossibleFloors,
  InvertIVDropdown,
  Layout,
}
type PayloadTypes = {
  [SettingsActionTypes.League]: { key: LeagueKey; value: boolean };
  [SettingsActionTypes.LeagueOrder]: LeagueKey[];
  [SettingsActionTypes.LevelCap]: {
    key: LevelCapNumber;
    value: boolean;
  };
  [SettingsActionTypes.OutputData]: {
    key: OutputDataKey;
    value: boolean;
  };
  [SettingsActionTypes.Speculative]: boolean;
  [SettingsActionTypes.RankingMetric]: boolean;
  [SettingsActionTypes.MinimumLevel]: boolean;
  [SettingsActionTypes.ImpossibleFloors]: boolean;
  [SettingsActionTypes.InvertIVDropdown]: boolean;
  [SettingsActionTypes.Layout]: 'grid' | 'list';
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
    case SettingsActionTypes.LeagueOrder: {
      return {
        ...state,
        leagueOrder: action.payload,
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
    case SettingsActionTypes.RankingMetric: {
      return {
        ...state,
        showRankingMetric: action.payload,
      };
    }
    case SettingsActionTypes.MinimumLevel: {
      return {
        ...state,
        showMinimumLevel: action.payload,
      };
    }
    case SettingsActionTypes.ImpossibleFloors: {
      return {
        ...state,
        allowImpossibleFloors: action.payload,
      };
    }
    case SettingsActionTypes.InvertIVDropdown: {
      return {
        ...state,
        invertIVDropdown: action.payload,
      };
    }
    case SettingsActionTypes.Layout: {
      return {
        ...state,
        layout: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
