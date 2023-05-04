import React, { FC, ReactNode } from 'react';

const SettingsSection: FC<{
  id: string;
  title: string;
  children: ReactNode;
}> = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className='w-full px-4 py-6 mb-12 rounded-lg md:bg-white  md:dark:bg-gray-800 md:px-6 md:mb-0 md:shadow-md md:shadow-gray-100 md:dark:shadow-xl md:dark:shadow-gray-900'
    >
      <div className='mb-6'>
        <h3 className='text-2xl leading-none text-left text-gray-900 dark:text-white font-title'>
          {title}
        </h3>
      </div>

      <div className='divide-y divide-gray-100 dark:divide-gray-700'>
        {children}
      </div>
    </section>
  );
};

export default SettingsSection;
