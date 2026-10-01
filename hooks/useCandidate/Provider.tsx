import React, { FC, useReducer, useEffect, ReactNode } from 'react';

import { CachedCandidate, Candidate, Context } from '.';

import { useRouter } from 'next/router';
import { candidateReducer } from './candidateReducer';
import { cacheCandidate } from './cacheCandidate';
import { getInitialCandidate } from './getInitialCandidate';

function useCandidateReducer(cachedCandidate: CachedCandidate | null) {
  const router = useRouter();
  const [candidate, dispatch] = useReducer(
    candidateReducer,
    getInitialCandidate(router.query, cachedCandidate),
  );

  return [candidate, dispatch] as const;
}

function useSyncCandidateToCache(candidate: Candidate) {
  useEffect(() => {
    cacheCandidate(candidate);
  }, [candidate]);
}

export const Provider: FC<{
  cachedCandidate: CachedCandidate | null;
  children: ReactNode;
}> = ({ cachedCandidate, children }) => {
  const [candidate, dispatch] = useCandidateReducer(cachedCandidate);
  useSyncCandidateToCache(candidate);

  return (
    <Context.Provider value={{ candidate, dispatch }}>
      {children}
    </Context.Provider>
  );
};
