import { getPokemonByID } from '../../data/pokedex';
import {
  IV,
  IVFloor,
  PokemonID,
  MAX_IV,
  MIN_IV_FLOOR,
  MAX_IV_FLOOR,
} from '../../data/reference';

import { tidyNumericInput } from '../../utils/tidyNumericInput';

import { Candidate } from '.';
import { ParsedUrlQuery } from 'node:querystring';

type DirtyIV = IV | number;
type DirtyIVFloor = IVFloor | number;
type Query = [PokemonID, DirtyIV, DirtyIV, DirtyIV, DirtyIVFloor];

const CANDIDATE_DEFAULTS = {
  id: process.env.NEXT_PUBLIC_DEFAULT_POKEMON ?? 'azumarill',
  atk: parseInt(process.env.NEXT_PUBLIC_DEFAULT_ATK ?? '0'),
  def: parseInt(process.env.NEXT_PUBLIC_DEFAULT_DEF ?? '15'),
  sta: parseInt(process.env.NEXT_PUBLIC_DEFAULT_STA ?? '15'),
  floor: parseInt(process.env.NEXT_PUBLIC_DEFAULT_FLOOR ?? '0'),
};

export function getInitialCandidate(query: ParsedUrlQuery): Candidate {
  const [
    id = CANDIDATE_DEFAULTS.id,
    atk = CANDIDATE_DEFAULTS.atk,
    def = CANDIDATE_DEFAULTS.def,
    sta = CANDIDATE_DEFAULTS.sta,
    floor = CANDIDATE_DEFAULTS.floor,
  ]: Query = (query?.candidate ?? []) as Query;

  const species = getPokemonByID(id) ?? getPokemonByID(CANDIDATE_DEFAULTS.id);

  const outputFloor = tidyNumericInput<IVFloor>(
    floor,
    species.floor ?? MIN_IV_FLOOR,
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
