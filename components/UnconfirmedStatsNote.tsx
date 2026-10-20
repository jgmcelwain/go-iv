import React, { FC } from 'react';

import { Pokemon } from '../data/pokedex';
import { useLeague } from '../hooks/useLeague';

const UnconfirmedStatsNote: FC<{ species: Pokemon }> = ({ species }) => {
  const { league } = useLeague();

  return (
    <p className='px-4 py-2 text-xs text-gray-600'>
      * {species.name} stats in {league.name} are a best guess. They haven't
      been confirmed in game yet.
    </p>
  );
};

export default UnconfirmedStatsNote;
