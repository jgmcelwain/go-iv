import React, { FC } from 'react';

import { useLeague } from '../hooks/useLeague';
import { Provider as LeagueCandidateRankedSpreadsProvider } from '../hooks/useRankedSpreads';

import CandidateLeagueTopSpreadsAtLevelCap from './CandidateLeagueTopSpreadsAtLevelCap';
import CandidateLeagueRanked from './CandidateLeagueRanked';

const CandidateLeagueContent: FC = () => {
  const { inspectedLevelCap } = useLeague();

  return (
    <LeagueCandidateRankedSpreadsProvider>
      <div className='w-full bg-gray-100'>
        {inspectedLevelCap !== null ? (
          <CandidateLeagueTopSpreadsAtLevelCap />
        ) : (
          <CandidateLeagueRanked />
        )}
      </div>
    </LeagueCandidateRankedSpreadsProvider>
  );
};

export default CandidateLeagueContent;
