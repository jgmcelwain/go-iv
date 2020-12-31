import React, {
  Dispatch,
  FunctionComponent,
  ReactChild,
  createContext,
} from 'react';
import { useSubject, Subject, Actions } from '../hooks/useSubject';

export const SubjectContext = createContext<{
  subject: Subject;
  dispatch: Dispatch<Actions>;
}>(null);

export const Wrapper: FunctionComponent<{ children: ReactChild }> = ({
  children,
}) => {
  const value = useSubject();

  return (
    <SubjectContext.Provider value={value}>{children} </SubjectContext.Provider>
  );
};
