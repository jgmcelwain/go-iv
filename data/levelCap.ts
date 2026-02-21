export type LevelCapNumber = 40 | 41 | 50 | 51 | 53 | 54;

export type LevelCap = {
  level: LevelCapNumber;
  name: string;
  description: string;
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
