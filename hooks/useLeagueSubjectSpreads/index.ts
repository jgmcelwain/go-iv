import { createContext, useContext } from 'react';
import { LevelCapNumber, RankedSpreadStats } from '../../data/reference';

export { Provider } from './Provider';

export type LeagueRankedSubjectSpreads = {
  [K in LevelCapNumber]?: RankedSpreadStats[];
};
export const Context = createContext<LeagueRankedSubjectSpreads>(null);

export function useLeagueSubjectSpreads() {
  const value = useContext(Context);

  return value;
}
