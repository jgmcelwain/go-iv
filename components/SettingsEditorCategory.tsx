import React, { FunctionComponent, ReactChild } from 'react';

const SettingsEditorCategory: FunctionComponent<{
  title: string;
  description?: string;
  children: ReactChild | ReactChild[];
}> = ({ title, description, children }) => {
  return (
    <div className='w-full mb-6'>
      <h3 className='text-lg leading-6 font-medium text-gray-900'>{title}</h3>

      {description && (
        <p className='text-sm text-gray-500 mb-2'>{description}</p>
      )}

      {children}
    </div>
  );
};

export default SettingsEditorCategory;
