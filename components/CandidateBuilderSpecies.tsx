import React, { FunctionComponent, useState, useEffect, useRef } from 'react';

import { PokemonName } from '../data/reference';

import { useCandidate, CandidateActionTypes } from '../hooks/useCandidate';
import { usePokedex } from '../hooks/usePokedex';

const CandidateBuilderSpecies: FunctionComponent = () => {
  const pokedex = usePokedex();
  const { candidate, dispatch } = useCandidate();
  const [value, setValue] = useState<PokemonName>(candidate.species.name);

  useEffect(() => {
    if (candidate.species.name !== value) {
      const match = pokedex.byName(value);

      if (match) {
        dispatch({ type: CandidateActionTypes.Species, payload: match });
      }
    }
  }, [value]);
  useEffect(() => {
    if (candidate.species.name !== value) {
      setValue(candidate.species.name);
    }
  }, [candidate.species.name]);

  const input = useRef<HTMLInputElement>();

  return (
    <label className='order-1 block mb-2 mr-6'>
      <span className='text-xs text-gray-400'>Species</span>

      <input
        onFocus={() => {
          input.current.value = '';
        }}
        onBlur={() => {
          input.current.value = candidate.species.name;
        }}
        onChange={(evt) => setValue(evt.target.value)}
        type='text'
        list='pokemon-list'
        value={value}
        className='block w-full mt-1 rounded form-input focus-visible-ring ring-offset-gray-900'
        placeholder='Pokémon'
        ref={input}
      />

      <datalist id='pokemon-list'>
        {pokedex.list.map((pokemon) => (
          <option key={pokemon.id} value={pokemon.name} />
        ))}
      </datalist>
    </label>
  );
};

export default CandidateBuilderSpecies;
