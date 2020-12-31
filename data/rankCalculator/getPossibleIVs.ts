import { IVFloor, PokemonIVs } from '../reference';

export function getPossibleIVs(floor: IVFloor) {
  const ivCombinations: PokemonIVs[] = [];

  for (let atk = floor; atk <= 15; atk++) {
    for (let def = floor; def <= 15; def++) {
      for (let sta = floor; sta <= 15; sta++) {
        ivCombinations.push({ atk, def, sta });
      }
    }
  }

  return ivCombinations;
}
