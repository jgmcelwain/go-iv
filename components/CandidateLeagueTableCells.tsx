import React, { FC, ReactNode } from 'react';

export const Header: FC<{
  children?: ReactNode;
  widthClass?: string;
}> = ({ children, widthClass }) => (
  <th
    className={`px-3 py-2 text-left bg-gray-100 first:pl-4 last:pr-4 ${
      widthClass ?? 'w-20'
    }`}
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
}> = ({ right, children, colSpan }) => (
  <td
    className={`border-t border-gray-200 px-3 py-4 text-sm whitespace-nowrap first:pl-4${
      right ? ' text-right' : ''
    }`}
    colSpan={colSpan}
  >
    {children}
  </td>
);
