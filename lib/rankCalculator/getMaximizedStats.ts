import {
  LeagueCPCap,
  Pokemon,
  PokemonIVs,
  LevelCapNumber,
} from '../../data/reference';

import { getLevel } from './getLevel';
import { getStats } from './getStats';
import { getCP } from './getCP';

export function getMaximizedStats(
  species: Pokemon,
  iv: PokemonIVs,
  maxCP: LeagueCPCap,
  maxLevel: LevelCapNumber,
) {
  const atk = iv.atk + species.stats.atk;
  const def = iv.def + species.stats.def;
  const sta = iv.sta + species.stats.sta;
  const level = getLevel(atk, def, sta, maxCP, maxLevel);
  const cp = getCP(atk, def, sta, level);
  const stats = getStats(atk, def, sta, level);
  const product = stats.atk * stats.def * stats.sta;

  return {
    level,
    iv,
    stats,
    cp,
    product,
  };
}
