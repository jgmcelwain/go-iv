import { LeagueCPCap } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { CPMs } from '../../data/cpm';
import {
  Pokemon,
  PokemonIVs,
  PokemonStats,
  getPokemonByID,
} from '../../data/pokedex';

import { SpreadWithMaximizedStats } from '.';
import { getLevel } from './getLevel';
import { getStats } from './getStats';
import { getCP } from './getCP';

function withIVs(species: Pokemon, ivs: PokemonIVs) {
  return {
    atk: ivs.atk + species.stats.atk,
    def: ivs.def + species.stats.def,
    sta: ivs.sta + species.stats.sta,
  };
}

function toSpread(
  ivs: PokemonIVs,
  level: number,
  cp: number,
  stats: SpreadWithMaximizedStats['stats'],
): SpreadWithMaximizedStats {
  return {
    level,
    ivs,
    stats,
    cp,
    product: stats.atk * stats.def * stats.sta,
    bulkProduct: stats.def * stats.sta,
  };
}

const LAST_CPM_LEVEL = 1 + (CPMs.length - 1) / 2;

// The multiplier stops growing past the last CPM level, so a form that never
// reaches the cap counts as level 80 here.
function getCapLevel({ atk, def, sta }: PokemonStats, maxCP: LeagueCPCap) {
  let level = 1;
  while (level < LAST_CPM_LEVEL && getCP(atk, def, sta, level + 0.5) <= maxCP) {
    level += 0.5;
  }
  return level === LAST_CPM_LEVEL ? 80 : level;
}

// Fitted to player readings by u/eli5questions (see pvpoke/pvpoke#404). The
// battle-only form keeps the stored form's HP, and `level` stays the stored
// level, since that is what gets powered up.
export function getBattleOnlyFormStats(
  form: Pokemon,
  storedForm: Pokemon,
  ivs: PokemonIVs,
  storedLevel: number,
  maxCP: LeagueCPCap,
): SpreadWithMaximizedStats {
  const stored = withIVs(storedForm, ivs);
  const storedHP = getStats(
    stored.atk,
    stored.def,
    stored.sta,
    storedLevel,
  ).sta;

  const battle = withIVs(form, ivs);
  const halfLevels = Math.floor(
    (2 * (getCapLevel(battle, maxCP) - 1) * storedLevel) /
      getCapLevel(stored, maxCP),
  );
  const battleLevel = Math.min(1 + halfLevels / 2, LAST_CPM_LEVEL);
  const { atk, def, sta } = battle;

  return toSpread(ivs, storedLevel, getCP(atk, def, sta, battleLevel), {
    ...getStats(atk, def, sta, battleLevel),
    sta: storedHP,
  });
}

export function getMaximizedStats(
  species: Pokemon,
  ivs: PokemonIVs,
  maxCP: LeagueCPCap,
  maxLevel: LevelCapNumber,
): SpreadWithMaximizedStats {
  const storedForm = species.battleOnlyFormOf
    ? getPokemonByID(species.battleOnlyFormOf)
    : null;
  if (storedForm) {
    const { level } = getMaximizedStats(storedForm, ivs, maxCP, maxLevel);
    return getBattleOnlyFormStats(species, storedForm, ivs, level, maxCP);
  }

  const { atk, def, sta } = withIVs(species, ivs);
  const level = getLevel(atk, def, sta, maxCP, maxLevel);

  return toSpread(
    ivs,
    level,
    getCP(atk, def, sta, level),
    getStats(atk, def, sta, level),
  );
}
