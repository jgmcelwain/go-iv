import {
  CPMs,
  LeagueCPCap,
  PokemonStats,
  PowerUpLevelCap,
} from '../../data/reference';

export function getLevel(
  atk: PokemonStats['atk'],
  def: PokemonStats['def'],
  sta: PokemonStats['sta'],
  maxCP: LeagueCPCap,
  maxLevel: PowerUpLevelCap,
) {
  function getCPMIndex(query: number) {
    let i = 0;

    while (CPMs[i] <= query) {
      i++;
    }

    return i - 1;
  }

  const cpmIndex = getCPMIndex(
    Math.pow(
      (100 * Math.pow(maxCP + 1, 2)) / (Math.pow(atk, 2) * def * sta),
      0.25,
    ),
  );

  const level = 1 + cpmIndex / 2;

  return Math.min(level, maxLevel);
}
