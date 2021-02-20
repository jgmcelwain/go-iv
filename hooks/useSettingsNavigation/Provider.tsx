import React, { FunctionComponent, ReactChild, useState, useMemo } from 'react';

import { Tab, TabKey, Context } from '.';

export const Provider: FunctionComponent<{
  children: ReactChild | ReactChild[];
}> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('calculation');

  const tabs = useMemo<Tab[]>(() => {
    const displayedTabs: Tab[] = [
      {
        key: 'calculation',
        name: 'Calculation',
        icon: (
          <path
            fillRule='evenodd'
            d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z'
            clipRule='evenodd'
          />
        ),
      },
      {
        key: 'display',
        name: 'Display',
        icon: (
          <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
        ),
      },
      {
        key: 'advanced',
        name: 'Advanced',
        icon: (
          <>
            <path d='M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z' />
            <path d='M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z' />
            <path d='M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z' />
          </>
        ),
      },
    ];

    return displayedTabs.map((tab) => {
      const active = activeTab === tab.key;

      return { ...tab, active };
    });
  }, [activeTab]);

  return (
    <Context.Provider value={{ tabs, activeTab, setActiveTab }}>
      {children}
    </Context.Provider>
  );
};
