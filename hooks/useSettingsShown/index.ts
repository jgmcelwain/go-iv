import { createContext, useContext } from 'react';

export { Provider } from './Provider';

export const Context = createContext<{
  isShown: boolean;
  toggle: () => void;
  show: () => void;
  hide: () => void;
}>(null);

export function useSettingsShown() {
  const value = useContext(Context);

  return value;
}
