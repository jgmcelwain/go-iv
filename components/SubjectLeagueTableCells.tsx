import React, { FunctionComponent, ReactChild } from 'react';

export const Header: FunctionComponent<{
  children?: ReactChild | string[];
}> = ({ children }) => (
  <th className='px-3 py-2 text-left bg-gray-100 first:pl-4 last:pr-4'>
    {children && (
      <span className='text-xs font-semibold tracking-wider text-gray-600 uppercase font-title'>
        {children}
      </span>
    )}
  </th>
);

export const Body: FunctionComponent<{
  right?: boolean;
  children?: ReactChild | string[];
}> = ({ right, children }) => (
  <td
    className={`border-t border-gray-200 px-3 py-4 first:pl-4${
      right ? ' text-right' : ''
    }`}
  >
    {children && (
      <span className='text-xs sm:text-sm whitespace-nowrap'>{children}</span>
    )}
  </td>
);