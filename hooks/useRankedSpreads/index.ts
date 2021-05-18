import { createContext, useContext } from 'react';

import { LevelCapNumber } from '../../data/levelCap';
import { RankedSpread } from '../../lib/generateRankedSpreads';

export { Provider } from './Provider';

export const Context =
  createContext<
    {
      [K in LevelCapNumber]: RankedSpread[];
    }
  >(null);

export function useRankedSpreads() {
  return useContext(Context);
}
