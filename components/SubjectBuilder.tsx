import React, { FunctionComponent } from 'react';

import SubjectBuilderSpecies from './SubjectBuilderSpecies';
import SubjectBuilderIVs from './SubjectBuilderIVs';
import SubjectBuilderIVFloor from './SubjectBuilderIVFloor';

const SubjectBuilder: FunctionComponent = () => {
  return (
    <div className='w-full flex justify-start items-start flex-wrap mb-4 px-4 sm:px-0'>
      <SubjectBuilderSpecies />

      <SubjectBuilderIVs />

      <SubjectBuilderIVFloor />
    </div>
  );
};

export default SubjectBuilder;
