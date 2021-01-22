import React, { FunctionComponent, useEffect, useRef } from 'react';

import { useLeague } from '../hooks/useLeague';
import { Provider as LeagueSubjectRankedSpreadsProvider } from '../hooks/useLeagueSubjectRankedSpreads';

import LeagueSubject from './LeagueSubject';
import LeagueTopSpreadsForLevel from './LeagueTopSpreadsForLevel';

const LeagueContent: FunctionComponent = () => {
  const { displayMode } = useLeague();

  return (
    <LeagueSubjectRankedSpreadsProvider>
      <div className='w-full bg-gray-100'>
        {displayMode === 'subject' ? (
          <LeagueSubject />
        ) : (
          <LeagueTopSpreadsForLevel />
        )}
      </div>
    </LeagueSubjectRankedSpreadsProvider>
  );
};

export default LeagueContent;
