export type LeagueKey = 'little' | 'great' | 'ultra' | 'master';

export type LeagueCPCap = 500 | 1500 | 2500 | 10000;

export type LeagueName =
  | 'Little Cup'
  | 'Great League'
  | 'Ultra League'
  | 'Master League';

export type League = { key: LeagueKey; cp: LeagueCPCap; name: LeagueName };

export const LEAGUES: League[] = [
  { key: 'great', cp: 1500, name: 'Great League' },
  { key: 'ultra', cp: 2500, name: 'Ultra League' },
  { key: 'master', cp: 10000, name: 'Master League' },
  { key: 'little', cp: 500, name: 'Little Cup' },
];
