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

        <LeagueContent />
      </div>
    </LeagueContextWrapper>
  );
};

export default LeagueWrapper;
