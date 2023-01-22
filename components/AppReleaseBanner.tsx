import React, { FC, useCallback, useState } from 'react';
import { RELEASE_BANNER_VERSION_HIDDEN_COOKIE } from '../data/constants';

import { XIcon } from '@heroicons/react/solid';
import { setCookie } from 'nookies';

function useDismissBanner(version: number) {
  const [dismissed, setDismissed] = useState(false);

  const dismiss = useCallback(() => {
    setDismissed(true);

    setCookie(
      {},
      RELEASE_BANNER_VERSION_HIDDEN_COOKIE,
      JSON.stringify(version),
      {
        path: '/',
        maxAge: 30 * 24 * 60 * 60,
      },
    );
  }, [version]);

  return [dismissed, dismiss] as const;
}

const AppReleaseBanner: FC<{
  content: string;
  version: number;
  shown: boolean;
}> = ({ content, version, shown }) => {
  const [dismissed, dismiss] = useDismissBanner(version);

  if (dismissed || shown === false) return null;

  return (
    <div className='z-20 relative bg-emerald-600'>
      <div className='mx-auto max-w-8xl py-3 px-4 md:px-8'>
        <div className='pr-16 sm:px-16 sm:text-center'>
          <p className='font-medium text-white text-xs'>
            <span className='font-bold'>New!</span> {content}
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

export default AppReleaseBanner;
