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
