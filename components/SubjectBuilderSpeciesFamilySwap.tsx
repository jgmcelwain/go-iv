import React, { FunctionComponent, useMemo } from 'react';

import { Pokemon } from '../data/reference';

import { useSubject } from '../hooks/useSubject';
import { usePokedex } from '../hooks/usePokedex';

import { SwitchVerticalIcon } from '@heroicons/react/solid';

const SubjectBuilderSpeciesFamilySwap: FunctionComponent<{
  onChange: (arg0: Pokemon) => void;
}> = ({ onChange }) => {
  const { subject } = useSubject();
  const pokedex = usePokedex();

  const iterableFamily = useMemo(() => {
    const familyMembers = pokedex.familyMembers(subject.species.family?.id);

    return familyMembers.sort((a, b) => a.family.stage - b.family.stage);
  }, [subject.species.id, pokedex.list.length]);

  if (iterableFamily.length === 0) return null;

  return (
    <div className='flex flex-wrap items-center justify-start order-2 w-full my-1 md:order-5'>
      {iterableFamily.map((familyMember) => (
        <button
          key={familyMember.id}
          onClick={() => {
            onChange(familyMember);
          }}
          className={`flex justify-start items-center transition-colors border mr-2 mb-2 last:mr-0 py-1 px-2 focus-ring ring-offset-gray-800 hover:text-blue-300 rounded bg-gray-800 ${
            subject.species.id === familyMember.id
              ? 'text-blue-300 border-gray-700'
              : 'text-gray-400 border-transparent'
          }`}
        >
          <span className='mr-2 text-sm font-semibold'>
            {familyMember.name}
          </span>

          <SwitchVerticalIcon className='w-4 h-4' />
        </button>
      ))}
    </div>
  );
};

export default SubjectBuilderSpeciesFamilySwap;
