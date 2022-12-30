import { Dispatch as ReactDispatch } from 'react';

import { IV } from '../../data/iv';
import { IVFloor } from '../../data/ivFloor';
import { StatKey, RankableMetric } from '../../data/stat';
import { Pokemon } from '../../data/pokedex';
import { ActionMap } from '../../utils/actionMap';

import { Candidate } from '.';

export enum CandidateActionTypes {
  Species,
  IV,
  Floor,
  RankingMetric,
  MinimumLevel,
}

type PayloadTypes = {
  [CandidateActionTypes.Species]: Pokemon;
  [CandidateActionTypes.IV]: { stat: StatKey; value: IV };
  [CandidateActionTypes.Floor]: IVFloor;
  [CandidateActionTypes.RankingMetric]: RankableMetric;
  [CandidateActionTypes.MinimumLevel]: number;
};

type Action = ActionMap<PayloadTypes>[keyof ActionMap<PayloadTypes>];
export type Dispatch = ReactDispatch<Action>;

export function candidateReducer(state: Candidate, action: Action): Candidate {
  switch (action.type) {
    case CandidateActionTypes.Species: {
      // if the new species has no absolute IV floor then we should reset the
      // floor to the default
      if (action.payload.floor === undefined) {
        return {
          ...state,
          floor: 0,
          species: action.payload,
        };
      }

      // otherwise, we want to set the floor and ensure the candidate's IVs
      // are not below it
      else {
        return {
          ...state,
          species: action.payload,
          floor: action.payload.floor,
          ivs: {
            atk: Math.max(state.ivs.atk, action.payload.floor) as IV,
            def: Math.max(state.ivs.def, action.payload.floor) as IV,
            sta: Math.max(state.ivs.sta, action.payload.floor) as IV,
          },
        };
      }
    }
    case CandidateActionTypes.IV: {
      const ivKey = action.payload.stat;

      return {
        ...state,
        ivs: {
          ...state.ivs,
          [ivKey]: action.payload.value,
        },
      };
    }
    case CandidateActionTypes.Floor: {
      return {
        ...state,
        ivs: {
          // iv cannot be lower than the floor
          atk: Math.max(state.ivs.atk, action.payload) as IV,
          def: Math.max(state.ivs.def, action.payload) as IV,
          sta: Math.max(state.ivs.sta, action.payload) as IV,
        },
        floor: action.payload,
      };
    }
    case CandidateActionTypes.RankingMetric: {
      return {
        ...state,
        rankingMetric: action.payload,
      };
    }
    case CandidateActionTypes.MinimumLevel: {
      return {
        ...state,
        minimumLevel: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
