import { createContext, useContext } from 'react';

import { IV, IVFloor, Pokemon } from '../../data/reference';
import { Dispatch } from './candidateReducer';

export { Provider } from './Provider';
export { CandidateActionTypes } from './candidateReducer';
export { getInitialCandidate } from './getInitialCandidate';

export type Candidate = {
  species: Pokemon;
  ivs: { atk: IV; def: IV; sta: IV };
  floor: IVFloor;
};

export const Context = createContext<{
  candidate: Candidate;
  dispatch: Dispatch;
}>(null);

export function useCandidate() {
  const value = useContext(Context);

  return value;
}
