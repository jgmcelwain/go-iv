import React, { FunctionComponent } from 'react';

import { League } from '../data/reference';

import LeagueHeader from './LeagueHeader';
import LeagueRankingsTable from './LeagueRankingsTable';

const LeagueWrapper: FunctionComponent<{ league: League }> = ({ league }) => {
  return (
    <div className='w-full sm:rounded-lg overflow-hidden'>
      <LeagueHeader league={league} />

      <div className='w-full overflow-x-scroll bg-gray-100 '>
        <LeagueRankingsTable league={league} />
      </div>
    </div>
  );
};

export default LeagueWrapper;
