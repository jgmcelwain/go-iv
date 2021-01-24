import { getPokemonByID } from '../../data/pokedex';
import {
  IV,
  IVFloor,
  PokemonID,
  MAX_IV,
  MIN_IV_FLOOR,
  MAX_IV_FLOOR,
} from '../../data/reference';
import { Subject } from '.';
import { NextPageContext } from 'next';

type DirtyIV = IV | number;
type DirtyIVFloor = IVFloor | number;
type Query = [PokemonID, DirtyIV, DirtyIV, DirtyIV, DirtyIVFloor];

export function tidyNumericInput<T extends number>(
  val: number,
  min: T,
  max: T,
): T {
  return Math.max(Math.min(val, max), min) as T;
}

const SUBJECT_DEFAULTS = {
  id: process.env.NEXT_PUBLIC_DEFAULT_POKEMON ?? 'azumarill',
  atk: parseInt(process.env.NEXT_PUBLIC_DEFAULT_ATK ?? '0'),
  def: parseInt(process.env.NEXT_PUBLIC_DEFAULT_DEF ?? '15'),
  sta: parseInt(process.env.NEXT_PUBLIC_DEFAULT_STA ?? '15'),
  floor: parseInt(process.env.NEXT_PUBLIC_DEFAULT_FLOOR ?? '0'),
};

export function getInitialSubject({ query }: NextPageContext): Subject {
  const [
    id = SUBJECT_DEFAULTS.id,
    atk = SUBJECT_DEFAULTS.atk,
    def = SUBJECT_DEFAULTS.def,
    sta = SUBJECT_DEFAULTS.sta,
    floor = SUBJECT_DEFAULTS.floor,
  ]: Query = (query?.subject ?? []) as Query;

  const species = getPokemonByID(id) ?? getPokemonByID(SUBJECT_DEFAULTS.id);

  const outputFloor = tidyNumericInput<IVFloor>(
    floor,
    MIN_IV_FLOOR,
    MAX_IV_FLOOR,
  );

  return {
    species,
    ivs: {
      atk: tidyNumericInput<IV>(atk, outputFloor, MAX_IV),
      def: tidyNumericInput<IV>(def, outputFloor, MAX_IV),
      sta: tidyNumericInput<IV>(sta, outputFloor, MAX_IV),
    },
    floor: outputFloor,
  };
}
