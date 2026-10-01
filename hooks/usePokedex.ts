import { useCallback, useMemo } from 'react';
import { useSettings } from './useSettings';

import {
  POKEDEX,
  POKEMON_SELECTIONS,
  getPokemonSelection,
  getPokemonByName,
  getPokemonByID,
  getPokemonFamilyMembers,
  PokemonName,
  PokemonID,
  searchPokemonByName,
} from '../data/pokedex';
import { useSpeculativePokemon } from './useSpeculativePokemon';

export function usePokedex() {
  const { settings } = useSettings();
  const speculativePokemon = useSpeculativePokemon();

  const list = useMemo(
    () =>
      POKEDEX.filter((pokemon) => {
        if (settings.showSpeculative === true) {
          return true;
        }

        return speculativePokemon.includes(pokemon.id) === false;
      }),
    [settings.showSpeculative, speculativePokemon],
  );

  const byName = useCallback(
    (name: PokemonName) => getPokemonByName(name, list),
    [list],
  );
  const byId = useCallback((id: PokemonID) => getPokemonByID(id, list), [list]);
  const familyMembers = useCallback(
    (familyId: PokemonID) => getPokemonFamilyMembers(familyId, list),
    [list],
  );
  const searchByName = useCallback(
    (query: string) => searchPokemonByName(query, list),
    [list],
  );

  return {
    list,
    byName,
    byId,
    familyMembers,
    searchByName,
  };
}

export function usePokemonSelections() {
  const pokedex = usePokedex();
  const { byId } = pokedex;
  const list = useMemo(
    () =>
      POKEMON_SELECTIONS.filter((selection) => byId(selection.defaultForm.id)),
    [byId],
  );
  return {
    list,
    searchByName: (query: string) => {
      const match = pokedex.searchByName(query);
      return match ? getPokemonSelection(match.id) : null;
    },
    familyMembers: (id: PokemonID) =>
      list.filter((selection) => selection.defaultForm.family.id === id),
  };
}
