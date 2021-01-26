import { createContext, useContext } from 'react';
import { LevelCapNumber, RankedSpread } from '../../data/reference';

export { Provider } from './Provider';

export type LeagueSubjectRankedSpreads = {
  [K in LevelCapNumber]: RankedSpread[];
};
export const Context = createContext<LeagueSubjectRankedSpreads>(null);

export function useLeagueSubjectRankedSpreads() {
  const value = useContext(Context);

  return value;
}
