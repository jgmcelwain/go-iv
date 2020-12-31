import React, { FunctionComponent } from 'react';

import { League } from '../data/reference';

import LeagueRanking from './LeagueRanking';

const LEAGUE_COLORS = {
  great: { background: 'from-blue-400 to-blue-500', stripe: 'bg-red-500' },
  ultra: { background: 'from-gray-700 to-gray-800', stripe: 'bg-yellow-500' },
  master: {
    background: 'from-purple-500 to-purple-600',
    stripe: 'bg-pink-500',
  },
};

const LeagueWrapper: FunctionComponent<{ league: League }> = ({ league }) => {
  return (
    <div className='w-full bg-white sm:rounded-lg overflow-y-hidden overflow-x-scroll'>
      <div
        className={`w-full px-4 py-5 bg-gradient-to-br ${
          LEAGUE_COLORS[league.key].background
        } sticky top-0 left-0 overflow-hidden`}
      >
        <div
          className={`absolute right-0 top-0 transform rotate-45 w-5 h-32 -translate-x-14 -translate-y-10 ${
            LEAGUE_COLORS[league.key].stripe
          }`}
        />
        <p className='font-title font-semibold text-white leading-none'>
          {league.name}
        </p>
      </div>

      <LeagueRanking league={league} />
    </div>
  );
};

export default LeagueWrapper;
