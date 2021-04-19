import React, { FunctionComponent } from 'react';

import { useSubject, SubjectActionTypes } from '../hooks/useSubject';

import { IVFloor, IV_FLOORS } from '../data/reference';

const SubjectBuilderIVFloor: FunctionComponent = () => {
  const { subject, dispatch } = useSubject();

  return (
    <label className='order-4 block mb-2'>
      <span className='text-xs text-gray-400'>IV Floor</span>

      <select
        onChange={(evt) =>
          dispatch({
            type: SubjectActionTypes.Floor,
            payload: parseInt(evt.target.value) as IVFloor,
          })
        }
        value={subject.floor}
        className='block w-full mt-1 rounded form-select focus-ring ring-offset-gray-900'
      >
        {IV_FLOORS.filter(
          (floor) => floor.value >= (subject.species.floor ?? 0),
        ).map((floor) => (
          <option key={floor.value} value={floor.value}>
            {floor.value} - {floor.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SubjectBuilderIVFloor;
