import React, { FC } from 'react';
import Link from 'next/link';

import { useCandidate } from '../hooks/useCandidate';
import { MEGA_POKEMON, ivsKey } from '../lib/megaLeagueSpreads';

import CandidateBuilderStickyHeader from './CandidateBuilderStickyHeader';
import CandidateBuilderSpecies from './CandidateBuilderSpecies';
import CandidateBuilderFamilySwap from './CandidateBuilderFamilySwap';
import CandidateBuilderIVs from './CandidateBuilderIVs';
import CandidateBuilderIVFloor from './CandidateBuilderIVFloor';
import CandidateBuilderMinimumLevel from './CandidateBuilderMinimumLevel';
import CandidateBuilderRankingMetric from './CandidateBuilderRankingMetric';
import MegaEvolutionIcon from './MegaEvolutionIcon';

const CandidateBuilder: FC = () => {
  const { candidate } = useCandidate();
  const megaId = candidate.species.defaultForm.id;
  const isMega = MEGA_POKEMON.some((pokemon) => pokemon.id === megaId);

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

        {isMega && (
          <Link
            href={{
              pathname: '/mega',
              query: { pokemon: megaId, ivs: ivsKey(candidate.ivs) },
            }}
            className='flex items-center w-full mt-1 mb-2 text-sm font-semibold text-blue-500 rounded dark:text-blue-300 hover:underline focus-visible-ring ring-offset-gray-50 dark:ring-offset-gray-900 sm:w-auto'
          >
            <MegaEvolutionIcon className='w-4 h-4 mr-1.5' />
            Compare Great and Ultra League ranks
          </Link>
        )}
      </section>
    </>
  );
};

export default CandidateBuilder;
