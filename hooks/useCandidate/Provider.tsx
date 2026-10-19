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

// waits for typing to settle so partial search matches aren't saved or
// reported to analytics
const CACHE_DELAY_MS = 500;

function useSyncCandidateToCache(candidate: Candidate) {
  useEffect(() => {
    const timeout = setTimeout(() => cacheCandidate(candidate), CACHE_DELAY_MS);
    return () => clearTimeout(timeout);
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
