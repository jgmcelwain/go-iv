import { LeagueCPCap } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { Pokemon, PokemonIVs } from '../../data/pokedex';

import { SpreadWithMaximizedStats } from '.';
import { getLevel } from './getLevel';
import { getStats } from './getStats';
import { getCP } from './getCP';

export function getMaximizedStats(
  species: Pokemon,
  ivs: PokemonIVs,
  maxCP: LeagueCPCap,
  maxLevel: LevelCapNumber,
  wholeLevelsOnly = false,
): SpreadWithMaximizedStats {
  const atk = ivs.atk + species.stats.atk;
  const def = ivs.def + species.stats.def;
  const sta = ivs.sta + species.stats.sta;

  const bestLevel = getLevel(atk, def, sta, maxCP, maxLevel);
  const level = wholeLevelsOnly ? Math.floor(bestLevel) : bestLevel;

  const cp = getCP(atk, def, sta, level);
  const stats = getStats(atk, def, sta, level);

  const product = stats.atk * stats.def * stats.sta;
  const bulkProduct = stats.def * stats.sta;

  return {
    level,
    levelReduced: level < bestLevel,
    ivs,
    stats,
    cp,
    product,
    bulkProduct,
  };
}
