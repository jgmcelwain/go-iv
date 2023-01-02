import React, { FC } from 'react';

import { useSettings } from '../hooks/useSettings';
import { formatPercent } from '../utils/formatPercent';

const CandidateLeagueTableCellsPercentOfMax: FC<{
  value: number;
}> = ({ value }) => {
  const { settings } = useSettings();

  if (settings.outputData.percent === false) {
    return null;
  } else {
    return <span className='block text-xs'>{formatPercent(value)}</span>;
  }
};

export default CandidateLeagueTableCellsPercentOfMax;
