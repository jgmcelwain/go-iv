import { CPMs } from '../../data/cpm';
import { LeagueCPCap } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { PokemonStats } from '../../data/pokedex';

// binary search to find the closest actual CPM to a given estimated CPM
function getActualCPMIndex(estimatedCPM: number) {
  let start = 0;
  let end = CPMs.length - 1;

  while (start <= end) {
    // start at the middle of the CPMs array
    const cpmIndex = (end + start) >> 1;

    // if the resulting CPM for this cpmIndex is too low, move the start up
    if (CPMs[cpmIndex] < estimatedCPM) {
      start = cpmIndex + 1;
    }

    // if the resulting CPM for this cpmIndex is too high, move the end down
    else if (CPMs[cpmIndex] > estimatedCPM) {
      end = cpmIndex - 1;
    }

    // the resulting CPM for this cpmIndex is exactly right, so return it
    else {
      return cpmIndex;
    }
  }

  // if we reach this point, the start and end have crossed over, so the correct
  // cpm is one index lower than the "start"
  return start - 1;
}

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

  // we can 'estimate' the cpm needed to get closest to the max cp using this
  // formula, which is derived from the cp calculation formula
  const estimatedCPM = Math.pow(
    (100 * Math.pow(maxCP + 1, 2)) / (Math.pow(atk, 2) * def * sta),
    0.25,
  );

  // find the closest actual cpm to the estimated cpm
  const actualCPMIndex = getActualCPMIndex(estimatedCPM);

  return Math.min(1 + actualCPMIndex / 2, maxLevel);
}
