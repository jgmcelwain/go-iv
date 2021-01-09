import React, {
  FunctionComponent,
  ReactChild,
  useReducer,
  useState,
  useEffect,
} from 'react';

import { Context, Subject } from '.';

import { useRouter } from 'next/router';
import { subjectReducer } from './subjectReducer';
import { setRouteParams } from './setRouteParams';

export const Provider: FunctionComponent<{
  initialValue: Subject;
  children: ReactChild | ReactChild[];
}> = ({ initialValue, children }) => {
  const router = useRouter();
  const [isInitial, setIsInitial] = useState(true);
  const [subject, dispatch] = useReducer(subjectReducer, initialValue);

  useEffect(() => {
    if (!isInitial || router.query.subject !== undefined) {
      setRouteParams(router, subject);
    }

    if (isInitial) {
      setIsInitial(false);
    }
  }, [
    subject.species.id,
    subject.ivs.atk,
    subject.ivs.def,
    subject.ivs.sta,
    subject.floor,
  ]);

  return (
    <Context.Provider value={{ subject, dispatch }}>
      {children}
    </Context.Provider>
  );
};
