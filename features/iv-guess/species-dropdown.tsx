import { MutableRefObject, startTransition, useEffect, useRef } from 'react';

import { usePokedex } from '../../hooks/usePokedex';
import { Pokemon } from '../../data/pokedex';

function useInputRef() {
  return useRef<HTMLInputElement | null>(null);
}

function useSyncInputToValue(
  input: MutableRefObject<HTMLInputElement | null>,
  value: Pokemon,
) {
  useEffect(() => {
    // sync candidate with input value if the candidate has been edited by
    // something else
    if (
      input.current !== null &&
      value.name !== input.current.value &&
      document.activeElement !== input.current
    ) {
      input.current.value = value.name;
    }
  }, [value.name, input]);
}

interface SpeciesDropdownProps {
  label: string;
  value: Pokemon;
  onChange: (pokemon: Pokemon) => void;
}
export function SpeciesDropdown({
  label,
  value,
  onChange,
}: SpeciesDropdownProps) {
  const pokedex = usePokedex();
  const input = useInputRef();
  useSyncInputToValue(input, value);

  return (
    <label className='block w-full'>
      <span className='text-xs text-gray-400'>{label}</span>

      <input
        onChange={(evt) => {
          const match = pokedex.searchByName(evt.target.value);

          if (match && match.id !== value.id) {
            startTransition(() => onChange(match));
          }
        }}
        onFocus={() => {
          if (input.current !== null) {
            input.current.value = '';
          }
        }}
        onBlur={() => {
          if (input.current !== null) {
            input.current.value = value.name;
          }
        }}
        type='text'
        list='pokemon-list'
        defaultValue={value.name}
        className='block w-full mt-1 rounded form-input focus-visible-ring ring-offset-gray-50 dark:ring-offset-gray-900'
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
}
