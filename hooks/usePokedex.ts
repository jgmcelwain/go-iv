import { useMemo } from 'react';
import { useSettings } from './useSettings';
import {
  POKEDEX,
  PokemonID,
  POKEMON_SELECTIONS,
  getPokedexLookup,
  getPokemonSelection,
  getPokemonSelectionByName,
  getPokemonSelectionFamilyMembers,
} from '../data/pokedex';
import { useSpeculativePokemon } from './useSpeculativePokemon';

const lookupsWithoutSpeculative = new WeakMap<
  PokemonID[],
  ReturnType<typeof getPokedexLookup>
>();

function getLookupWithoutSpeculative(speculativePokemon: PokemonID[]) {
  let lookup = lookupsWithoutSpeculative.get(speculativePokemon);
  if (!lookup) {
    const hiddenIds = new Set(speculativePokemon);
    lookup = getPokedexLookup(
      POKEDEX.filter((pokemon) => !hiddenIds.has(pokemon.id)),
    );
    lookupsWithoutSpeculative.set(speculativePokemon, lookup);
  }
  return lookup;
}

export function usePokedex() {
  const { settings } = useSettings();
  const speculativePokemon = useSpeculativePokemon();

  return settings.showSpeculative || speculativePokemon.length === 0
    ? getPokedexLookup()
    : getLookupWithoutSpeculative(speculativePokemon);
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

  const toSelection = (match: { id: PokemonID } | null) =>
    match ? getPokemonSelection(match.id) : null;

  const findByName = (query: string) => {
    const selection = getPokemonSelectionByName(query);
    if (selection && pokedex.byId(selection.defaultForm.id)) return selection;
    return toSelection(pokedex.findByName(query));
  };

  return {
    list,
    searchByName: (query: string) =>
      findByName(query) ?? toSelection(pokedex.searchByName(query)),
    familyMembers: (id: PokemonID) =>
      getPokemonSelectionFamilyMembers(id).filter((selection) =>
        pokedex.byId(selection.defaultForm.id),
      ),
  };
}
