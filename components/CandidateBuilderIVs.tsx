import React, { FC } from 'react';

import { useCandidate, CandidateActionTypes } from '../hooks/useCandidate';

import { IV, IV_RANGE } from '../data/iv';
import { STATS } from '../data/stat';

const CandidateBuilderIVs: FC = () => {
  const { candidate, dispatch } = useCandidate();

  return (
    <div className='grid order-3 grid-cols-3 gap-2 mr-6 md:order-2'>
      {STATS.map((stat) => (
        <label key={stat.key} className='block mb-2'>
          <span className='text-xs text-gray-400'>{stat.name} IV</span>

          <select
            onChange={(evt) =>
              dispatch({
                type: CandidateActionTypes.IV,
                payload: {
                  stat: stat.key,
                  value: parseInt(evt.target.value) as IV,
                },
              })
            }
            value={candidate.ivs[stat.key]}
            className='block w-full mt-1 rounded form-select focus-ring ring-offset-gray-900'
          >
            {IV_RANGE.filter((iv) => iv >= candidate.floor).map((iv) => (
              <option key={iv} value={iv}>
                {iv}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
};

export default CandidateBuilderIVs;
