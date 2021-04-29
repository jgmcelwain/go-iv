import React, { FunctionComponent } from 'react';

import { useCandidate, CandidateActionTypes } from '../hooks/useCandidate';

import { IVFloor, IV_FLOORS } from '../data/reference';

const CandidateBuilderIVFloor: FunctionComponent = () => {
  const { candidate, dispatch } = useCandidate();

  return (
    <label className='order-4 block mb-2'>
      <span className='text-xs text-gray-400'>IV Floor</span>

      <select
        onChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.Floor,
            payload: parseInt(evt.target.value) as IVFloor,
          })
        }
        value={candidate.floor}
        className='block w-full mt-1 rounded form-select focus-ring ring-offset-gray-900'
      >
        {IV_FLOORS.filter(
          (floor) => floor.value >= (candidate.species.floor ?? 0),
        ).map((floor) => (
          <option key={floor.value} value={floor.value}>
            {floor.value} - {floor.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CandidateBuilderIVFloor;
