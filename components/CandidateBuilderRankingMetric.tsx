import React, { FC, useEffect } from 'react';

import { useCandidate, CandidateActionTypes } from '../hooks/useCandidate';
import { useSettings } from '../hooks/useSettings';

import { RankableMetric, RANKABLE_METRICS } from '../data/stat';

function useSyncCandidateRankingMetricWithDefault() {
  const { settings } = useSettings();
  const { dispatch } = useCandidate();

  useEffect(() => {
    if (settings.showRankingMetric === false) {
      dispatch({
        type: CandidateActionTypes.RankingMetric,
        payload: 'product',
      });
    }
  }, [dispatch, settings.showRankingMetric]);
}

const CandidateBuilderRankingMetric: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();

  useSyncCandidateRankingMetricWithDefault();

  return settings.showRankingMetric ? (
    <label className='block mb-2 mr-6'>
      <span className='text-xs text-gray-500 dark:text-gray-400'>Rank By</span>

      <select
        onChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.RankingMetric,
            payload: evt.target.value as RankableMetric,
          })
        }
        value={candidate.rankingMetric}
        className='block w-full mt-1 mr-6 rounded form-select focus-ring ring-offset-gray-50 dark:ring-offset-gray-900'
      >
        {RANKABLE_METRICS.map((rankableMetric) => (
          <option key={rankableMetric.key} value={rankableMetric.key}>
            {rankableMetric.name}
          </option>
        ))}
      </select>
    </label>
  ) : (
    <></>
  );
};

export default CandidateBuilderRankingMetric;
