import React, {
  FunctionComponent,
  ReactChild,
  createContext,
  useEffect,
} from 'react';
import { useSubject, Subject, Dispatch } from '../hooks/useSubject';
import * as gtag from '../utils/gtag';

export const Context = createContext<{
  subject: Subject;
  dispatch: Dispatch;
}>(null);

export const Wrapper: FunctionComponent<{
  children: ReactChild | ReactChild[];
}> = ({ children }) => {
  const value = useSubject();

  useEffect(() => {
    gtag.event('subject_created', {
      species_id: value.subject.species.id,
      iv_atk: value.subject.ivs.atk,
      iv_def: value.subject.ivs.def,
      iv_sta: value.subject.ivs.sta,
      floor: value.subject.floor,
    });
  }, [
    value.subject.species.id,
    value.subject.ivs.atk,
    value.subject.ivs.def,
    value.subject.ivs.sta,
    value.subject.floor,
  ]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
