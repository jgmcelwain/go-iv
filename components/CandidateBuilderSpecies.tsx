import React, { FC, useEffect, useRef } from 'react';

import { useCandidate, CandidateActionTypes } from '../hooks/useCandidate';
import { usePokedex } from '../hooks/usePokedex';

const CandidateBuilderSpecies: FC = () => {
  const pokedex = usePokedex();
  const { candidate, dispatch } = useCandidate();

  useEffect(() => {
    // sync candidate with input value if the candidate has been edited by
    // something else
    if (
      candidate.species.name !== input.current.value &&
      document.activeElement !== input.current
    ) {
      input.current.value = candidate.species.name;
    }
  }, [candidate.species.name]);

  const input = useRef<HTMLInputElement>();

  return (
    <label className='block w-full mb-2 md:mr-6 md:w-auto'>
      <span className='text-xs text-gray-400 sr-only md:not-sr-only'>
        Pokémon
      </span>

      <input
        onChange={(evt) => {
          if (candidate.species.name !== evt.target.value) {
            const match = pokedex.searchByName(evt.target.value);

            if (match) {
              dispatch({ type: CandidateActionTypes.Species, payload: match });
            }
          }
        }}
        onFocus={() => {
          input.current.value = '';
        }}
        onBlur={() => {
          input.current.value = candidate.species.name;
        }}
        type='text'
        list='pokemon-list'
        defaultValue={candidate.species.name}
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
