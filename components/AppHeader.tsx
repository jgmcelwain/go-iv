import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import pkg from '../package.json';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowSmLeftIcon,
  CogIcon,
  MoonIcon,
  SunIcon,
  ViewGridIcon,
  ViewListIcon,
} from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { SettingsActionTypes, useSettings } from '../hooks/useSettings';

function useIsMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

const AppHeader: FC = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { settings, dispatch } = useSettings();

  const mounted = useIsMounted();

  return (
    <header className='relative w-full z-20 overflow-hidden dark:bg-gray-800 bg-white border-b border-gray-100 dark:border-gray-700'>
      <div className='w-full max-w-8xl flex items-center justify-between space-x-1 px-4 md:px-8 py-3 mx-auto'>
        <div className='grow flex justify-start items-center space-x-2'>
          <Image
            src='/logo.png'
            alt='GOIV Logo'
            title='GOIV.app'
            width={36}
            height={36}
          />

          <a
            href='https://github.com/jgmcelwain/go-iv/blob/main/CHANGELOG.md'
            target='_blank'
            rel='noreferrer'
            className='text-gray-500 dark:text-gray-400 text-xs focus-visible-ring ring-offset-gray-100 dark:ring-offset-gray-800 rounded'
          >
            v{pkg.version}
          </a>
        </div>

        <button
          onClick={() =>
            dispatch({
              type: SettingsActionTypes.Layout,
              payload: settings.layout === 'grid' ? 'list' : 'grid',
            })
          }
          className='hidden lg:block rounded-full focus-visible-ring ring-offset-gray-100 dark:ring-offset-gray-800 p-1'
        >
          {settings.layout === 'grid' ? (
            <>
              <ViewGridIcon className='w-5 h-5 text-gray-500 dark:text-gray-300' />
              <span className='sr-only'>Switch to Single-Column Display</span>
            </>
          ) : (
            <>
              <ViewListIcon className='w-5 h-5 text-gray-500 dark:text-gray-300' />
              <span className='sr-only'>Switch to Grid Display</span>
            </>
          )}
        </button>

        {mounted ? (
          <button
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            className='rounded-full focus-visible-ring ring-offset-gray-100 dark:ring-offset-gray-800 p-1'
          >
            {theme === 'dark' ? (
              <>
                <MoonIcon className='w-5 h-5 text-gray-500 dark:text-gray-300' />
                <span className='sr-only'>Switch to Light Mode</span>
              </>
            ) : (
              <>
                <SunIcon className='w-5 h-5 text-gray-500 dark:text-gray-300' />
                <span className='sr-only'>Switch to Dark Mode</span>
              </>
            )}
          </button>
        ) : (
          <div aria-hidden className='p-1'>
            <MoonIcon className='w-5 h-5 text-gray-500 dark:text-gray-300' />
          </div>
        )}

        {router.pathname === '/settings' ? (
          <Link
            href='/'
            className='rounded-full focus-visible-ring ring-offset-gray-100 dark:ring-offset-gray-800 p-1'
          >
            <ArrowSmLeftIcon
              className='w-5 h-5 text-gray-500 dark:text-gray-300'
              aria-hidden
            />

            <span className='sr-only'>Home</span>
          </Link>
        ) : (
          <Link
            href='/settings'
            className='rounded-full focus-visible-ring ring-offset-gray-100 dark:ring-offset-gray-800 p-1'
          >
            <CogIcon
              className='w-5 h-5 text-gray-500 dark:text-gray-300'
              aria-hidden
            />

            <span className='sr-only'>Settings</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
