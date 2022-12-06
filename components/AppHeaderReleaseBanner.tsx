import React, { FC } from 'react';

import { XIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useReleaseBannerDisplayed } from '../hooks/useReleaseBannerDisplayed';

const AppHeaderReleaseBanner: FC = () => {
  const { isDisplayed, dismiss } = useReleaseBannerDisplayed();

  if (!isDisplayed) return null;

  return (
    <div className='relative bg-emerald-600'>
      <div className='mx-auto max-w-8xl py-3 px-4 md:px-8'>
        <div className='pr-16 sm:px-16 sm:text-center'>
          <p className='font-medium text-white text-xs'>
            <span className='font-bold'>New!</span> Gen 9 evolutions of existing
            Pokémon hav been added under the "Speculative Pokémon" flag.
            <span className='block mt-2 sm:mt-0 sm:ml-2 sm:inline-block'>
              <Link
                href={{
                  pathname: '/settings',
                }}
                passHref
              >
                <a
                  href='passHref_replaces_this'
                  onClick={() => {
                    setTimeout(dismiss, 0);
                  }}
                  className='font-bold text-white underline'
                >
                  Go to Settings
                  <span aria-hidden> &rarr;</span>
                </a>
              </Link>
            </span>
          </p>
        </div>
        <div className='absolute inset-y-0 right-0 flex items-center pr-4 md:pr-8'>
          <button
            onClick={dismiss}
            type='button'
            className='flex rounded-md p-1 hover:bg-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-white'
          >
            <span className='sr-only'>Dismiss</span>
            <XIcon className='h-4 w-4 text-white' aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppHeaderReleaseBanner;
