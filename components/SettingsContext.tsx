import React, { FunctionComponent, ReactChild, createContext } from 'react';
import { useSettings, Settings, Dispatch } from '../hooks/useSettings';

export const Context = createContext<{
  settings: Settings;
  dispatch: Dispatch;
}>(null);

export const Wrapper: FunctionComponent<{
  initialValue: Settings;
  children: ReactChild | ReactChild[];
}> = ({ children, initialValue }) => {
  const value = useSettings(initialValue);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
