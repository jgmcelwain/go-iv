import React, { FC } from 'react';
import { useRouter } from 'next/router';

import pkg from '../package.json';

import Link from 'next/link';
import { ArrowSmLeftIcon, CogIcon } from '@heroicons/react/solid';

const AppNavigation: FC = () => {
  const router = useRouter();

  return (
    <header className='fixed top-0 inset-x-0 z-20 w-full h-16 overflow-hidden flex items-center justify-center bg-gray-800 border-gray-700 shadow-xl'>
      <section className='w-full max-w-8xl flex items-center justify-between px-4 md:px-8 py-4'>
        <div className='flex justify-start items-center space-x-2'>
          <a className='rounded-full focus-visible-ring ring-offset-gray-800'>
            <img
              src='/logo.png'
              className='w-8 h-8'
              alt='PVPIV.app Logo'
              title='PVPIV.app'
              width={48}
              height={48}
            />
          </a>

          <a
            href='https://github.com/jgmcelwain/pvpiv/blob/main/CHANGELOG.md'
            target='_blank'
            rel='noreferrer'
            className='text-gray-400 text-xs focus-visible-ring ring-offset-gray-800 rounded'
          >
            v{pkg.version}
          </a>
        </div>

        {router.pathname === '/settings' ? (
          <Link
            href={{
              pathname: '/',
            }}
          >
            <a className='rounded-full focus-visible-ring ring-offset-gray-800 p-1'>
              <ArrowSmLeftIcon className='w-5 h-5 text-gray-300' aria-hidden />

              <span className='sr-only'>Home</span>
            </a>
          </Link>
        ) : (
          <Link
            href={{
              pathname: '/settings',
            }}
          >
            <a className='rounded-full focus-visible-ring ring-offset-gray-800 p-1'>
              <CogIcon className='w-5 h-5 text-gray-300' aria-hidden />

              <span className='sr-only'>Settings</span>
            </a>
          </Link>
        )}
      </section>
    </header>
  );
};

export default AppNavigation;
