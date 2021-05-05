import { useCallback, useMemo } from 'react';
import { useSettings } from './useSettings';

import {
  POKEDEX,
  getPokemonByName,
  getPokemonByID,
  getPokemonFamilyMembers,
  PokemonName,
  PokemonID,
} from '../data/pokedex';

export function usePokedex() {
  const { settings } = useSettings();

  const list = useMemo(
    () =>
      POKEDEX.filter((pokemon) => {
        if (settings.showSpeculative === true) {
          return true;
        } else {
          return pokemon.speculative !== true;
        }
      }),
    [settings.showSpeculative],
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

  return {
    list,
    byName,
    byId,
    familyMembers,
  };
}
