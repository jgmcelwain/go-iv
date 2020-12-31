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
  function binarySearch(ar: number[], num: number) {
    let m = 0;
    let n = ar.length - 1;

    while (m <= n) {
      const k = (n + m) >> 1;

      if (ar[k] < num) {
        m = k + 1;
      } else if (ar[k] > num) {
        n = k - 1;
      } else {
        return k;
      }
    }
    return m - 1;
  }

  const cpmIndex = binarySearch(
    CPMs,
    Math.pow(
      ((maxCP + 1) * (maxCP + 1) * 100) / (Math.pow(atk, 2) * def * sta),
      0.25,
    ),
  );
  const level = 1 + cpmIndex / 2;

  return level > maxLevel ? maxLevel : level;
}
