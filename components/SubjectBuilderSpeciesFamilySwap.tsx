import React, { FunctionComponent, useMemo } from 'react';

import { getPokemonFamilyMembers } from '../data/pokedex';
import { Pokemon } from '../data/reference';

import { useSubject } from '../hooks/useSubject';

const SubjectBuilderSpeciesFamilySwap: FunctionComponent<{
  onChange: (arg0: Pokemon) => void;
}> = ({ onChange }) => {
  const { subject } = useSubject();

  const iterableFamily = useMemo(() => {
    const familyMembers = getPokemonFamilyMembers(subject.species.family?.id);

    return familyMembers.sort((a, b) => a.family.stage - b.family.stage);
  }, [subject.species.id]);

  if (iterableFamily.length === 0) return null;

  return (
    <div className='order-2 md:order-5 w-full flex flex-wrap justify-start items-center my-1'>
      {iterableFamily.map((familyMember) => (
        <button
          key={familyMember.id}
          onClick={() => {
            onChange(familyMember);
          }}
          className={`flex justify-start items-center bg-gray-800 text-gray-400 hover:text-gray-300 transition-colors mr-2 mb-2 last:mr-0 py-1 px-2 focus:ring-2 ring-offset-1 ring-offset-gray-800 ring-blue-600 focus:outline-none rounded ${
            subject.species.id === familyMember.id
              ? ' text-blue-300 hover:text-blue-200'
              : ''
          }`}
          tabIndex={-1}
        >
          <span className='font-semibold text-sm mr-2'>
            {familyMember.name}
          </span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4'
            />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default SubjectBuilderSpeciesFamilySwap;
