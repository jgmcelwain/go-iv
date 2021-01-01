import React, { FunctionComponent, useContext } from 'react';

import { League } from '../data/reference';

import { Context as SubjectContext } from './SubjectContext';

const LEAGUE_COLORS = {
  great: {
    background: 'from-blue-400 to-blue-500',
    stripe: 'from-red-500 to-red-600',
  },
  ultra: {
    background: 'from-gray-700 to-gray-800',
    stripe: 'from-yellow-500 to-yellow-600',
  },
  master: {
    background: 'from-purple-500 to-purple-600',
    stripe: 'from-pink-500 to-pink-600',
  },
};

const LeagueHeader: FunctionComponent<{ league: League }> = ({ league }) => {
  const { subject } = useContext(SubjectContext);

  return (
    <div
      className={`w-full p-4 bg-gradient-to-br ${
        LEAGUE_COLORS[league.key].background
      } sticky top-0 left-0 flex justify-between items-center overflow-hidden`}
    >
      <div
        className={`absolute z-0 right-0 top-0 transform rotate-45 w-5 h-48 opacity-90 -translate-x-20 -translate-y-10 bg-gradient-to-b ${
          LEAGUE_COLORS[league.key].stripe
        }`}
      />

      <h2 className='font-title z-10 font-semibold text-white leading-none'>
        {league.name}
      </h2>

      <div className='font-title z-10 font-semibold text-white'>
        <p className='text-sm text-right'>{subject.species.name}</p>
        <p className='text-xs text-right'>
          {subject.ivs.atk} - {subject.ivs.def} - {subject.ivs.sta}
        </p>
      </div>
    </div>
  );
};

export default LeagueHeader;
