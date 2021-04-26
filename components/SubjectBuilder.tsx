import React, { FunctionComponent } from 'react';

import SubjectBuilderSpecies from './SubjectBuilderSpecies';
import SubjectBuilderIVs from './SubjectBuilderIVs';
import SubjectBuilderIVFloor from './SubjectBuilderIVFloor';

const SubjectBuilder: FunctionComponent = () => {
  return (
    <div className='flex flex-wrap items-start justify-start w-full px-4 mb-8 sm:mb-4 sm:px-0'>
      <SubjectBuilderSpecies />

      <SubjectBuilderIVs />

      <SubjectBuilderIVFloor />
    </div>
  );
};

export default SubjectBuilder;
