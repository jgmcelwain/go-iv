import React, { FunctionComponent, useMemo } from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';
import {
  CalculatorIcon,
  BookOpenIcon,
  DatabaseIcon,
  CogIcon,
} from '@heroicons/react/solid';

type Page = {
  icon: JSX.Element;
  name: string;
  pathname: string;
  enabled: boolean;
};

const PAGES: Page[] = [
  {
    name: 'Rank Checker',
    pathname: '/[[...candidate]]',
    enabled: true,
    icon: <CalculatorIcon className='w-full h-full' />,
  },
  {
    name: 'Settings',
    pathname: '/settings',
    enabled: true,
    icon: <CogIcon className='w-full h-full' />,
  },
  {
    name: 'Pokedex',
    pathname: '/pokedex',
    enabled: false,
    icon: <BookOpenIcon className='w-full h-full' />,
  },
  {
    name: 'Movedex',
    pathname: '/movedex',
    enabled: false,
    icon: <DatabaseIcon className='w-full h-full' />,
  },
];

export function useNavigationPages() {
  const router = useRouter();

  const links = useMemo<(Page & { active: boolean })[]>(
    () =>
      PAGES.map((page) => {
        const active = page.pathname === router.pathname;

        return { ...page, active };
      }),
    [router.pathname],
  );

  return links;
}

const AppSidebarNavigation: FunctionComponent = () => {
  const pages = useNavigationPages();

  return (
    <nav className='md:flex-grow'>
      {pages.map((page, i) => (
        <Link
          key={i}
          href={page.enabled ? { pathname: page.pathname } : '/'}
          replace
        >
          <a
            className={`mb-2 last:mb-0 p-2 flex-wrap cursor-pointer rounded group flex justify-start items-center focus-visible-ring ring-offset-gray-800 transition-colors ${
              page.active
                ? 'text-blue-300 hover:text-blue-200 bg-gray-700'
                : !page.enabled
                ? 'text-gray-400 pointer-events-none'
                : 'text-gray-300 hover:text-blue-100'
            }`}
            tabIndex={page.enabled ? 0 : -1}
          >
            <div className='flex items-center justify-center w-4 h-4'>
              {page.icon}
            </div>

            <div className='flex-grow ml-2'>
              {!page.enabled && (
                <span className='block text-xs'>Coming soon!</span>
              )}

              <span className='block text-sm font-semibold'>{page.name}</span>
            </div>
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default AppSidebarNavigation;
