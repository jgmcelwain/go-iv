import React, { FunctionComponent } from 'react';

import { League } from '../data/reference';
import { Provider as LeagueContextProvider } from '../hooks/useLeague';

import LeagueHeader from './LeagueHeader';
import LeagueSubject from './LeagueSubject';

const LeagueWrapper: FunctionComponent<{ league: League }> = ({ league }) => {
  return (
    <LeagueContextProvider league={league}>
      <div className='w-full sm:rounded-lg overflow-hidden'>
        <LeagueHeader />

        <LeagueSubject />
      </div>
    </LeagueContextProvider>
  );
};

export default LeagueWrapper;
