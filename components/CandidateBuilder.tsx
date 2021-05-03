import React, { FunctionComponent } from 'react';

import CandidateBuilderSpecies from './CandidateBuilderSpecies';
import CandidateBuilderFamilySwap from './CandidateBuilderFamilySwap';
import CandidateBuilderIVs from './CandidateBuilderIVs';
import CandidateBuilderIVFloor from './CandidateBuilderIVFloor';

const CandidateBuilder: FunctionComponent = () => {
  return (
    <section className='flex flex-wrap items-start justify-start w-full px-4 mb-8 sm:mb-4 sm:px-0'>
      <CandidateBuilderSpecies />

      <CandidateBuilderFamilySwap />

      <CandidateBuilderIVs />

      <CandidateBuilderIVFloor />
    </section>
  );
};

export default CandidateBuilder;
