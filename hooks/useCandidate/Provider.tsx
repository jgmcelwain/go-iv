import React, {
  FunctionComponent,
  ReactChild,
  useReducer,
  useState,
  useEffect,
} from 'react';

import { Context } from '.';

import { useRouter } from 'next/router';
import { candidateReducer } from './candidateReducer';
import { cacheCandidate } from './cacheCandidate';
import { getInitialCandidate } from './getInitialCandidate';

export const Provider: FunctionComponent<{
  children: ReactChild | ReactChild[];
}> = ({ children }) => {
  const router = useRouter();
  const [isInitial, setIsInitial] = useState(true);
  const [candidate, dispatch] = useReducer(
    candidateReducer,
    getInitialCandidate(router.query),
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
