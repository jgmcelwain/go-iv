import React, { FC, useEffect } from 'react';

import { useCandidate, CandidateActionTypes } from '../hooks/useCandidate';
import { useSettings } from '../hooks/useSettings';

function useSyncCandidateMinimumLevelWithDefault() {
  const { settings } = useSettings();
  const { dispatch } = useCandidate();

  useEffect(() => {
    if (settings.showMinimumLevel === false) {
      dispatch({
        type: CandidateActionTypes.MinimumLevel,
        payload: 1,
      });
    }
  }, [dispatch, settings.showMinimumLevel]);
}

const CandidateBuilderMinimumLevel: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();

  useSyncCandidateMinimumLevelWithDefault();

  return settings.showMinimumLevel ? (
    <label className='block mb-2 mr-6'>
      <span className='text-xs text-gray-500 dark:text-gray-400'>
        Minimum Level
      </span>

      <select
        onChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.MinimumLevel,
            payload: Number(evt.target.value),
          })
        }
        value={candidate.minimumLevel}
        className='block w-full mt-1 mr-6 rounded form-select focus-ring ring-offset-gray-50 dark:ring-offset-gray-900'
      >
        <option value={1}>1</option>
        <option value={15}>15 - Research</option>
        <option value={20}>20 - Raid</option>
        <option value={25}>25 - Purified</option>

        <option disabled>---</option>

        {Array.from({ length: 100 }).map((_, i) => (
          <option key={i} value={(i + 1) / 2 + 0.5}>
            {(i + 1) / 2 + 0.5}
          </option>
        ))}
      </select>
    </label>
  ) : (
    <></>
  );
};

export default CandidateBuilderMinimumLevel;
