import React, { FC, useCallback, useState } from 'react';

import { Context, setReleaseBannerVersionHiddenCookie } from '.';

const CURRENT_RELEASE_BANNER_VERSION = 1;

function useReleaseBannerState(releaseBannerVersionHidden: number | null) {
  const [isDisplayed, setIsDisplayed] = useState(
    releaseBannerVersionHidden === null ||
      releaseBannerVersionHidden < CURRENT_RELEASE_BANNER_VERSION,
  );

  const dismiss = useCallback(() => {
    setReleaseBannerVersionHiddenCookie(CURRENT_RELEASE_BANNER_VERSION);
    setIsDisplayed(false);
  }, []);

  return [isDisplayed, dismiss] as const;
}

export const Provider: FC<{
  releaseBannerVersionHidden: number | null;
}> = ({ children, releaseBannerVersionHidden }) => {
  const [isDisplayed, dismiss] = useReleaseBannerState(
    releaseBannerVersionHidden,
  );

  return (
    <Context.Provider value={{ isDisplayed, dismiss }}>
      {children}
    </Context.Provider>
  );
};
