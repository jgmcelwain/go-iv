import React, {
  FunctionComponent,
  ReactChild,
  createContext,
  useState,
} from 'react';

export const Context = createContext<{
  isShown: boolean;
  toggle: () => void;
  show: () => void;
  hide: () => void;
}>(null);

export const Wrapper: FunctionComponent<{
  children: ReactChild | ReactChild[];
}> = ({ children }) => {
  const [value, setValue] = useState(false);

  function toggle() {
    setValue(!value);
  }
  function show() {
    setValue(true);
  }
  function hide() {
    setValue(false);
  }

  return (
    <Context.Provider value={{ isShown: value, toggle, show, hide }}>
      {children}
    </Context.Provider>
  );
};
