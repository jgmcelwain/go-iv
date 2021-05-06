import React, { FunctionComponent } from 'react';

import { useSettings } from '../hooks/useSettings';
import { formatPercent } from '../utils/formatPercent';

const CandidateLeagueTableCellsPercentOfMax: FunctionComponent<{
  value: number;
}> = ({ value }) => {
  const { settings } = useSettings();

  if (settings.outputData.percent === false) {
    return null;
  } else {
    return (
      <span className='block text-xs opacity-90'>{formatPercent(value)}</span>
    );
  }
};

export default CandidateLeagueTableCellsPercentOfMax;
