import { Settings } from '.';

const defaultSettings: Settings = {
  leagues: { great: true, ultra: true, master: true, little: false },
  levelCaps: { 40: true, 41: true, 50: true, 51: true },
  outputData: {
    level: true,
    rank: true,
    cp: true,
    stats: true,
    statProduct: false,
    statProductPercent: true,
  },
};

export function getInitialSettings(settingsCookie: string) {
  try {
    const parsed = JSON.parse(settingsCookie) as Settings;

    return parsed;
  } catch (err) {
    return defaultSettings;
  }
}
