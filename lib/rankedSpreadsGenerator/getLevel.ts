import {
  CPMs,
  LeagueCPCap,
  PokemonStats,
  LevelCapNumber,
} from '../../data/reference';

export function getLevel(
  atk: PokemonStats['atk'],
  def: PokemonStats['def'],
  sta: PokemonStats['sta'],
  maxCP: LeagueCPCap,
  maxLevel: LevelCapNumber,
) {
  function getCPMIndex(query: number) {
    let start = 0;
    let end = CPMs.length - 1;

    while (start <= end) {
      const guess = (end + start) >> 1;

      if (CPMs[guess] < query) {
        start = guess + 1;
      } else if (CPMs[guess] > query) {
        end = guess - 1;
      } else {
        return guess;
      }
    }

    return start - 1;
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
