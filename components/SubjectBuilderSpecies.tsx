import React, { FunctionComponent, useState, useEffect, useRef } from 'react';

import { PokemonName } from '../data/reference';

import { useSubject, SubjectActionTypes } from '../hooks/useSubject';
import { usePokedex } from '../hooks/usePokedex';

import SubjectBuilderSpeciesFamilySwap from './SubjectBuilderSpeciesFamilySwap';

const SubjectBuilderSpecies: FunctionComponent = () => {
  const pokedex = usePokedex();
  const { subject, dispatch } = useSubject();
  const [value, setValue] = useState<PokemonName>(subject.species.name);

  useEffect(() => {
    if (subject.species.name !== value) {
      const match = pokedex.byName(value);

      if (match) {
        dispatch({ type: SubjectActionTypes.Species, payload: match });
      }
    }
  }, [value]);
  useEffect(() => {
    if (subject.species.name !== value) {
      setValue(subject.species.name);
    }
  }, [subject.species.name]);

  const input = useRef<HTMLInputElement>();

  return (
    <>
      <div className='order-1 mb-2 mr-6'>
        <label className='block w-full mr-2'>
          <span className='text-xs text-gray-400'>Species</span>

          <input
            onFocus={() => {
              input.current.value = '';
            }}
            onBlur={() => {
              input.current.value = subject.species.name;
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
      </div>

      <SubjectBuilderSpeciesFamilySwap
        onChange={(familyMember) => setValue(familyMember.name)}
      />
    </>
  );
};

export default SubjectBuilderSpecies;
