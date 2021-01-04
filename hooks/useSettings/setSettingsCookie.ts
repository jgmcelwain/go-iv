import { setCookie } from 'nookies';

import { Settings } from '.';

export function setSettingsCookie(settings: Settings) {
  setCookie({}, 'settings', JSON.stringify(settings), {
    path: '/',
    maxAge: 30 * 24 * 60 * 60,
  });
}
