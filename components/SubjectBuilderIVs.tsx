import React, { FunctionComponent } from 'react';

import { useSubject, SubjectActionTypes } from '../hooks/useSubject';

import { IV, IV_RANGE, STATS } from '../data/reference';

const SubjectBuilderIVs: FunctionComponent = () => {
  const { subject, dispatch } = useSubject();

  return (
    <div className='order-3 grid grid-cols-3 gap-2 mr-6'>
      {STATS.map((stat) => (
        <label key={stat.key} className='block mb-2'>
          <span className='text-gray-400 text-xs'>{stat.name}</span>

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
            className='form-select rounded mt-1 block w-full focus:ring-2 ring-offset-2 ring-offset-gray-900 ring-blue-600'
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
