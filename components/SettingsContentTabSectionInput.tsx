import React, { FunctionComponent } from 'react';

const SettingsContentTabSectionInput: FunctionComponent<{
  label: string;
  value: boolean;
  onInput: (value: boolean) => void;
}> = ({ label, value, onInput }) => {
  return (
    <label className='flex justify-start items-center mb-1'>
      <input
        onChange={(evt) => onInput(evt.target.checked)}
        type='checkbox'
        className='form-checkbox rounded bg-gray-200 focus-ring'
        checked={value}
      />
      <span className='ml-2 text-sm cursor-pointer'>{label}</span>
    </label>
  );
};

export default SettingsContentTabSectionInput;
