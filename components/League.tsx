import React, { FunctionComponent } from 'react';

import { League } from '../data/reference';

import LeagueHeader from './LeagueHeader';
import LeagueContent from './LeagueContent';

import { Wrapper as LeagueContextWrapper } from './LeagueContext';

const LeagueWrapper: FunctionComponent<{ league: League }> = ({ league }) => {
  return (
    <LeagueContextWrapper league={league}>
      <div className='w-full sm:rounded-lg overflow-hidden'>
        <LeagueHeader />

        <div className='w-full overflow-x-scroll bg-gray-100'>
          <LeagueContent />
        </div>
      </div>
    </LeagueContextWrapper>
  );
};

export default LeagueWrapper;
