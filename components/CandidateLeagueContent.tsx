import React, { FC } from 'react';

import { useLeague } from '../hooks/useLeague';
import { Provider as LeagueCandidateRankedSpreadsProvider } from '../hooks/useRankedSpreads';

import CandidateLeagueTopSpreadsAtLevelCap from './CandidateLeagueTopSpreadsAtLevelCap';
import CandidateLeagueRanked from './CandidateLeagueRanked';
import { Transition } from '@headlessui/react';

const CandidateLeagueContent: FC = () => {
  const { inspectedLevelCap, collapsed } = useLeague();

  return (
    <LeagueCandidateRankedSpreadsProvider>
      <Transition
        show={collapsed.value === false}
        enter='transition-transform duration-75'
        enterFrom='-translate-y-full'
        enterTo='translate-y-0'
        leave='transition-transform duration-150'
        leaveFrom='translate-y-0'
        leaveTo='-translate-y-full'
        className='bg-gray-100 w-full'
      >
        {inspectedLevelCap !== null ? (
          <CandidateLeagueTopSpreadsAtLevelCap />
        ) : (
          <CandidateLeagueRanked />
        )}
      </Transition>
    </LeagueCandidateRankedSpreadsProvider>
  );
};

export default CandidateLeagueContent;
