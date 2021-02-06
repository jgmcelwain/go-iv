import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => (
  <div className='w-full my-8 pt-8 px-4 border-t border-gray-800'>
    <p className='text-center text-xs text-gray-400 mb-2'>
      Pokémon are copyright of The Pokémon Company and Nintendo. All data used
      in this application is for educational purposes only.
    </p>

    <p className='text-center text-xs text-gray-400'>
      PVPIV.app is open source on GitHub -{' '}
      <a
        href='https://github.com/jgmcelwain/pvpiv'
        rel='noreferrer'
        target='_blank'
        className='text-blue-400 hover:underline focus-ring ring-offset-gray-900 rounded-sm'
      >
        jgmcelwain/pvpiv
      </a>
    </p>
  </div>
);

export default Footer;
