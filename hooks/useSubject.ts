import { Dispatch as ReactDispatch, useReducer } from 'react';
import { POKEDEX } from '../data/pokedex';
import { IV, IVFloor, Pokemon, Stat, ActionMap } from '../data/reference';

export type Subject = {
  species: Pokemon;
  ivs: { atk: IV; def: IV; sta: IV };
  floor: IVFloor;
};

export enum SubjectActionTypes {
  Species,
  IV,
  IVs,
  Floor,
}

type PayloadTypes = {
  [SubjectActionTypes.Species]: Pokemon;
  [SubjectActionTypes.IV]: { stat: Stat; value: IV };
  [SubjectActionTypes.IVs]: { atk: IV; def: IV; sta: IV };
  [SubjectActionTypes.Floor]: IVFloor;
};

type Actions = ActionMap<PayloadTypes>[keyof ActionMap<PayloadTypes>];
export type Dispatch = ReactDispatch<Actions>;

const initialState: Subject = {
  species: POKEDEX[0],
  ivs: { atk: 0, def: 15, sta: 15 },
  floor: 0,
};
export function useSubject(): {
  subject: Subject;
  dispatch: Dispatch;
} {
  const [subject, dispatch] = useReducer(
    (state: Subject, action: Actions): Subject => {
      switch (action.type) {
        case SubjectActionTypes.Species: {
          if (action.payload.floor > state.floor) {
            return {
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
        case SubjectActionTypes.IV: {
          const ivKey = action.payload.stat;

          return {
            ...state,
            ivs: { ...state.ivs, [ivKey]: action.payload.value },
          };
        }
        case SubjectActionTypes.IVs: {
          return { ...state, ivs: action.payload };
        }
        case SubjectActionTypes.Floor: {
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
        default: {
          return state;
        }
      }
    },
    initialState,
  );

  return { subject, dispatch };
}
