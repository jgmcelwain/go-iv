import React, { FunctionComponent, ReactChild } from 'react';

const SettingsContentTabSection: FunctionComponent<{
  description: string;
  children: ReactChild | ReactChild[];
}> = ({ description, children }) => {
  return (
    <div className='w-full mb-6 last:mb-0'>
      <p className='text-sm text-gray-500 mb-1'>{description}</p>

      {children}
    </div>
  );
};

export default SettingsContentTabSection;
