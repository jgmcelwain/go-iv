import React, { FC } from 'react';

import { IV_FLOORS } from '../data/ivFloor';

import { useCandidate } from '../hooks/useCandidate';
import { useLeague } from '../hooks/useLeague';

import { ArrowLeftIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { RANKABLE_METRICS } from '../data/stat';

const LEAGUE_COLORS = {
  great: {
    background: 'from-blue-400 to-blue-500',
    stripe: 'from-red-500 to-red-600',
    text: 'text-white',
  },
  ultra: {
    background: 'from-gray-700 to-gray-800',
    stripe: 'from-yellow-500 to-yellow-600',
    text: 'text-white',
  },
  master: {
    background: 'from-purple-500 to-purple-600',
    stripe: 'from-pink-500 to-pink-600',
    text: 'text-white',
  },
  little: {
    background: 'from-white to-gray-100',
    stripe: 'from-red-500 to-red-600',
    text: 'text-gray-600',
  },
};

const CandidateLeagueHeader: FC = () => {
  const { candidate } = useCandidate();
  const { league, inspectedLevelCap, setInspectedLevelCap, collapsed } =
    useLeague();

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
    <header
      className={`z-[5] w-full p-4 bg-gradient-to-br ${
        LEAGUE_COLORS[league.key].background
      } sticky top-0 sm:relative left-0 flex justify-between items-center overflow-hidden font-title ${
        LEAGUE_COLORS[league.key].text
      }`}
    >
      <div
        className={`absolute z-0 right-0 top-0 transform rotate-45 w-5 h-72 opacity-90 -translate-x-20 -translate-y-10 bg-gradient-to-b ${
          LEAGUE_COLORS[league.key].stripe
        }`}
      />

      {inspectedLevelCap !== null && (
        <button
          onClick={() => setInspectedLevelCap(null)}
          title={`Back`}
          className='p-1 mr-3 rounded focus-visible:ring-2 ring-white'
        >
          <ArrowLeftIcon className='w-4 h-4' />
        </button>
      )}

      <div className='z-10 flex-grow'>
        {inspectedLevelCap !== null ? (
          <>
            <h2 className='flex-grow font-semibold leading-snug'>
              Top {league.name} IV Spreads for{' '}
              <span key={candidate.species.name}>{candidate.species.name}</span>
            </h2>

            <p className='mt-1 text-xs font-semibold'>
              Level: {candidate.minimumLevel} - {inspectedLevelCap.level} (
              {inspectedLevelCap.description})
            </p>
            <p className='mt-1 text-xs font-semibold'>
              IV Floor: {floor.value} ({floor.name})
            </p>
            <p className='mt-1 text-xs font-semibold'>
              Ranked By: {rankingMetric.name}
            </p>
          </>
        ) : (
          <>
            <h2 className='flex-grow font-semibold leading-none'>
              {league.name}
            </h2>
          </>
        )}
      </div>

      {inspectedLevelCap === null && (
        <button onClick={() => collapsed.toggle()} className='z-10'>
          <ChevronUpIcon
            className={`w-5 h-5 text-white transition-transform ${
              collapsed.value ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      )}
    </header>
  );
};

export default CandidateLeagueHeader;
