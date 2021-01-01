import React, { FunctionComponent } from 'react';

const SettingsEditorInput: FunctionComponent<{
  label: string;
  value: boolean;
  onInput: (value: boolean) => void;
}> = ({ label, value, onInput }) => {
  return (
    <div>
      <label className='inline-flex items-center'>
        <input
          onChange={(evt) => onInput(evt.target.checked)}
          type='checkbox'
          className='form-checkbox rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          checked={value}
        />
        <span className='ml-2 text-sm cursor-pointer'>{label}</span>
      </label>
    </div>
  );
};

export default SettingsEditorInput;
