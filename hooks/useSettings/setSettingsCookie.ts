import { Cookies } from 'react-cookie';
import { Settings } from '.';

const cookie = new Cookies();

export function setSettingsCookie(settings: Settings) {
  cookie.set('settings', settings, {
    path: '/',
    expires: new Date((Math.pow(2, 32) - 1) * 1000),
    sameSite: true,
  });
}
