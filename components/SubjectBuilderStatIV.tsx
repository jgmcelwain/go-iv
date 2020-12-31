import React, { FunctionComponent, useContext } from 'react';

import { SubjectContext } from './SubjectContext';
import { SubjectActionTypes } from '../hooks/useSubject';

import { IV, IV_RANGE, Stat, STAT_MAP } from '../data/reference';

const SubjectBuilderStatIV: FunctionComponent<{
  stat: Stat;
}> = ({ stat }) => {
  const { subject, dispatch } = useContext(SubjectContext);

  return (
    <label className='block mb-2'>
      <span className='text-gray-300 text-xs font-semibold'>
        {STAT_MAP[stat]}
      </span>

      <select
        onChange={(evt) =>
          dispatch({
            type: SubjectActionTypes.IV,
            payload: { stat, value: parseInt(evt.target.value) as IV },
          })
        }
        value={subject.iv[stat]}
        className='form-select rounded mt-1 block w-full text-xs'
      >
        {IV_RANGE.filter((iv) => iv >= subject.floor).map((iv) => (
          <option key={iv} value={iv}>
            {iv}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SubjectBuilderStatIV;
