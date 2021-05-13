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
  IVs,
  Floor,
  RankBy,
}

type PayloadTypes = {
  [CandidateActionTypes.Species]: Pokemon;
  [CandidateActionTypes.IV]: { stat: StatKey; value: IV };
  [CandidateActionTypes.IVs]: { atk: IV; def: IV; sta: IV };
  [CandidateActionTypes.Floor]: IVFloor;
  [CandidateActionTypes.RankBy]: RankableMetric;
};

type Actions = ActionMap<PayloadTypes>[keyof ActionMap<PayloadTypes>];
export type Dispatch = ReactDispatch<Actions>;

export function candidateReducer(state: Candidate, action: Actions): Candidate {
  switch (action.type) {
    case CandidateActionTypes.Species: {
      // state floor cannot be lower than the floor of the new species
      if (action.payload.floor > state.floor) {
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

      return {
        ...state,
        species: action.payload,
      };
    }
    case CandidateActionTypes.IV: {
      const ivKey = action.payload.stat;

      return {
        ...state,
        ivs: { ...state.ivs, [ivKey]: action.payload.value },
      };
    }
    case CandidateActionTypes.IVs: {
      return { ...state, ivs: action.payload };
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
    case CandidateActionTypes.RankBy: {
      return {
        ...state,
        rankingMetric: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
