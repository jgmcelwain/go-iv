import React, { FunctionComponent } from 'react';

import { useSubject, SubjectActionTypes } from '../hooks/useSubject';

import { IV, IV_RANGE, STATS } from '../data/reference';

const SubjectBuilderIVs: FunctionComponent = () => {
  const { subject, dispatch } = useSubject();

  return (
    <div className='order-3 mr-6 grid grid-cols-3 gap-2'>
      {STATS.map((stat) => (
        <label key={stat.key} className='block mb-2'>
          <span className='text-xs text-gray-400'>{stat.name}</span>

          <select
            onChange={(evt) =>
              dispatch({
                type: SubjectActionTypes.IV,
                payload: {
                  stat: stat.key,
                  value: parseInt(evt.target.value) as IV,
                },
              })
            }
            value={subject.ivs[stat.key]}
            className='block w-full mt-1 rounded form-select focus-ring ring-offset-gray-900'
          >
            {IV_RANGE.filter((iv) => iv >= subject.floor).map((iv) => (
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

export default SubjectBuilderIVs;
