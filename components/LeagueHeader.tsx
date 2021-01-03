import React, { FunctionComponent, useContext, useMemo } from 'react';

import { IV_FLOORS } from '../data/reference';

import { Context as SubjectContext } from './SubjectContext';
import { Context as LeagueContext } from './LeagueContext';

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

const LeagueHeader: FunctionComponent = () => {
  const { subject } = useContext(SubjectContext);
  const { league, displayMode, inspectedLevelCap, setDisplayMode } = useContext(
    LeagueContext,
  );

  const floor = useMemo(
    () => IV_FLOORS.find((floor) => floor.value === subject.floor),
    [subject.floor],
  );

  return (
    <div
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
          onClick={() => setDisplayMode('subject')}
          title={`Back`}
          className='p-1 mr-3 focus:ring-2 ring-white focus:outline-none rounded'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={3}
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
        </button>
      )}

      <div className='flex-grow z-10 '>
        <h2 className='font-semibold leading-none flex-grow'>{league.name}</h2>

        {displayMode === 'top' ? (
          <p className='font-semibold text-xs mt-1'>
            Top IV Spreads for {subject.species.name}, Level{' '}
            {inspectedLevelCap.level}, {floor.name}
          </p>
        ) : (
          <p className='font-semibold text-xs mt-1'>
            {subject.species.name}, {subject.ivs.atk}/{subject.ivs.def}/
            {subject.ivs.sta}, {floor.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default LeagueHeader;
