import { getPokemonByID, POKEDEX } from '../../data/pokedex';
import { IV, IVFloor, PokemonID } from '../../data/reference';
import { Subject } from '.';
import { NextPageContext } from 'next';

type DirtyIV = IV | string;
type DirtyIVFloor = IVFloor | string;
type Query = [PokemonID, DirtyIV, DirtyIV, DirtyIV, DirtyIVFloor];

export function tidyNumericInput<T extends number>(
  val: number | string,
  min: T,
  max: T,
): T {
  let numeric = typeof val === 'number' ? val : parseInt(val);

  if (isNaN(numeric)) {
    numeric = 0;
  }

  return (Math.max(Math.min(numeric, max), min) as unknown) as T;
}

export function getInitialSubject(ctx: NextPageContext): Subject {
  const [
    id = POKEDEX[0].id,
    atk = 0,
    def = 15,
    sta = 15,
    floor = 0,
  ]: Query = (ctx.query?.subject ?? []) as Query;

  const species = getPokemonByID(id) ?? POKEDEX[0];
  const outputFloor = tidyNumericInput<IVFloor>(floor, 0, 12);

  return {
    species,
    ivs: {
      atk: tidyNumericInput<IV>(atk, outputFloor, 15),
      def: tidyNumericInput<IV>(def, outputFloor, 15),
      sta: tidyNumericInput<IV>(sta, outputFloor, 15),
    },
    floor: outputFloor,
  };
}
