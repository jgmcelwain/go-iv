import React, { FC, ReactNode } from 'react';

// fades in along the right edge of a sticky column once its table is scrolled
// sideways; the scroll box needs `group` and a data-scrolled attribute
export const STICKY_EDGE_SHADOW =
  'after:absolute after:inset-y-0 after:right-0 after:w-2 after:translate-x-full after:pointer-events-none after:bg-gradient-to-r after:from-black/10 after:to-transparent after:opacity-0 after:transition-opacity group-data-[scrolled]:after:opacity-100';

// Form (11rem wide, when the species has forms) and Rank stay on screen when
// scrolling sideways; only the last of them carries the edge shadow.
export function stickyColumns(hasForms: boolean, showRank: boolean) {
  const column = (left: string, isLast: boolean) =>
    `sticky ${left} z-[1]${isLast ? ` ${STICKY_EDGE_SHADOW}` : ''}`;

  return {
    form: column('left-0', !showRank),
    rank: column(hasForms ? 'left-44' : 'left-0', true),
  };
}

export const Header: FC<{
  children?: ReactNode;
  widthClass?: string;
  className?: string;
}> = ({ children, widthClass, className }) => (
  <th
    className={`px-3 py-2 text-left bg-gray-100 first:pl-4 last:pr-4 ${
      widthClass ?? 'w-20'
    }${className ? ` ${className}` : ''}`}
  >
    {children && (
      <span className='text-xs font-semibold tracking-wider text-gray-600 uppercase font-title'>
        {children}
      </span>
    )}
  </th>
);

export const Body: FC<{
  right?: boolean;
  children?: ReactNode;
  colSpan?: number;
  className?: string;
}> = ({ right, children, colSpan, className }) => (
  <td
    className={`border-t border-gray-200 px-3 py-4 text-sm whitespace-nowrap first:pl-4${
      right ? ' text-right' : ''
    }${className ? ` ${className}` : ''}`}
    colSpan={colSpan}
  >
    {children}
  </td>
);
