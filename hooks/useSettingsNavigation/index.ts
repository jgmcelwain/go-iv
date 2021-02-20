import { createContext, SetStateAction, useContext } from 'react';

export { Provider } from './Provider';

export type TabKey = 'calculation' | 'display' | 'advanced';
export type Tab = {
  key: TabKey;
  name: string;
  icon: JSX.Element;
  active?: boolean;
};

export const Context = createContext<{
  tabs: Tab[];
  activeTab: TabKey;
  setActiveTab: React.Dispatch<SetStateAction<TabKey>>;
}>(null);

export function useSettingsNavigation() {
  const value = useContext(Context);

  return value;
}
