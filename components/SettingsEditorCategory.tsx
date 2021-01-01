import React, { FunctionComponent, ReactChild } from 'react';

const SettingsEditorCategory: FunctionComponent<{
  title: string;
  children: ReactChild | ReactChild[];
}> = ({ title, children }) => {
  return (
    <div className='w-full mb-8'>
      <h3 className='text-lg leading-6 font-medium text-gray-900'>{title}</h3>

      {children}
    </div>
  );
};

export default SettingsEditorCategory;
