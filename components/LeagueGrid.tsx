import React, { FunctionComponent, useContext } from 'react';

import { LEAGUES } from '../data/reference';

import { Context as SettingsContext } from './SettingsContext';
import League from './League';

const LeagueGrid: FunctionComponent = () => {
  const { settings } = useContext(SettingsContext);

  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
      {LEAGUES.filter((league) => settings.leagues[league.key] === true).map(
        (league) => (
          <League key={league.key} league={league} />
        ),
      )}
    </div>
  );
};

export default LeagueGrid;
