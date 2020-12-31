import React, {
  FunctionComponent,
  useState,
  useEffect,
  useContext,
} from 'react';

import { SubjectContext } from './SubjectContext';
import { SubjectActionTypes } from '../hooks/useSubject';

import { PokemonName } from '../data/reference';
import { POKEDEX } from '../data/pokedex';

const SubjectBuilderPokemon: FunctionComponent = () => {
  const [value, setValue] = useState<PokemonName>(POKEDEX[0].name);
  const { dispatch } = useContext(SubjectContext);

  useEffect(() => {
    const match = POKEDEX.find((pokemon) => pokemon.name === value);

    if (match) {
      dispatch({ type: SubjectActionTypes.Species, payload: match });
    }
  }, [value]);

  return (
    <label className='block mb-4'>
      <span className='text-gray-200 text-sm'>Species</span>

      <input
        onChange={(evt) => setValue(evt.target.value)}
        type='text'
        list='pokemon-list'
        value={value}
        className='form-input rounded mt-1 block w-full'
        placeholder={POKEDEX[0].name}
      />

      <datalist id='pokemon-list'>
        {POKEDEX.map((pokemon) => (
          <option key={pokemon.id} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </datalist>
    </label>
  );
};

export default SubjectBuilderPokemon;
