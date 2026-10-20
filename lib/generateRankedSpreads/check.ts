import { deepStrictEqual } from 'assert';

import { POKEDEX, getPokemonByID } from '../../data/pokedex';
import { RANKABLE_METRICS } from '../../data/stat';
import { generateRankedSpreads, rankSpread } from '.';
import { getBattleOnlyFormStats } from './getMaximizedStats';

const meteor = getPokemonByID('minior_meteor');
const core = getPokemonByID('minior_core');
if (!meteor || !core) throw new Error('Missing Minior forms');
for (const seen of [
  { ivs: { atk: 9, def: 3, sta: 1 }, level: 25, cp: 1474, hp: 104 },
  { ivs: { atk: 2, def: 12, sta: 14 }, level: 24.5, cp: 1499, hp: 111 },
] as const) {
  const spread = getBattleOnlyFormStats(meteor, core, seen.ivs, seen.level);
  deepStrictEqual([spread.cp, spread.stats.sta], [seen.cp, seen.hp]);
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
