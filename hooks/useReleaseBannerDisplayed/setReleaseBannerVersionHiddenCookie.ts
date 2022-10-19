import { setCookie } from 'nookies';

export function setReleaseBannerVersionHiddenCookie(value: number) {
  setCookie({}, 'releaseBannerVersionHidden', JSON.stringify(value), {
    path: '/',
    maxAge: 30 * 24 * 60 * 60,
  });
}
