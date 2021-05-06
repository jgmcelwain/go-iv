import React, { FC, useReducer, useEffect, ReactNode } from 'react';

import { Candidate, Context } from '.';

import { useRouter } from 'next/router';
import { candidateReducer } from './candidateReducer';
import { cacheCandidate } from './cacheCandidate';
import { getInitialCandidate } from './getInitialCandidate';

export const Provider: FC<{
  cachedCandidate: Candidate;
  children: ReactNode;
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
