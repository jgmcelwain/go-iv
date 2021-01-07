import { IV, IVFloor, PokemonIVs } from '../../data/reference';

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
