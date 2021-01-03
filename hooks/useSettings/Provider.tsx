import React, {
  FunctionComponent,
  ReactChild,
  useReducer,
  useEffect,
} from 'react';

import { Context, Settings } from '.';

import { settingsReducer } from './settingsReducer';
import { setSettingsCookie } from './setSettingsCookie';

export const Provider: FunctionComponent<{
  initialValue: Settings;
  children: ReactChild | ReactChild[];
}> = ({ children, initialValue }) => {
  const [settings, dispatch] = useReducer(settingsReducer, initialValue);

  useEffect(() => setSettingsCookie(settings), [settings]);

  return (
    <Context.Provider value={{ settings, dispatch }}>
      {children}
    </Context.Provider>
  );
};
