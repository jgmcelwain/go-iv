import { useContext } from 'react';

import { IV, IVFloor, Pokemon } from '../../data/reference';

import { Context } from './Context';

export type Subject = {
  species: Pokemon;
  ivs: { atk: IV; def: IV; sta: IV };
  floor: IVFloor;
};

export * from './Context';
export * from './subjectReducer';
export * from './getInitialSubject';

export function useSettings() {
  const value = useContext(Context);

  return value;
}

export function useSubject() {
  const value = useContext(Context);

  return value;
}
