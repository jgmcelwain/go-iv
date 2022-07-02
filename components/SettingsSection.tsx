import React, { FC, ReactNode } from 'react';

const SettingsSection: FC<{
  id: string;
  title: string;
  children: ReactNode;
}> = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className='w-full px-4 py-6 mb-12 rounded-lg md:bg-gray-800 md:px-6 md:mb-0 md:shadow-xl'
    >
      <div className='mb-6 md:mb-8'>
        <h3 className='text-2xl leading-none text-left text-white font-title'>
          {title}
        </h3>
      </div>

      <div className='divide-y divide-gray-700'>{children}</div>
    </section>
  );
};

export default SettingsSection;
