import React, { FunctionComponent } from 'react';
import { version } from '../package.json';

import { useRouter } from 'next/router';

import Link from 'next/link';
import HeaderSettings from './HeaderSettings';

const Header: FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className='w-full mb-2 bg-gray-800 border-b border-gray-700'>
      <div className='container mx-auto px-4 flex justify-between items-center py-3'>
        <div className='font-title flex-grow flex justify-start items-center'>
          <Link
            href={{
              pathname: '/[[...subject]]',
              query: { subject: router.query.subject },
            }}
          >
            <a className='focus-ring ring-offset-gray-800 rounded-full'>
              <img
                src='/logo.png'
                className='w-10 h-10'
                alt='PVPIV.app Logo'
                title='PVPIV.app'
                width='40'
                height='40'
              />
            </a>
          </Link>

          <a
            href='https://github.com/jgmcelwain/pvpiv/releases'
            target='_blank'
            rel='noreferrer'
            className='text-gray-600 hover:text-blue-500 text-sm ml-1 group inline-flex justify-start items-center transition-colors focus-ring ring-offset-gray-800 rounded-sm'
            title='View Releases'
          >
            <span>v{version}</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          </a>
        </div>

        <HeaderSettings />
      </div>
    </div>
  );
};

export default Header;
