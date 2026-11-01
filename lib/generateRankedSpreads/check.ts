import { deepStrictEqual } from 'assert';

import { POKEDEX, getPokemonByID } from '../../data/pokedex';
import { RANKABLE_METRICS } from '../../data/stat';
import { generateRankedSpreads, rankSpread } from '.';
import { getBattleOnlyFormStats } from './getMaximizedStats';

const meteor = getPokemonByID('minior_meteor');
const core = getPokemonByID('minior_core');
if (!meteor || !core) throw new Error('Missing Minior forms');
for (const seen of [
  { ivs: [2, 12, 14], level: 24.5, maxCP: 1500, cp: 1499, hp: 111 },
  { ivs: [10, 6, 10], level: 24.5, maxCP: 1500, cp: 1493 },
  { ivs: [8, 6, 5], level: 25, maxCP: 1500, cp: 1492 },
  { ivs: [3, 14, 14], level: 24, maxCP: 1500, cp: 1492 },
  { ivs: [7, 13, 13], level: 24, maxCP: 1500, cp: 1496 },
  { ivs: [1, 3, 13], level: 25.5, maxCP: 1500, cp: 1494 },
  { ivs: [8, 6, 4], level: 22, maxCP: 1500, cp: 1398 },
  { ivs: [5, 3, 3], level: 9, maxCP: 1500, cp: 685 },
  { ivs: [11, 11, 4], level: 7, maxCP: 1500, cp: 531 },
  { ivs: [4, 7, 10], level: 6, maxCP: 1500, cp: 468 },
  // Seen as 1502 and 1508 before the game stopped Meteor going over the cap.
  { ivs: [12, 1, 7], level: 25, maxCP: 1500, cp: 1493 },
  { ivs: [12, 14, 12], level: 23.5, maxCP: 1500, cp: 1499 },
  { ivs: [11, 6, 9], level: 35, maxCP: 2500, cp: 1692 },
  { ivs: [14, 15, 9], level: 34, maxCP: 2500, cp: 1802 },
  { ivs: [6, 12, 15], level: 31, maxCP: 2500, cp: 1592 },
  { ivs: [4, 5, 10], level: 31, maxCP: 2500, cp: 1193 },
  { ivs: [11, 10, 14], level: 30, maxCP: 2500, cp: 1625 },
  { ivs: [7, 12, 11], level: 30, maxCP: 2500, cp: 1549 },
  { ivs: [3, 3, 1], level: 29, maxCP: 2500, cp: 1098 },
  { ivs: [10, 13, 11], level: 27, maxCP: 2500, cp: 1524 },
  { ivs: [10, 13, 9], level: 27, maxCP: 2500, cp: 1505 },
  { ivs: [4, 9, 8], level: 26, maxCP: 2500, cp: 1334 },
  { ivs: [7, 13, 13], level: 24, maxCP: 10000, cp: 1002 },
  { ivs: [10, 6, 10], level: 24.5, maxCP: 10000, cp: 1021 },
] as const) {
  const [atk, def, sta] = seen.ivs;
  const spread = getBattleOnlyFormStats(
    meteor,
    core,
    { atk, def, sta },
    seen.level,
    seen.maxCP,
  );
  deepStrictEqual(spread.cp, seen.cp);
  if ('hp' in seen) deepStrictEqual(spread.stats.sta, seen.hp);
}

let checked = 0;
for (const pokemon of POKEDEX.filter((_, i) => i % 50 === 0)) {
  for (const maxCP of [500, 1500, 2500, 10000] as const) {
    for (const { key: rankingMetric } of RANKABLE_METRICS) {
      const options = {
        pokemon,
        floor: 1,
        maxCP,
        maxLevel: 51,
        minLevel: 10,
        rankingMetric,
      } as const;

      const spreads = generateRankedSpreads(options);
      for (let i = 0; i < spreads.length; i += 97) {
        deepStrictEqual(rankSpread(options, spreads[i].ivs), spreads[i]);
        checked++;
      }
      deepStrictEqual(
        rankSpread(options, { atk: 0, def: 0, sta: 0 }),
        undefined,
      );
    }
  }
}

// eslint-disable-next-line no-console
console.log(`rankSpread matches generateRankedSpreads for ${checked} spreads`);
