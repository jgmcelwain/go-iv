import React, { FunctionComponent, useState, useEffect, useRef } from 'react';

import { PokemonName } from '../data/reference';
import { getPokemonByName, POKEDEX } from '../data/pokedex';

import { useSubject, SubjectActionTypes } from '../hooks/useSubject';

import SubjectBuilderSpeciesFamilySwap from './SubjectBuilderSpeciesFamilySwap';

const SubjectBuilderSpecies: FunctionComponent = () => {
  const input = useRef<HTMLInputElement>();

  const { subject, dispatch } = useSubject();
  const [value, setValue] = useState<PokemonName>(subject.species.name);

  useEffect(() => {
    if (subject.species.name !== value) {
      const match = getPokemonByName(value);

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

  return (
    <>
      <div className='order-1 mb-2 mr-6'>
        <label className='w-full block mr-2'>
          <span className='text-gray-400 text-xs'>Species</span>

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
            className='form-input rounded mt-1 block w-full focus:ring-2 ring-offset-2 ring-offset-gray-900 ring-blue-600'
            placeholder='Pokémon'
            ref={input}
          />

          <datalist id='pokemon-list'>
            {POKEDEX.map((pokemon) => (
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
