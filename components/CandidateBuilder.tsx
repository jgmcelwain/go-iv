import React, { FC } from 'react';

import CandidateBuilderStickyHeader from './CandidateBuilderStickyHeader';
import CandidateBuilderSpecies from './CandidateBuilderSpecies';
import CandidateBuilderFamilySwap from './CandidateBuilderFamilySwap';
import CandidateBuilderIVs from './CandidateBuilderIVs';
import CandidateBuilderIVFloor from './CandidateBuilderIVFloor';
import CandidateBuilderMinimumLevel from './CandidateBuilderMinimumLevel';
import CandidateBuilderRankingMetric from './CandidateBuilderRankingMetric';

const CandidateBuilder: FC = () => {
  return (
    <>
      <CandidateBuilderStickyHeader />

      <section className='flex flex-wrap items-start justify-start w-full px-4 mb-4 sm:px-0'>
        <CandidateBuilderSpecies />

        <CandidateBuilderIVs />

        <CandidateBuilderIVFloor />

        <CandidateBuilderRankingMetric />

        <CandidateBuilderMinimumLevel />

        <CandidateBuilderFamilySwap />
      </section>
    </>
  );
};

export default CandidateBuilder;
