import { LeagueCPCap } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { Pokemon, PokemonIVs, getPokemonByID } from '../../data/pokedex';

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

// Measured in-game (Minior, Oct 2026). Under a CP cap, the battle-only form
// fights at its highest level with CP below the cap, or half a level higher
// when the stored form sits exactly on the cap. With no cap it fights half a
// level above the stored form. Either way it keeps the stored form's HP, and
// `level` stays the stored level, since that is what gets powered up.
// Ultra League readings don't all fit this yet.
const BATTLE_ONLY_FORM_MAX_LEVEL = 50;

export function getBattleOnlyFormStats(
  form: Pokemon,
  storedForm: Pokemon,
  ivs: PokemonIVs,
  storedLevel: number,
  maxCP: LeagueCPCap,
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
  let battleLevel = storedLevel + 0.5;
  if (maxCP !== 10000) {
    battleLevel = BATTLE_ONLY_FORM_MAX_LEVEL;
    while (battleLevel > 1 && getCP(atk, def, sta, battleLevel) >= maxCP) {
      battleLevel -= 0.5;
    }
    if (storedCP === maxCP) battleLevel += 0.5;
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
