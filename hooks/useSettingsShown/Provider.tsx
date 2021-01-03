import React, { FunctionComponent, ReactChild, useState } from 'react';

import { Context } from '.';

export const Provider: FunctionComponent<{
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
