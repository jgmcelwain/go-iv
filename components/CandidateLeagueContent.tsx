import React, { FunctionComponent } from 'react';

import { useLeague } from '../hooks/useLeague';
import { Provider as LeagueCandidateRankedSpreadsProvider } from '../hooks/useRankedSpreads';

import CandidateLeagueTopSpreadsAtLevelCap from './CandidateLeagueTopSpreadsAtLevelCap';
import CandidateLeagueRanks from './CandidateLeagueRanks';

const CandidateLeagueContent: FunctionComponent = () => {
  const { displayMode } = useLeague();

  return (
    <LeagueCandidateRankedSpreadsProvider>
      <div className='w-full bg-gray-100'>
        {displayMode === 'top' ? (
          <CandidateLeagueTopSpreadsAtLevelCap />
        ) : (
          <CandidateLeagueRanks />
        )}
      </div>
    </LeagueCandidateRankedSpreadsProvider>
  );
};

export default CandidateLeagueContent;
