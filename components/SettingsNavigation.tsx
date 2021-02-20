import React, { FunctionComponent, useEffect, useRef } from 'react';

import { useSettingsShown } from '../hooks/useSettingsShown';
import { useSettingsNavigation } from '../hooks/useSettingsNavigation';

const Settings: FunctionComponent = () => {
  const tabsContainer = useRef<HTMLDivElement>(null);
  const { hide } = useSettingsShown();
  const { tabs, activeTab, setActiveTab } = useSettingsNavigation();

  useEffect(() => {
    const activeTabButton =
      tabsContainer.current?.querySelector(`[data-tab-key="${activeTab}"]`) ??
      null;

    if (activeTabButton !== null) {
      activeTabButton.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeTab]);

  return (
    <nav className='w-full bg-gray-100 pr-12 relative border-b border-gray-200'>
      <div
        className='w-full max-w-full transform translate-y-px pt-2 px-2 overflow-x-scroll flex justify-start items-start'
        ref={tabsContainer}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-3 flex-shrink-0 flex justify-start items-start focus:outline-none focus-visible:ring-2 ring-blue-600 transition-colors border-t border-l border-r ${
              tab.active
                ? 'text-gray-900 bg-white border-gray-200'
                : 'text-gray-500 border-transparent'
            } hover:text-gray-900 rounded-t-md`}
            data-tab-key={tab.key}
          >
            <span className='font-semibold text-sm mr-2'>{tab.name}</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              {tab.icon}
            </svg>
          </button>
        ))}
      </div>

      <button
        onClick={hide}
        className='px-4 h-full bg-gray-100 absolute top-0 right-0 text-gray-500 flex justify-center items-center border-l border-gray-200'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-4 h-4'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </nav>
  );
};

export default Settings;
