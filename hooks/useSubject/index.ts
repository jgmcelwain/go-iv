import { createContext, useContext } from 'react';

import { IV, IVFloor, Pokemon } from '../../data/reference';
import { Dispatch } from './subjectReducer';

export { Provider } from './Provider';
export { SubjectActionTypes } from './subjectReducer';
export { getInitialSubject } from './getInitialSubject';

export type Subject = {
  species: Pokemon;
  ivs: { atk: IV; def: IV; sta: IV };
  floor: IVFloor;
};

export const Context = createContext<{
  subject: Subject;
  dispatch: Dispatch;
}>(null);

export function useSubject() {
  const value = useContext(Context);

  return value;
}
