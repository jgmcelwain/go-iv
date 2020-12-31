import React, { FunctionComponent, useContext } from 'react';

import { SubjectContext } from './SubjectContext';
import { SubjectActionTypes } from '../hooks/useSubject';

import { IVFloor, IV_FLOORS } from '../data/reference';

const SubjectBuilderIVFloor: FunctionComponent = () => {
  const { subject, dispatch } = useContext(SubjectContext);

  return (
    <label className='block mb-2'>
      <span className='text-gray-200 text-sm'>IV Floor</span>

      <select
        onChange={(evt) =>
          dispatch({
            type: SubjectActionTypes.Floor,
            payload: parseInt(evt.target.value) as IVFloor,
          })
        }
        value={subject.floor}
        className='form-select rounded mt-1 block w-full'
      >
        {IV_FLOORS.map((floor) => (
          <option key={floor.value} value={floor.value}>
            {floor.value} - {floor.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SubjectBuilderIVFloor;
