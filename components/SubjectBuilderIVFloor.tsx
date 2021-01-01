import React, { FunctionComponent, useContext } from 'react';

import { Context as SubjectContext } from './SubjectContext';
import { SubjectActionTypes } from '../hooks/useSubject';

import { IVFloor, IV_FLOORS } from '../data/reference';

const SubjectBuilderIVFloor: FunctionComponent = () => {
  const { subject, dispatch } = useContext(SubjectContext);

  return (
    <label className='block mb-2'>
      <span className='text-gray-300 text-xs'>IV Floor</span>

      <select
        onChange={(evt) =>
          dispatch({
            type: SubjectActionTypes.Floor,
            payload: parseInt(evt.target.value) as IVFloor,
          })
        }
        value={subject.floor}
        className='form-select rounded mt-1 block w-full focus:ring-4 ring-blue-600'
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
