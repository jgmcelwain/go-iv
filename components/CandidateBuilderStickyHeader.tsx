import { useEffect, useState } from 'react';
import { IV_FLOORS } from '../data/ivFloor';
import { RANKABLE_METRICS } from '../data/stat';

import { useCandidate } from '../hooks/useCandidate';
import { useSettings } from '../hooks/useSettings';

import { PencilIcon } from '@heroicons/react/solid';
import SpeciesTypeIcons from './SpeciesTypeIcons';

function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
}

export default function CandidateBuilderStickyHeader() {
  const { candidate } = useCandidate();
  const { settings } = useSettings();

  const isScrolled = useIsScrolled();
  if (!isScrolled) return null;

  const rankingMetric = RANKABLE_METRICS.find(
    (metric) => metric.key === candidate.rankingMetric,
  );
  if (rankingMetric === undefined) {
    throw new Error('No matching ranking metric could be found.');
  }

  const floor = IV_FLOORS.find((floor) => floor.value === candidate.floor);
  if (floor === undefined) {
    throw new Error('No matching IV floor could be found.');
  }

  return (
    <div className='sm:hidden fixed top-0 h-14 flex justify-start items-center inset-x-0 z-10 bg-white dark:bg-gray-800 px-4 space-y-0.5 border-b border-gray-100 dark:border-gray-700'>
      <div className='grow text-gray-700 dark:text-gray-100'>
        <p className='text-xs text-gray-700 dark:text-gray-100 font-title'>
          <div className='inline-flex mr-2'>
            <SpeciesTypeIcons types={candidate.species.types} />
          </div>
          {candidate.species.name}, {candidate.ivs.atk}-{candidate.ivs.def}-
          {candidate.ivs.sta}{' '}
        </p>
        <p className='text-[10px] text-gray-600 dark:text-gray-300'>
          Ranked by {rankingMetric.name}, Min. IV {floor.value} ({floor.name})
          {settings.showMinimumLevel &&
            `, Min. Level ${candidate.minimumLevel}`}
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='rounded-full focus-visible-ring ring-offset-gray-100 dark:ring-offset-gray-800 p-1'
      >
        <PencilIcon
          className='w-5 h-5 text-gray-600 dark:text-gray-300'
          aria-hidden
        />

        <span className='sr-only'>Edit Candidate</span>
      </button>
    </div>
  );
}
