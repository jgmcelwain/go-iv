import React, { FC, useMemo } from 'react';

import { IV_FLOORS } from '../data/ivFloor';

import { useCandidate } from '../hooks/useCandidate';
import { useLeague } from '../hooks/useLeague';

import { ArrowLeftIcon } from '@heroicons/react/solid';

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
  const {
    league,
    displayMode,
    inspectedLevelCap,
    setDisplayMode,
  } = useLeague();

  const floor = useMemo(
    () => IV_FLOORS.find((floor) => floor.value === candidate.floor),
    [candidate.floor],
  );

  return (
    <header
      className={`w-full p-4 bg-gradient-to-br ${
        LEAGUE_COLORS[league.key].background
      } sticky top-0 left-0 flex justify-between items-center overflow-hidden font-title ${
        LEAGUE_COLORS[league.key].text
      } border-b border-gray-200`}
    >
      <div
        className={`absolute z-0 right-0 top-0 transform rotate-45 w-5 h-48 opacity-90 -translate-x-20 -translate-y-10 bg-gradient-to-b ${
          LEAGUE_COLORS[league.key].stripe
        }`}
      />

      {displayMode === 'top' && (
        <button
          onClick={() => setDisplayMode('candidate')}
          title={`Back`}
          className='p-1 mr-3 rounded focus-visible:ring-2 ring-white'
        >
          <ArrowLeftIcon className='w-4 h-4' />
        </button>
      )}

      <div className='z-10 flex-grow'>
        <h2 className='flex-grow font-semibold leading-none'>{league.name}</h2>

        {displayMode === 'top' ? (
          <>
            <p className='mt-1 text-xs font-semibold'>
              Top IV Spreads for{' '}
              <span key={candidate.species.name}>{candidate.species.name}</span>
            </p>
            <p className='mt-1 text-xs font-semibold'>
              Level {inspectedLevelCap.level} ({inspectedLevelCap.description})
            </p>
            <p className='mt-1 text-xs font-semibold'>
              {floor.value} IV Floor ({floor.name})
            </p>
          </>
        ) : (
          <p className='mt-1 text-xs font-semibold'>
            <span key={candidate.species.name}>{candidate.species.name}</span>,{' '}
            {candidate.ivs.atk}/{candidate.ivs.def}/{candidate.ivs.sta},{' '}
            {floor.name}
          </p>
        )}
      </div>
    </header>
  );
};

export default CandidateLeagueHeader;
