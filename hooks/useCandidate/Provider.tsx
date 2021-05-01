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
    cacheCandidate(candidate);
  }, [candidate]);

  return (
    <Context.Provider value={{ candidate, dispatch }}>
      {children}
    </Context.Provider>
  );
};
