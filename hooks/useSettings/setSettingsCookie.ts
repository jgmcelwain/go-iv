import { Cookies } from 'react-cookie';
import { Settings } from '.';

const cookie = new Cookies();

export function setSettingsCookie(settings: Settings) {
  cookie.set('settings', settings, {
    path: '/',
    maxAge: 2147483647,
    sameSite: true,
    secure: true,
  });
}
