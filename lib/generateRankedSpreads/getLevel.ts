import { CPMs } from '../../data/cpm';
import { LeagueCPCap } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { PokemonStats } from '../../data/pokedex';

export function getLevel(
  atk: PokemonStats['atk'],
  def: PokemonStats['def'],
  sta: PokemonStats['sta'],
  maxCP: LeagueCPCap,
  maxLevel: LevelCapNumber,
) {
  // use the provided maxLevel if the maxCP is for master league, since it would
  // never be optimal to not push right to the level cap
  if (maxCP === 10000) {
    return maxLevel;
  }

  // binary search to find cpm which gets us closest to the cap
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
