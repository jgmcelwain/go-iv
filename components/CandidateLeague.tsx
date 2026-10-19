import React, { FC } from 'react';

import { League } from '../data/league';
import { Provider as LeagueContextProvider } from '../hooks/useLeague';

import CandidateLeagueHeader from './CandidateLeagueHeader';
import CandidateLeagueContent from './CandidateLeagueContent';

const CandidateLeague: FC<{ league: League }> = ({ league }) => {
  return (
    <LeagueContextProvider league={league}>
      <div className='w-full overflow-hidden sm:shadow-md sm:shadow-gray-100 sm:dark:shadow-xl sm:dark:shadow-gray-900 sm:rounded-lg border-y border-gray-200 dark:border-transparent sm:border'>
        <CandidateLeagueHeader />

        <CandidateLeagueContent />
      </div>
    </LeagueContextProvider>
  );
};

export default CandidateLeague;
