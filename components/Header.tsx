import React, { FunctionComponent } from 'react';

import HeaderSettings from './HeaderSettings';

const Header: FunctionComponent = () => {
  return (
    <div className='w-full mb-2 bg-gray-800'>
      <div className='container mx-auto px-4 flex justify-between items-center '>
        <h1 className='font-title text-gray-200 text-xl py-4'>pvpiv.app</h1>

        <HeaderSettings />
      </div>
    </div>
  );
};

export default Header;
