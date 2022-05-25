import React, { FC, useState, useEffect, useRef } from 'react';

import { PokemonName } from '../data/pokedex';

import { useCandidate, CandidateActionTypes } from '../hooks/useCandidate';
import { usePokedex } from '../hooks/usePokedex';

const CandidateBuilderSpecies: FC = () => {
  const pokedex = usePokedex();
  const { candidate, dispatch } = useCandidate();
  const [speciesInputValue, setSpeciesInputValue] = useState<PokemonName>(
    candidate.species.name,
  );

  useEffect(() => {
    if (candidate.species.name !== speciesInputValue) {
      const match = pokedex.byName(speciesInputValue);

      if (match) {
        dispatch({ type: CandidateActionTypes.Species, payload: match });
      }
    }
  }, [speciesInputValue]);
  useEffect(() => {
    if (candidate.species.name !== speciesInputValue) {
      setSpeciesInputValue(candidate.species.name);
    }
  }, [candidate.species.name]);

  const input = useRef<HTMLInputElement>();

  return (
    <label className='order-1 block w-full mb-2 md:mr-6 md:w-auto'>
      <span className='text-xs text-gray-400 sr-only md:not-sr-only'>
        Pokémon
      </span>

      <input
        onFocus={() => {
          input.current.value = '';
        }}
        onBlur={() => {
          input.current.value = candidate.species.name;
        }}
        onChange={(evt) => setSpeciesInputValue(evt.target.value)}
        type='text'
        list='pokemon-list'
        value={speciesInputValue}
        className='block w-full mt-1 rounded form-input focus-visible-ring ring-offset-gray-900'
        placeholder='Pokémon Name'
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
