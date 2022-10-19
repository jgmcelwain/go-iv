import { createContext, useContext } from 'react';

export { Provider } from './Provider';
export { getReleaseBannerVersionHiddenCookie } from './getReleaseBannerVersionHiddenCookie';
export { setReleaseBannerVersionHiddenCookie } from './setReleaseBannerVersionHiddenCookie';

export const Context =
  createContext<{ isDisplayed: boolean; dismiss: () => void } | undefined>(
    undefined,
  );

export function useReleaseBannerDisplayed() {
  const value = useContext(Context);

  if (value === undefined) {
    throw new Error(
      'useReleaseBannerDisplayed must be called within the context of a ReleaseBannerDisplayedProvider',
    );
  }

  return value;
}
