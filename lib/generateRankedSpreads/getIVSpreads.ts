import { PokemonIVs } from '../../data/pokedex';
import { IV } from '../../data/iv';
import { IVFloor } from '../../data/ivFloor';

export function getIVSpreads(floor: IVFloor) {
  const ivCombinations: PokemonIVs[] = [];

  for (let atk: IV = floor as IV; atk <= 15; atk++) {
    for (let def: IV = floor as IV; def <= 15; def++) {
      for (let sta: IV = floor as IV; sta <= 15; sta++) {
        ivCombinations.push({ atk, def, sta });
      }
    }
  }

  return ivCombinations;
}
