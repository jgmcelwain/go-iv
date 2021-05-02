import React, { FunctionComponent } from 'react';

const AppFooter: FunctionComponent = () => (
  <div className='container px-4 pt-12 pb-8 mx-auto mt-12 border-t border-gray-800'>
    <p className='mb-2 text-xs text-center text-gray-400'>
      Pokémon are copyright of The Pokémon Company and Nintendo. All data used
      in this application is for educational purposes only.
    </p>

    <p className='text-xs text-center text-gray-400'>
      PVPIV.app is open source on GitHub -{' '}
      <a
        href='https://github.com/jgmcelwain/pvpiv'
        rel='noreferrer'
        target='_blank'
        className='text-blue-400 rounded-sm hover:underline focus-ring ring-offset-gray-900'
      >
        jgmcelwain/pvpiv
      </a>
    </p>
  </div>
);

export default AppFooter;
