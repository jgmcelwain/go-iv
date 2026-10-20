import { CPMs } from '../../data/cpm';
import { LeagueCPCap } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { Pokemon, PokemonIVs, getPokemonByID } from '../../data/pokedex';

import { SpreadWithMaximizedStats } from '.';
import { getLevel } from './getLevel';
import { getStats } from './getStats';
import { getCP } from './getCP';

const HIGHEST_LEVEL = 1 + (CPMs.length - 1) / 2;

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

// Measured in-game (Minior, Oct 2026): the battle-only form fights at the
// highest level whose CP is at most 10 over the stored form's, but keeps the
// stored form's HP. `level` stays the stored level, since that is what gets
// powered up.
export function getBattleOnlyFormStats(
  form: Pokemon,
  storedForm: Pokemon,
  ivs: PokemonIVs,
  storedLevel: number,
): SpreadWithMaximizedStats {
  const stored = withIVs(storedForm, ivs);
  const storedCP = getCP(stored.atk, stored.def, stored.sta, storedLevel);
  const storedHP = getStats(
    stored.atk,
    stored.def,
    stored.sta,
    storedLevel,
  ).sta;

  const { atk, def, sta } = withIVs(form, ivs);
  let battleLevel = HIGHEST_LEVEL;
  while (battleLevel > 1 && getCP(atk, def, sta, battleLevel) > storedCP + 10) {
    battleLevel -= 0.5;
  }

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
    return getBattleOnlyFormStats(species, storedForm, ivs, level);
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
