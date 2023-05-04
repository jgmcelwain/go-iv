import React, { FC } from 'react';

import { useCandidate, CandidateActionTypes } from '../hooks/useCandidate';

import { IVFloor, IV_FLOORS } from '../data/ivFloor';
import { useSettings } from '../hooks/useSettings';

const CandidateBuilderIVFloor: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();

  return (
    <label className='block mb-2 mr-6'>
      <span className='text-xs text-gray-500 dark:text-gray-400'>IV Floor</span>

      <select
        onChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.Floor,
            payload: parseInt(evt.target.value) as IVFloor,
          })
        }
        value={candidate.floor}
        className='block w-full mt-1 rounded form-select focus-ring ring-offset-gray-50 dark:ring-offset-gray-900'
      >
        {IV_FLOORS.filter((floor) => {
          if (settings.allowImpossibleFloors) {
            return true;
          } else {
            return floor.value >= (candidate.species.floor ?? 0);
          }
        }).map((floor) => (
          <option key={floor.value} value={floor.value}>
            {floor.value} - {floor.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CandidateBuilderIVFloor;
