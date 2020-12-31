import { CPMs, PokemonStats } from '../../data/reference';

export function getCP(
  atk: PokemonStats['atk'],
  def: PokemonStats['def'],
  sta: PokemonStats['sta'],
  level: number,
) {
  const cpmIndex = (level - 1) * 2;
  const cpm = CPMs[cpmIndex];

  const cp = (atk * Math.sqrt(def) * Math.sqrt(sta) * Math.pow(cpm, 2)) / 10;

  return Math.floor(Math.max(10, cp));
}
