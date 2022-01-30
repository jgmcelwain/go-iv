import React, { FC } from 'react';

import { useCandidate } from '../hooks/useCandidate';

const CandidateDisclaimer: FC = () => {
  const { candidate } = useCandidate();

  if (
    candidate.species.id === 'electrode_hisuian_kcopy' ||
    candidate.species.id === 'electrode_hisuian_fixed'
  ) {
    return (
      <div className='w-full px-4 mb-4 -mt-3 text-sm text-left text-gray-400 sm:px-0'>
        Note: It is currently unknown whether Hisuian Electrode will use the
        same stats as its Kanto counterpart or updated stats. You can read more
        in{' '}
        <a
          href='https://www.reddit.com/r/TheSilphArena/comments/sg2elh/anyones_figured_out_helectrodes_rank_1_ivs_yet/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 hover:underline'
        >
          this Reddit post
        </a>
        .
      </div>
    );
  } else {
    return null;
  }
};

export default CandidateDisclaimer;
