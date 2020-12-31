import { CPMs, PokemonStats } from '../reference';

export function getStats(
  atk: PokemonStats['atk'],
  def: PokemonStats['def'],
  sta: PokemonStats['sta'],
  level: number,
): PokemonStats {
  const cpmIndex = (level - 1) * 2;
  const cpm = CPMs[cpmIndex];

  return {
    atk: atk * cpm,
    def: def * cpm,
    // stamina cannot be less than 10 and is floored in-game
    sta: Math.max(10, Math.floor(sta * cpm)),
  };
}
