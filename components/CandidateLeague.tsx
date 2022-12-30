import React, { FC } from 'react';

import { League } from '../data/league';
import { Provider as LeagueContextProvider } from '../hooks/useLeague';

import CandidateLeagueHeader from './CandidateLeagueHeader';
import CandidateLeagueContent from './CandidateLeagueContent';

const CandidateLeague: FC<{ league: League }> = ({ league }) => {
  return (
    <LeagueContextProvider league={league}>
      <div className='w-full overflow-hidden shadow-xl sm:rounded-lg'>
        <CandidateLeagueHeader />

        <CandidateLeagueContent />
      </div>
    </LeagueContextProvider>
  );
};

export default CandidateLeague;
