import React, { FunctionComponent, useEffect, useState } from 'react';

import pkg from '../package.json';

import { useRouter } from 'next/router';

import Link from 'next/link';
import AppNavigationLinks from './AppNavigationLinks';
import { MenuIcon } from '@heroicons/react/solid';

function useMenuShown(): [boolean, () => void] {
  const router = useRouter();
  const [menuShown, setMenuShown] = useState(false);
  function hideMenu() {
    setMenuShown(false);
  }

  useEffect(() => {
    hideMenu();
  }, [router.pathname]);

  useEffect(() => {
    if (menuShown) {
      window.addEventListener('click', hideMenu, { passive: true });

      return () => {
        window.removeEventListener('click', hideMenu);
      };
    }
  }, [menuShown]);

  function toggleMenu() {
    setMenuShown(!menuShown);
  }

  return [menuShown, toggleMenu];
}

const AppNavigation: FunctionComponent = () => {
  const [menuShown, toggleMenu] = useMenuShown();

  return (
    <aside
      className={`fixed top-0 left-0 z-20 flex flex-col items-center justify-between w-full px-3 py-4 overflow-hidden bg-gray-800 border-gray-700 shadow-xl md:border-r md:h-screen md:overflow-scroll md:px-2 md:w-64 md:shadow-none ${
        menuShown === false ? 'h-16' : 'h-auto'
      }`}
    >
      <div className='flex items-center justify-between w-full px-1 md:justify-center md:px-0'>
        <Link
          href={{
            pathname: '/',
          }}
        >
          <a className='rounded-full focus-visible-ring ring-offset-gray-800'>
            <img
              src='/logo.png'
              className='w-8 h-8 md:w-12 md:h-12'
              alt='PVPIV.app Logo'
              title='PVPIV.app'
              width={48}
              height={48}
            />
          </a>
        </Link>

        <button
          onClick={() => toggleMenu()}
          className='flex items-center justify-center w-8 h-8 rounded focus-visible-ring ring-offset-gray-800 md:hidden'
        >
          <MenuIcon className='w-5 h-5 text-gray-300' />
        </button>
      </div>

      <div
        className={`w-full flex-col items-stretch justify-start flex-grow ${
          menuShown === false ? 'hidden' : 'block'
        } md:flex mt-4 md:mt-6`}
      >
        <AppNavigationLinks />

        <div className='mt-4 text-sm font-semibold text-right md:text-center'>
          <a
            href='https://github.com/jgmcelwain/pvpiv/releases'
            target='_blank'
            rel='noreferrer'
            className='text-gray-400 transition-colors hover:text-gray-300'
          >
            v{pkg.version}
          </a>
        </div>
      </div>
    </aside>
  );
};

export default AppNavigation;
