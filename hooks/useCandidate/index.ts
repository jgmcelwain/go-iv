import { createContext, useContext } from 'react';
import { Pokemon } from '../../data/pokedex';
import { IV } from '../../data/iv';
import { IVFloor } from '../../data/ivFloor';
import { RankableMetric } from '../../data/stat';
import { Dispatch } from './candidateReducer';

export { Provider } from './Provider';
export { CandidateActionTypes } from './candidateReducer';
export { getInitialCandidate } from './getInitialCandidate';

export type Candidate = {
  species: Pokemon;
  ivs: { atk: IV; def: IV; sta: IV };
  floor: IVFloor;
  rankingMetric: RankableMetric;
  minimumLevel: number;
};

export const Context =
  createContext<{
    candidate: Candidate;
    dispatch: Dispatch;
  } | null>(null);

export function useCandidate() {
  const value = useContext(Context);

  if (value === null) {
    throw new Error(
      'useCandidate must be called within the context of a CandidateProvider',
    );
  }

  return value;
}
