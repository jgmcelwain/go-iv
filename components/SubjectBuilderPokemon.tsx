import React, {
  FunctionComponent,
  useState,
  useEffect,
  useContext,
  useRef,
} from 'react';

import { Context as SubjectContext } from './SubjectContext';
import { SubjectActionTypes } from '../hooks/useSubject';

import { PokemonName } from '../data/reference';
import { POKEDEX } from '../data/pokedex';

const SubjectBuilderPokemon: FunctionComponent = () => {
  const input = useRef<HTMLInputElement>();

  const { subject, dispatch } = useContext(SubjectContext);
  const [value, setValue] = useState<PokemonName>(subject.species.name);

  useEffect(() => {
    const match = POKEDEX.find((pokemon) => pokemon.name === value);

    if (match) {
      dispatch({ type: SubjectActionTypes.Species, payload: match });
    }
  }, [value]);

  return (
    <label className='block mb-2'>
      <span className='text-gray-300 text-xs'>Species</span>

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
  );
};

export default SubjectBuilderPokemon;
