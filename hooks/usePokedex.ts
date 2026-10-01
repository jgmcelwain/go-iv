import { useMemo } from 'react';
import { useSettings } from './useSettings';
import {
  POKEDEX,
  PokemonID,
  POKEMON_SELECTIONS,
  getPokedexLookup,
  getPokemonSelection,
  getPokemonSelectionFamilyMembers,
} from '../data/pokedex';
import { useSpeculativePokemon } from './useSpeculativePokemon';

export function usePokedex() {
  const { settings } = useSettings();
  const speculativePokemon = useSpeculativePokemon();
  const list = useMemo(() => {
    if (settings.showSpeculative) return POKEDEX;
    const hiddenIds = new Set(speculativePokemon);
    return POKEDEX.filter((pokemon) => !hiddenIds.has(pokemon.id));
  }, [settings.showSpeculative, speculativePokemon]);

  return useMemo(() => getPokedexLookup(list), [list]);
}

export function usePokemonSelections() {
  const pokedex = usePokedex();
  const list = useMemo(
    () =>
      POKEMON_SELECTIONS.filter((selection) =>
        pokedex.byId(selection.defaultForm.id),
      ),
    [pokedex],
  );

  return {
    list,
    searchByName: (query: string) => {
      const match = pokedex.searchByName(query);
      return match ? getPokemonSelection(match.id) : null;
    },
    familyMembers: (id: PokemonID) =>
      getPokemonSelectionFamilyMembers(id).filter((selection) =>
        pokedex.byId(selection.defaultForm.id),
      ),
  };
}
