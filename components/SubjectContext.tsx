import React, {
  Dispatch,
  FunctionComponent,
  ReactChild,
  createContext,
  useEffect,
} from 'react';
import { useSubject, Subject, Actions } from '../hooks/useSubject';
import * as gtag from '../utils/gtag';

export const SubjectContext = createContext<{
  subject: Subject;
  dispatch: Dispatch<Actions>;
}>(null);

export const Wrapper: FunctionComponent<{ children: ReactChild }> = ({
  children,
}) => {
  const value = useSubject();

  useEffect(() => {
    gtag.event('subject_created', {
      species_id: value.subject.species.id,
      iv_atk: value.subject.iv.atk,
      iv_def: value.subject.iv.def,
      iv_sta: value.subject.iv.sta,
      floor: value.subject.floor,
    });
  }, [
    value.subject.species.id,
    value.subject.iv.atk,
    value.subject.iv.def,
    value.subject.iv.sta,
    value.subject.floor,
  ]);

  return (
    <SubjectContext.Provider value={value}>{children} </SubjectContext.Provider>
  );
};
