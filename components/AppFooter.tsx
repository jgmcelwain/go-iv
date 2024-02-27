import React, { FC } from 'react';

const AppFooter: FC = () => (
  <footer className='container px-4 pt-12 pb-8 mx-auto mt-12 border-t border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-xs text-center space-y-2'>
    <p>
      Pokémon are copyright of The Pokémon Company and Nintendo. All data used
      in this application is for educational purposes only.
    </p>

    <p>
      GOIV.app is open source on GitHub -{' '}
      <a
        href='https://github.com/jgmcelwain/goiv'
        rel='noreferrer'
        target='_blank'
        className='text-blue-500 dark:text-blue-400 rounded-sm hover:underline focus-visible-ring ring-offset-gray-50 dark:ring-offset-gray-900'
      >
        jgmcelwain/goiv
      </a>
    </p>
  </footer>
);

export default AppFooter;
