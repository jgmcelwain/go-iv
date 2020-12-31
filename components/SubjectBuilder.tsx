import React, { FunctionComponent } from 'react';

import { STATS } from '../data/reference';

import SubjectBuilderPokemon from './SubjectBuilderPokemon';
import SubjectBuilderStatIV from './SubjectBuilderStatIV';
import SubjectBuilderIVFloor from './SubjectBuilderIVFloor';

const SubjectBuilder: FunctionComponent = () => {
  return (
    <div className='w-full flex justify-start items-center flex-wrap my-4'>
      <div className='mr-6'>
        <SubjectBuilderPokemon />
      </div>

      <div className='grid grid-cols-3 gap-2 mr-6'>
        {STATS.map((stat) => (
          <SubjectBuilderStatIV key={stat} stat={stat} />
        ))}
      </div>

      <SubjectBuilderIVFloor />
    </div>
  );
};

export default SubjectBuilder;
