import React, { FunctionComponent, useEffect } from 'react';

import { useCandidate, CandidateActionTypes } from '../hooks/useCandidate';
import { useSettings } from '../hooks/useSettings';

import { Switch } from '@headlessui/react';
import { FireIcon } from '@heroicons/react/solid';

function useSyncCandidateShadowWithDefault() {
  const { settings } = useSettings();
  const { dispatch } = useCandidate();

  useEffect(() => {
    if (settings.showShadowToggle === false) {
      dispatch({ type: CandidateActionTypes.Shadow, payload: false });
    }
  }, [dispatch, settings.showShadowToggle]);
}

const CandidateBuilderShadow: FunctionComponent = () => {
  const { settings } = useSettings();
  const { candidate, dispatch } = useCandidate();

  useSyncCandidateShadowWithDefault();

  return settings.showShadowToggle ? (
    <Switch
      checked={candidate.shadow}
      onChange={() =>
        dispatch({
          type: CandidateActionTypes.Shadow,
          payload: !candidate.shadow,
        })
      }
      className={`${
        candidate.shadow ? 'bg-purple-600' : 'bg-gray-700'
      } relative inline-flex items-center h-8 rounded-full w-14 transition-colors ease-in-out duration-200`}
    >
      <span className='sr-only'>Shadow</span>

      <span
        className={`${
          candidate.shadow
            ? 'translate-x-7 text-purple-500'
            : 'translate-x-1 text-gray-700'
        } inline-flex justify-center items-center w-6 h-6 transform transition-all duration-200 ease-in-out bg-white rounded-full`}
      >
        <FireIcon className='w-4 h-4' />
      </span>
    </Switch>
  ) : (
    <></>
  );
};

export default CandidateBuilderShadow;
