import { useMemo } from 'react';
import { useSettings } from './useSettings';

import { PokemonName, PokemonID } from '../data/reference';
import {
  POKEDEX,
  getPokemonByName,
  getPokemonByID,
  getPokemonFamilyMembers,
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

  return {
    list,
    getPokemonByName: (name: PokemonName) => getPokemonByName(name, list),
    getPokemonByID: (id: PokemonID) => getPokemonByID(id, list),
    getPokemonFamilyMembers: (family_id: PokemonID) =>
      getPokemonFamilyMembers(family_id, list),
  };
}
