import React, { FunctionComponent } from 'react';

import { useSettingsShown } from '../hooks/useSettingsShown';
import { Provider as SettingsNavigationProvider } from '../hooks/useSettingsNavigation';

import { Transition } from '@headlessui/react';
import SettingsNavigation from './SettingsNavigation';
import SettingsContent from './SettingsContent';

const Settings: FunctionComponent = () => {
  const { isShown, hide } = useSettingsShown();

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isShown ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className='flex items-center justify-center min-h-screen px-4 text-center'>
        <Transition
          show={isShown}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          {(ref) => (
            <div
              ref={ref}
              className='fixed inset-0 transition-opacity'
              aria-hidden='true'
            >
              <div
                onClick={hide}
                className='absolute inset-0 bg-gray-900 opacity-90'
              ></div>
            </div>
          )}
        </Transition>

        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>

        <Transition
          show={isShown}
          enter='ease-out duration-300'
          enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          enterTo='opacity-100 translate-y-0 sm:scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 translate-y-0 sm:scale-100'
          leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
        >
          {(ref) => (
            <div
              ref={ref}
              className='inline-block bg-white my-4 rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-w-lg w-full'
              role='dialog'
              aria-modal='true'
              aria-labelledby='modal-headline'
            >
              <SettingsNavigationProvider>
                <SettingsNavigation />

                <SettingsContent />
              </SettingsNavigationProvider>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default Settings;
