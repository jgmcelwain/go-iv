import React, { FC } from 'react';

import { useLeague } from '../hooks/useLeague';
import { Provider as LeagueCandidateRankedSpreadsProvider } from '../hooks/useRankedSpreads';

import CandidateLeagueTopSpreadsAtLevelCap from './CandidateLeagueTopSpreadsAtLevelCap';
import CandidateLeagueRanked from './CandidateLeagueRanked';

const CandidateLeagueContent: FC = () => {
  const { inspectedLevelCap } = useLeague();

  return (
    <LeagueCandidateRankedSpreadsProvider>
      {inspectedLevelCap !== null ? (
        <CandidateLeagueTopSpreadsAtLevelCap />
      ) : (
        <CandidateLeagueRanked />
      )}
    </LeagueCandidateRankedSpreadsProvider>
  );
};

export default CandidateLeagueContent;
