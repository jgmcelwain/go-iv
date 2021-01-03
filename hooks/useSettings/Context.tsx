import React, {
  FunctionComponent,
  ReactChild,
  createContext,
  useReducer,
  useEffect,
} from 'react';

import { Settings } from '.';

import { settingsReducer, Dispatch } from './settingsReducer';
import { setSettingsCookie } from './setSettingsCookie';

export const Context = createContext<{
  settings: Settings;
  dispatch: Dispatch;
}>(null);

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
