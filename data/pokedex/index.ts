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
  wholeLevelsOnly?: boolean;
};

function createPokedexLookup(list: Pokemon[]) {
  const byId = new Map(list.map((pokemon) => [pokemon.id, pokemon]));
  const byName = new Map(list.map((pokemon) => [pokemon.name, pokemon]));
  const searchable = list.map((pokemon) => ({
    pokemon,
    name: pokemon.name.toLowerCase(),
  }));
  const byLowerName = new Map(
    searchable.map(({ pokemon, name }) => [name, pokemon]),
  );
  const byFamily = new Map<PokemonID, Pokemon[]>();
  for (const pokemon of list) {
    const family = byFamily.get(pokemon.family.id);
    if (family) family.push(pokemon);
    else byFamily.set(pokemon.family.id, [pokemon]);
  }

  return {
    list,
    byId: (id: PokemonID) => byId.get(id) ?? null,
    byName: (name: PokemonName) => byName.get(name) ?? null,
    familyMembers: (id: PokemonID) => byFamily.get(id)?.slice() ?? [],
    searchByName: (query: string) => {
      const lowerQuery = query.toLowerCase();
      return (
        byLowerName.get(lowerQuery) ??
        searchable.find(
          ({ pokemon, name }) =>
            pokemon.aliases?.includes(lowerQuery) ||
            isSubsequence(lowerQuery, name),
        )?.pokemon ??
        null
      );
    },
  };
}

const POKEDEX_LOOKUP = createPokedexLookup(POKEDEX);

export function getPokedexLookup(list: Pokemon[] = POKEDEX) {
  return list === POKEDEX ? POKEDEX_LOOKUP : createPokedexLookup(list);
}

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
              const form = POKEDEX_LOOKUP.byId(id);
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

const SELECTIONS_BY_FAMILY = new Map<PokemonID, PokemonSelection[]>();
for (const selection of POKEMON_SELECTIONS) {
  const id = selection.defaultForm.family.id;
  const family = SELECTIONS_BY_FAMILY.get(id);
  if (family) family.push(selection);
  else SELECTIONS_BY_FAMILY.set(id, [selection]);
}

export function getPokemonSelectionFamilyMembers(id: PokemonID) {
  return SELECTIONS_BY_FAMILY.get(id)?.slice() ?? [];
}

export function getPokemonSelection(id: PokemonID) {
  return SELECTION_BY_ID.get(id) ?? null;
}

export function getPokemonByName(name: PokemonName, list: Pokemon[] = POKEDEX) {
  if (!name) return null;

  return list === POKEDEX
    ? POKEDEX_LOOKUP.byName(name) ?? null
    : list.find((pokemon) => pokemon.name === name) ?? null;
}

export function searchPokemonByName(query: string, list: Pokemon[] = POKEDEX) {
  return getPokedexLookup(list).searchByName(query);
}

export function getPokemonByID(id: PokemonID, list: Pokemon[] = POKEDEX) {
  if (!id) return null;

  return list === POKEDEX
    ? POKEDEX_LOOKUP.byId(id) ?? null
    : list.find((pokemon) => pokemon.id === id) ?? null;
}

export function getPokemonFamilyMembers(
  familyID: PokemonID,
  list: Pokemon[] = POKEDEX,
) {
  return list === POKEDEX
    ? POKEDEX_LOOKUP.familyMembers(familyID)
    : list.filter((pokemon) => pokemon.family.id === familyID);
}
