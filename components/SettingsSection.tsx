import React, { FunctionComponent, ReactChild } from 'react';

const SettingsSection: FunctionComponent<{
  id: string;
  title: string;
  description?: string;
  children: ReactChild | ReactChild[];
}> = ({ id, description = null, title, children }) => {
  return (
    <section
      id={id}
      className='w-full px-4 py-6 mb-12 rounded-lg md:bg-gray-800 md:px-6 md:mb-0 md:shadow-xl'
    >
      <div className='mb-6 md:mb-8'>
        <h3 className='text-2xl leading-none text-left text-white font-title'>
          {title}
        </h3>

        {description && (
          <p className='mt-2 text-sm text-gray-300'>{description}</p>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
};

export default SettingsSection;
