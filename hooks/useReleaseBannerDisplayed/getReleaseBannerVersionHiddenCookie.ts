import { NextPageContext } from 'next';

import { parseCookies } from 'nookies';

export function getReleaseBannerVersionHiddenCookie(ctx: NextPageContext) {
  try {
    const cookies = parseCookies(ctx);

    if (!cookies.releaseBannerVersionHidden) {
      throw new Error('No releaseBannerVersionHidden cookie');
    }

    const parsed = parseInt(cookies.releaseBannerVersionHidden);

    if (Number.isNaN(parsed)) {
      throw new Error('Invalid value');
    }

    return parsed;
  } catch (err) {
    return null;
  }
}
