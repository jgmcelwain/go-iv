import { deepStrictEqual } from 'assert';

import { POKEDEX } from '../../data/pokedex';
import { RANKABLE_METRICS } from '../../data/stat';
import { generateRankedSpreads, rankSpread } from '.';

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
