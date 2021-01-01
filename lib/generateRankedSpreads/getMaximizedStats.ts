import {
  LeagueCPCap,
  Pokemon,
  PokemonIVs,
  SpreadStats,
  LevelCapNumber,
} from '../../data/reference';

import { getLevel } from './getLevel';
import { getStats } from './getStats';
import { getCP } from './getCP';

export function getMaximizedStats(
  species: Pokemon,
  ivs: PokemonIVs,
  maxCP: LeagueCPCap,
  maxLevel: LevelCapNumber,
): SpreadStats {
  const atk = ivs.atk + species.stats.atk;
  const def = ivs.def + species.stats.def;
  const sta = ivs.sta + species.stats.sta;

  const level = getLevel(atk, def, sta, maxCP, maxLevel);

  const cp = getCP(atk, def, sta, level);
  const stats = getStats(atk, def, sta, level);

  const product = stats.atk * stats.def * stats.sta;

  return {
    level,
    ivs,
    stats,
    cp,
    product,
  };
}
