import { createContext, useContext } from 'react';

import { LevelCapNumber } from '../../data/levelCap';
import { RankedSpread } from '../../lib/generateRankedSpreads';

export { Provider } from './Provider';

export const Context =
  createContext<
    | {
        [K in LevelCapNumber]: RankedSpread[];
      }
    | null
  >(null);

export function useRankedSpreads() {
  const value = useContext(Context);

  if (value === null) {
    throw new Error(
      'useRankedSpreads must be called within the context of a RankedSpreadsProvider',
    );
  }

  return value;
}
