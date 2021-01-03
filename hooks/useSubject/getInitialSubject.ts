import { POKEDEX } from '../../data/pokedex';
import { IV, IVFloor, PokemonID } from '../../data/reference';
import { Subject } from '.';

type DirtyIV = IV | string;
type DirtyIVFloor = IVFloor | string;

export function getInitialSubject(
  query: [PokemonID, DirtyIV, DirtyIV, DirtyIV, DirtyIVFloor],
): Subject {
  const [id = POKEDEX[0].id, atk = 0, def = 15, sta = 15, floor = 0] =
    query ?? [];

  function tidyInput<T>(val: number | string, min: IV, max: IV): T {
    let numeric = typeof val === 'number' ? val : parseInt(val);

    if (isNaN(numeric)) {
      numeric = 0;
    }

    return (Math.max(Math.min(numeric, max), min) as unknown) as T;
  }

  const species = POKEDEX.find((pokemon) => pokemon.id === id) ?? POKEDEX[0];
  const outputFloor = tidyInput<IVFloor>(floor, 0, 12);

  return {
    species,
    ivs: {
      atk: tidyInput<IV>(atk, outputFloor, 15),
      def: tidyInput<IV>(def, outputFloor, 15),
      sta: tidyInput<IV>(sta, outputFloor, 15),
    },
    floor: outputFloor,
  };
}