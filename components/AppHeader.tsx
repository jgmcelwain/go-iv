import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
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
import MegaEvolutionIcon from './MegaEvolutionIcon';

export const MegaLinkContext = createContext<{
  megaPath: string | null;
  setMegaPath: (path: string | null) => void;
}>({ megaPath: null, setMegaPath: () => undefined });

export const useMegaLink = () => useContext(MegaLinkContext);
export const useMegaLinkState = () => {
  const [megaPath, setMegaPath] = useState<string | null>(null);
  return { megaPath, setMegaPath };
};

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
  const { megaPath } = useMegaLink();
  const onMegaPage = router.pathname.startsWith('/mega');

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

        {onMegaPage ? (
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
        )}

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

        {!onMegaPage && (
          <Link
            href={megaPath ?? '/mega'}
            title={
              megaPath
                ? 'Compare Great and Ultra League ranks'
                : 'Mega & Primal PvP IVs'
            }
            className='relative rounded-full focus-visible-ring ring-offset-gray-100 dark:ring-offset-gray-800 p-1'
          >
            {megaPath && (
              <span
                aria-hidden
                className='absolute inset-0 rounded-full bg-blue-400/50 animate-ping [animation-iteration-count:3] motion-reduce:hidden'
              />
            )}
            <MegaEvolutionIcon
              className={`relative w-5 h-5 ${
                megaPath
                  ? 'text-blue-500 dark:text-blue-300'
                  : 'text-gray-500 dark:text-gray-300'
              }`}
            />

            <span className='sr-only'>
              {megaPath
                ? 'Compare Great and Ultra League ranks'
                : 'Mega & Primal PvP IVs'}
            </span>
          </Link>
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
