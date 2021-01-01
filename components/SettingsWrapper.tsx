import React, { FunctionComponent, ReactChild } from 'react';
import SettingsEditorDone from './SettingsEditorDone';

import { Transition } from '@headlessui/react';

const SettingsWrapper: FunctionComponent<{
  onClose: () => void;
  shown: boolean;
  children: ReactChild | ReactChild[];
}> = ({ onClose, shown, children }) => {
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        shown ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className='flex items-center justify-center min-h-screen p-4 text-center'>
        <Transition
          show={shown}
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
                onClick={onClose}
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
          show={shown}
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
              className='inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-w-lg w-full'
              role='dialog'
              aria-modal='true'
              aria-labelledby='modal-headline'
            >
              {children}

              <SettingsEditorDone onExit={onClose} />
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default SettingsWrapper;
