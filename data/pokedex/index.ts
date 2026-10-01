import { IV } from '../iv';
import { IVFloor } from '../ivFloor';
import { isSubsequence } from '../../utils/isSubsequence';

import { POKEDEX } from './list';
export { POKEDEX };

export type PokemonID = string;

export type PokemonName = string;

export type PokedexNumber = number;

export type PokemonStats = {
  atk: number;
  def: number;
  sta: number;
};

export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy';

export type PokemonIVs = {
  atk: IV;
  def: IV;
  sta: IV;
};

export type PokemonFamilyStage = 1 | 2 | 3 | 4 | 5;

export type Pokemon = {
  id: PokemonID;
  dexNumber: PokedexNumber;
  name: PokemonName;
  stats: PokemonStats;
  types: PokemonType[];
  floor?: IVFloor;
  family: {
    id: PokemonID;
    stage: PokemonFamilyStage;
  };
  aliases?: string[];
};

export type PokemonSelection = {
  id: PokemonID;
  name: PokemonName;
  defaultForm: Pokemon;
  forms: readonly Pokemon[];
};

const FORM_GROUPS = [
  {
    id: 'aegislash',
    name: 'Aegislash',
    defaultForm: 'aegislash_shield',
    forms: ['aegislash_shield', 'aegislash_blade'],
  },
  {
    id: 'minior',
    name: 'Minior',
    defaultForm: 'minior_meteor',
    forms: ['minior_meteor', 'minior_core'],
  },
];
const GROUP_BY_FORM = new Map(
  FORM_GROUPS.flatMap((group) => group.forms.map((id) => [id, group] as const)),
);

export const POKEMON_SELECTIONS: PokemonSelection[] = POKEDEX.flatMap(
  (pokemon) => {
    const group = GROUP_BY_FORM.get(pokemon.id);
    if (group && group.defaultForm !== pokemon.id) return [];
    return [
      {
        id: group?.id ?? pokemon.id,
        name: group?.name ?? pokemon.name,
        defaultForm: pokemon,
        forms: group
          ? group.forms.map((id) => {
              const form = getPokemonByID(id);
              if (!form) throw new Error(`Missing Pokémon form: ${id}`);
              return form;
            })
          : [pokemon],
      },
    ];
  },
);
const SELECTION_BY_ID = new Map(
  POKEMON_SELECTIONS.flatMap((selection) =>
    [selection.id, ...selection.forms.map((form) => form.id)].map(
      (id) => [id, selection] as const,
    ),
  ),
);

export function getPokemonSelection(id: PokemonID) {
  return SELECTION_BY_ID.get(id) ?? null;
}

export function getPokemonByName(name: PokemonName, list: Pokemon[] = POKEDEX) {
  if (!name) return null;

  return list.find((pokemon) => pokemon.name === name) ?? null;
}

export function searchPokemonByName(query: string, list: Pokemon[] = POKEDEX) {
  const lowerCaseQuery = query.toLowerCase();

  const matches = list.filter((pokemon) => {
    return (
      pokemon.aliases?.includes(lowerCaseQuery) ||
      isSubsequence(lowerCaseQuery, pokemon.name.toLowerCase())
    );
  });

  if (matches.length === 0) {
    return null;
  } else if (matches.length === 1) {
    return matches[0];
  } else {
    const exactMatch = matches.find(
      (match) => match.name.toLowerCase() === lowerCaseQuery,
    );

    if (exactMatch !== undefined) {
      return exactMatch;
    } else {
      return matches[0];
    }
  }
}

export function getPokemonByID(id: PokemonID, list: Pokemon[] = POKEDEX) {
  if (!id) return null;

  return list.find((pokemon) => pokemon.id === id) ?? null;
}

export function getPokemonFamilyMembers(
  familyID: PokemonID,
  list: Pokemon[] = POKEDEX,
) {
  return list.filter((pokemon) => pokemon.family.id === familyID);
}
