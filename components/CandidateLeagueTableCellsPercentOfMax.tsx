import React, { FC } from 'react';

import { useSettings } from '../hooks/useSettings';
import { formatValue } from '../utils/formatValue';

const CandidateLeagueTableCellsPercentOfMax: FC<{
  value: number;
}> = ({ value }) => {
  const { settings } = useSettings();

  if (settings.outputData.percent === false) {
    return null;
  } else {
    return (
      <span className='block text-xs'>
        {formatValue(value, value === 1 ? undefined : 2, {
          style: 'percent',
        })}
      </span>
    );
  }
};

export default CandidateLeagueTableCellsPercentOfMax;
