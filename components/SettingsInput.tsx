import React, { FunctionComponent } from 'react';

import { Switch } from '@headlessui/react';

const SettingsContentTabSectionInput: FunctionComponent<{
  label: string;
  description: string;
  value: boolean;
  onInput: (value: boolean) => void;
}> = ({
  label,
  description = 'Lorem ipsum dolor sit amet',
  value,
  onInput,
}) => {
  return (
    <Switch.Group>
      <div className='flex items-center justify-between pb-5 mb-5 border-b border-gray-700 last:border-none last:pb-0 last:mb-0'>
        <Switch.Label className='flex-grow pr-4 cursor-pointer select-none'>
          <p className='font-semibold leading-normal text-white'>{label}</p>

          <p className='text-sm text-gray-400'>{description}</p>
        </Switch.Label>

        <Switch
          checked={value}
          onChange={onInput}
          className={`${value ? 'bg-green-500' : 'bg-gray-700'}
      relative inline-flex flex-shrink-0 h-6 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden='true'
            className={`${value ? 'translate-x-4' : 'translate-x-0'}
        pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default SettingsContentTabSectionInput;
