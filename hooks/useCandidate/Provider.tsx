import React, {
  FunctionComponent,
  ReactChild,
  useReducer,
  useEffect,
} from 'react';

import { Candidate, Context } from '.';

import { useRouter } from 'next/router';
import { candidateReducer } from './candidateReducer';
import { cacheCandidate } from './cacheCandidate';
import { getInitialCandidate } from './getInitialCandidate';

export const Provider: FunctionComponent<{
  cachedCandidate: Candidate;
  children: ReactChild | ReactChild[];
}> = ({ cachedCandidate, children }) => {
  const router = useRouter();
  const [candidate, dispatch] = useReducer(
    candidateReducer,
    getInitialCandidate(router.query, cachedCandidate),
  );

  useEffect(() => {
    cacheCandidate(router, candidate);
  }, [
    candidate.species.id,
    candidate.ivs.atk,
    candidate.ivs.def,
    candidate.ivs.sta,
    candidate.floor,
  ]);

  return (
    <Context.Provider value={{ candidate, dispatch }}>
      {children}
    </Context.Provider>
  );
};
