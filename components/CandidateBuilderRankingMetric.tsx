import React, { FC } from 'react';

import { useCandidate, CandidateActionTypes } from '../hooks/useCandidate';

import { RankableMetric, RANKABLE_METRICS } from '../data/stat';

const CandidateBuilderRankingMetric: FC = () => {
  const { candidate, dispatch } = useCandidate();

  return (
    <label className='order-4 block mb-2 mr-6 md:order-5'>
      <span className='text-xs text-gray-400'>Ranking Metric</span>

      <select
        onChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.RankingMetric,
            payload: evt.target.value as RankableMetric,
          })
        }
        value={candidate.rankingMetric}
        className='block w-full mt-1 mr-6 rounded form-select focus-ring ring-offset-gray-900'
      >
        {RANKABLE_METRICS.map((rankableMetric) => (
          <option key={rankableMetric.key} value={rankableMetric.key}>
            {rankableMetric.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CandidateBuilderRankingMetric;
