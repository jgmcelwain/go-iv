import { getPokemonByID, PokemonID } from '../../data/pokedex';
import { IV, MAX_IV } from '../../data/iv';
import { IVFloor, MIN_IV_FLOOR, MAX_IV_FLOOR } from '../../data/ivFloor';

import { tidyNumericInput } from '../../utils/tidyNumericInput';

import { Candidate } from '.';
import { ParsedUrlQuery } from 'node:querystring';

type DirtyIV = IV | number;
type DirtyIVFloor = IVFloor | number;
type Query = [PokemonID, DirtyIV, DirtyIV, DirtyIV, DirtyIVFloor, boolean];

const CANDIDATE_DEFAULTS = {
  id: process.env.NEXT_PUBLIC_DEFAULT_POKEMON ?? 'azumarill',
  atk: parseInt(process.env.NEXT_PUBLIC_DEFAULT_ATK ?? '0'),
  def: parseInt(process.env.NEXT_PUBLIC_DEFAULT_DEF ?? '15'),
  sta: parseInt(process.env.NEXT_PUBLIC_DEFAULT_STA ?? '15'),
  floor: parseInt(process.env.NEXT_PUBLIC_DEFAULT_FLOOR ?? '0'),
  shadow: false,
};

function sanitizeCandidate(
  id: PokemonID = null,
  atk?: DirtyIV,
  def?: DirtyIV,
  sta?: DirtyIV,
  floor?: DirtyIVFloor,
  shadow?: boolean,
) {
  const species = getPokemonByID(id) ?? getPokemonByID(CANDIDATE_DEFAULTS.id);

  const outputFloor = tidyNumericInput<IVFloor>(
    floor ?? CANDIDATE_DEFAULTS.floor,
    species.floor ?? MIN_IV_FLOOR,
    MAX_IV_FLOOR,
  );

  const ivs = {
    atk: tidyNumericInput<IV>(
      atk ?? CANDIDATE_DEFAULTS.atk,
      outputFloor,
      MAX_IV,
    ),
    def: tidyNumericInput<IV>(
      def ?? CANDIDATE_DEFAULTS.def,
      outputFloor,
      MAX_IV,
    ),
    sta: tidyNumericInput<IV>(
      sta ?? CANDIDATE_DEFAULTS.sta,
      outputFloor,
      MAX_IV,
    ),
  };

  return {
    species,
    ivs,
    floor: outputFloor,
    shadow: shadow ?? false,
  };
}

export function getInitialCandidate(
  query: ParsedUrlQuery,
  cachedCandidate: Candidate,
): Candidate {
  if (query?.candidate) {
    const [
      id = CANDIDATE_DEFAULTS.id,
      atk = CANDIDATE_DEFAULTS.atk,
      def = CANDIDATE_DEFAULTS.def,
      sta = CANDIDATE_DEFAULTS.sta,
      floor = CANDIDATE_DEFAULTS.floor,
      shadow = CANDIDATE_DEFAULTS.shadow,
    ]: Query = (query?.candidate ?? []) as Query;

    return sanitizeCandidate(id, atk, def, sta, floor, shadow);
  } else if (cachedCandidate !== null) {
    return sanitizeCandidate(
      cachedCandidate.species.id,
      cachedCandidate.ivs.atk,
      cachedCandidate.ivs.def,
      cachedCandidate.ivs.sta,
      cachedCandidate.floor,
      cachedCandidate.shadow,
    );
  } else {
    return sanitizeCandidate(null);
  }
}
