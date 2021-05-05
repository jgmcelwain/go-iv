import React, { FunctionComponent } from 'react';
import { FireIcon } from '@heroicons/react/solid';

const SHADOW_BONUS = {
  atk: 1 * 1.2,
  def: 1 / 1.2,
};

const CandidateLeagueTableCellShadowStat: FunctionComponent<{
  shadow: boolean;
  value: number;
  stat: 'atk' | 'def';
}> = ({ shadow, value, stat }) => {
  return (
    <span
      className={`flex items-center justify-start${shadow ? '' : ' pr-4'}`}
      title={
        shadow
          ? `Shadow Bonus Applied (${SHADOW_BONUS[stat].toFixed(2)}x)`
          : null
      }
    >
      {(shadow ? value * SHADOW_BONUS[stat] : value).toFixed(2)}

      {shadow && (
        <FireIcon className='w-3 h-3 ml-1 leading-none text-purple-500 transform scale-110' />
      )}
    </span>
  );
};

export default CandidateLeagueTableCellShadowStat;
