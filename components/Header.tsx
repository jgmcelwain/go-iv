import React, { FunctionComponent } from 'react';
import { version } from '../package.json';

import HeaderSettings from './HeaderSettings';

const Header: FunctionComponent = () => {
  return (
    <div className='w-full mb-2 bg-gray-800'>
      <div className='container mx-auto px-4 flex justify-between items-center py-4'>
        <div className='font-title flex-grow flex justify-start items-center'>
          <h1 className='text-gray-200 text-xl'>pvpiv.app</h1>
          <span className='text-gray-600 text-sm ml-1 transform translate-y-0.5'>
            v{version}
          </span>
        </div>

        <HeaderSettings />
      </div>
    </div>
  );
};

export default Header;
