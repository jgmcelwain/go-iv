import React, { FunctionComponent } from 'react';

import { League } from '../data/reference';
import { Provider as LeagueContextProvider } from '../hooks/useLeague';

import CandidateLeagueHeader from './CandidateLeagueHeader';
import CandidateLeagueContent from './CandidateLeagueContent';

const CandidateLeague: FunctionComponent<{ league: League }> = ({ league }) => {
  return (
    <LeagueContextProvider league={league}>
      <div className='w-full overflow-hidden bg-gray-100 shadow-xl sm:rounded-lg'>
        <CandidateLeagueHeader />

        <CandidateLeagueContent />
      </div>
    </LeagueContextProvider>
  );
};

export default CandidateLeague;
