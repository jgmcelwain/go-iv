import React, { FunctionComponent } from 'react';

import { League } from '../data/reference';
import { Provider as LeagueContextProvider } from '../hooks/useLeague';

import SubjectLeagueHeader from './SubjectLeagueHeader';
import SubjectLeagueContent from './SubjectLeagueContent';

const SubjectLeague: FunctionComponent<{ league: League }> = ({ league }) => {
  return (
    <LeagueContextProvider league={league}>
      <div className='w-full overflow-hidden shadow-xl sm:rounded-lg'>
        <SubjectLeagueHeader />

        <SubjectLeagueContent />
      </div>
    </LeagueContextProvider>
  );
};

export default SubjectLeague;
