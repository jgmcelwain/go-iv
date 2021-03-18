import React, { FunctionComponent } from 'react';

import { useLeague } from '../hooks/useLeague';
import { Provider as LeagueSubjectRankedSpreadsProvider } from '../hooks/useRankedSpreads';

import LeagueSubjectRanked from './LeagueSubjectRanked';
import LeagueSubjectTopSpreadsForLevel from './LeagueSubjectTopSpreadsForLevel';

const LeagueContent: FunctionComponent = () => {
  const { displayMode } = useLeague();

  return (
    <LeagueSubjectRankedSpreadsProvider>
      <div className='w-full bg-gray-100'>
        {displayMode === 'subject' ? (
          <LeagueSubjectRanked />
        ) : (
          <LeagueSubjectTopSpreadsForLevel />
        )}
      </div>
    </LeagueSubjectRankedSpreadsProvider>
  );
};

export default LeagueContent;
