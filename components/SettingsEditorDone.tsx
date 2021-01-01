import React, { FunctionComponent } from 'react';

const SettingsEditorDone: FunctionComponent<{ onExit: () => void }> = ({
  onExit,
}) => (
  <div className='border-t border-gray-200 bg-gray-50 p-3 flex justify-center'>
    <button
      onClick={onExit}
      type='button'
      className='w-24 inline-flex justify-center items-center rounded-md border border-transparent shadow-sm p-2 bg-blue-500 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
    >
      <span className='text-sm'>Done</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        className='w-4 h-4 ml-2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 13l4 4L19 7'
        />
      </svg>
    </button>
  </div>
);

export default SettingsEditorDone;
