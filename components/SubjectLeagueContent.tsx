import React, { FunctionComponent } from 'react';

import { useLeague } from '../hooks/useLeague';
import { Provider as LeagueSubjectRankedSpreadsProvider } from '../hooks/useRankedSpreads';

import SubjectLeagueTopSpreadsAtLevelCap from './SubjectLeagueTopSpreadsAtLevelCap';
import SubjectLeagueRanks from './SubjectLeagueRanks';

const SubjectLeagueContent: FunctionComponent = () => {
  const { displayMode } = useLeague();

  return (
    <LeagueSubjectRankedSpreadsProvider>
      <div className='w-full bg-gray-100'>
        {displayMode === 'top' ? (
          <SubjectLeagueTopSpreadsAtLevelCap />
        ) : (
          <SubjectLeagueRanks />
        )}
      </div>
    </LeagueSubjectRankedSpreadsProvider>
  );
};

export default SubjectLeagueContent;
