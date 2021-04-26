import React, { FunctionComponent, useMemo } from 'react';

import { Pokemon } from '../data/reference';

import { useSubject } from '../hooks/useSubject';
import { usePokedex } from '../hooks/usePokedex';

import { RadioGroup } from '@headlessui/react';
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
    <RadioGroup
      value={subject.species}
      onChange={(val: Pokemon) => onChange(val)}
      as='div'
      className='flex flex-wrap items-center justify-start order-2 w-full my-1 md:order-5'
    >
      <RadioGroup.Label className='sr-only'>
        Other family members
      </RadioGroup.Label>

      {iterableFamily.map((familyMember) => (
        <RadioGroup.Option
          key={familyMember.id}
          value={familyMember}
          className='mb-2 mr-2 rounded cursor-pointer last:mr-0 focus-visible-ring ring-offset-gray-800'
        >
          {({ checked }) => (
            <div
              className={`flex justify-start items-center transition-colors border py-1 px-2 hover:text-blue-300 rounded bg-gray-800 ${
                checked
                  ? 'text-blue-300 border-gray-700'
                  : 'text-gray-400 border-transparent'
              }`}
            >
              <RadioGroup.Label
                className='mr-2 text-sm font-semibold'
                as='span'
              >
                {familyMember.name}
              </RadioGroup.Label>

              <SwitchVerticalIcon className='w-4 h-4' />
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default SubjectBuilderSpeciesFamilySwap;
