import React, { FC } from 'react';

import { useLeague } from '../hooks/useLeague';
import { Provider as LeagueCandidateRankedSpreadsProvider } from '../hooks/useRankedSpreads';

import CandidateLeagueTopSpreadsAtLevelCap from './CandidateLeagueTopSpreadsAtLevelCap';
import CandidateLeagueRanks from './CandidateLeagueRanks';

const CandidateLeagueContent: FC = () => {
  const { displayMode } = useLeague();

  return (
    <LeagueCandidateRankedSpreadsProvider>
      {displayMode === 'top' ? (
        <CandidateLeagueTopSpreadsAtLevelCap />
      ) : (
        <CandidateLeagueRanks />
      )}
    </LeagueCandidateRankedSpreadsProvider>
  );
};

export default CandidateLeagueContent;
