import React, { FC, ReactNode, useReducer, useEffect } from 'react';

import { Context, Settings } from '.';

import { settingsReducer } from './settingsReducer';
import { setSettingsCookie } from './setSettingsCookie';

function useSettingsReducer(initialValue: Settings) {
  const [settings, dispatch] = useReducer(settingsReducer, initialValue);

  return [settings, dispatch] as const;
}

function useSyncSettingsCookie(settings: Settings) {
  useEffect(() => setSettingsCookie(settings), [settings]);
}

export const Provider: FC<{
  initialValue: Settings;
  children: ReactNode;
}> = ({ children, initialValue }) => {
  const [settings, dispatch] = useSettingsReducer(initialValue);
  useSyncSettingsCookie(settings);

  return (
    <Context.Provider value={{ settings, dispatch }}>
      {children}
    </Context.Provider>
  );
};
