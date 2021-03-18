import { createContext, useContext } from 'react';
import { LevelCapNumber, RankedSpread } from '../../data/reference';

export { Provider } from './Provider';

export const Context = createContext<
  {
    [K in LevelCapNumber]: RankedSpread[];
  }
>(null);

export function useRankedSpreads() {
  const value = useContext(Context);

  return value;
}
