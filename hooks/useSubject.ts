import { Dispatch as ReactDispatch, useReducer } from 'react';
import { POKEDEX } from '../data/pokedex';
import { IV, IVFloor, Pokemon, Stat, ActionMap } from '../data/reference';

export type Subject = {
  species: Pokemon;
  iv: { atk: IV; def: IV; sta: IV };
  floor: IVFloor;
};

export enum SubjectActionTypes {
  Species,
  IV,
  Floor,
}

type PayloadTypes = {
  [SubjectActionTypes.Species]: Pokemon;
  [SubjectActionTypes.IV]: { stat: Stat; value: IV };
  [SubjectActionTypes.Floor]: IVFloor;
};

type Actions = ActionMap<PayloadTypes>[keyof ActionMap<PayloadTypes>];
export type Dispatch = ReactDispatch<Actions>;

const initialState: Subject = {
  species: POKEDEX[0],
  iv: { atk: 0, def: 15, sta: 15 },
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
          return { ...state, species: action.payload };
        }
        case SubjectActionTypes.IV: {
          const ivKey = action.payload.stat;

          return {
            ...state,
            iv: { ...state.iv, [ivKey]: action.payload.value },
          };
        }
        case SubjectActionTypes.Floor: {
          return {
            ...state,
            iv: {
              // iv cannot be lower than the floor
              atk: Math.max(state.iv.atk, action.payload) as IV,
              def: Math.max(state.iv.def, action.payload) as IV,
              sta: Math.max(state.iv.sta, action.payload) as IV,
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
