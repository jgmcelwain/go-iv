import React, { FC } from 'react';

import { useLeague } from '../hooks/useLeague';
import { Provider as LeagueCandidateRankedSpreadsProvider } from '../hooks/useRankedSpreads';

import CandidateLeagueTopSpreadsAtLevelCap from './CandidateLeagueTopSpreadsAtLevelCap';
import CandidateLeagueRanked from './CandidateLeagueRanked';

const CandidateLeagueContent: FC = () => {
  const { displayMode } = useLeague();

  return (
    <LeagueCandidateRankedSpreadsProvider>
      {displayMode === 'top' ? (
        <CandidateLeagueTopSpreadsAtLevelCap />
      ) : (
        <CandidateLeagueRanked />
      )}
    </LeagueCandidateRankedSpreadsProvider>
  );
};

export default CandidateLeagueContent;
