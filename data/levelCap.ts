export type SettableLevelCapNumber = 40 | 41 | 50 | 51;
export type MegaLevelCapNumber = 53 | 54;
export type LevelCapNumber = SettableLevelCapNumber | MegaLevelCapNumber;

export type LevelCap = {
  level: LevelCapNumber;
  name: string;
  description: string;
};

export const MEGA_LEVEL_CAP_BASE: Record<
  MegaLevelCapNumber,
  SettableLevelCapNumber
> = {
  53: 50,
  54: 51,
};

export const LEVEL_CAPS: LevelCap[] = [
  { level: 40, name: 'Level 40', description: 'Regular Candy' },
  { level: 41, name: 'Level 41', description: 'Regular Candy + Best Buddy' },
  { level: 50, name: 'Level 50', description: 'Candy XL' },
  {
    level: 51,
    name: 'Level 51',
    description: 'Candy XL + Best Buddy',
  },
  {
    level: 53,
    name: 'Level 53',
    description: 'Candy XL + Mega 4',
  },
  {
    level: 54,
    name: 'Level 54',
    description: 'Candy XL + Mega 4 + Best Buddy',
  },
];

export const SETTABLE_LEVEL_CAPS = LEVEL_CAPS.filter(
  (
    cap,
  ): cap is {
    level: SettableLevelCapNumber;
    name: string;
    description: string;
  } => !(cap.level in MEGA_LEVEL_CAP_BASE),
);
