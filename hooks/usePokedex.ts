import { useCallback, useMemo } from 'react';
import { useSettings } from './useSettings';

import {
  POKEDEX,
  getPokemonByName,
  getPokemonByID,
  getPokemonFamilyMembers,
  PokemonName,
  PokemonID,
  searchPokmeonByName,
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
        } else {
          return speculativePokemon.includes(pokemon.id) === false;
        }
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
    (query: string) => searchPokmeonByName(query, list),
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
