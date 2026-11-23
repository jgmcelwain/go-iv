import React, { FC, useEffect } from 'react';

import { useCandidate } from '../hooks/useCandidate';
import { MEGA_POKEMON } from '../lib/megaLeagueSpreads';

import CandidateBuilderStickyHeader from './CandidateBuilderStickyHeader';
import CandidateBuilderSpecies from './CandidateBuilderSpecies';
import CandidateBuilderFamilySwap from './CandidateBuilderFamilySwap';
import CandidateBuilderIVs from './CandidateBuilderIVs';
import CandidateBuilderIVFloor from './CandidateBuilderIVFloor';
import CandidateBuilderMinimumLevel from './CandidateBuilderMinimumLevel';
import CandidateBuilderRankingMetric from './CandidateBuilderRankingMetric';
import { useMegaLink } from './AppHeader';

function useOfferMegaLink() {
  const { candidate } = useCandidate();
  const { setMegaPath } = useMegaLink();
  const { id } = candidate.species.defaultForm;
  const { atk, def, sta } = candidate.ivs;
  const megaPath = MEGA_POKEMON.some((pokemon) => pokemon.id === id)
    ? `/mega/${id}/${atk}/${def}/${sta}/${candidate.rankingMetric}`
    : null;

  useEffect(() => {
    setMegaPath(megaPath);
    return () => setMegaPath(null);
  }, [megaPath, setMegaPath]);
}

const CandidateBuilder: FC = () => {
  useOfferMegaLink();

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
