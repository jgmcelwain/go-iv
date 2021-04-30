export const CPMs = [
  0.0939999967813491,
  0.135137430784308,
  0.166397869586944,
  0.192650914456886,
  0.215732470154762,
  0.236572655026622,
  0.255720049142837,
  0.273530381100769,
  0.29024988412857,
  0.306057381335773,
  0.321087598800659,
  0.335445032295077,
  0.349212676286697,
  0.36245774877879,
  0.375235587358474,
  0.387592411085168,
  0.399567276239395,
  0.41119354951725,
  0.422500014305114,
  0.432926413410414,
  0.443107545375824,
  0.453059953871985,
  0.46279838681221,
  0.472336077786704,
  0.481684952974319,
  0.490855810259008,
  0.499858438968658,
  0.508701756943992,
  0.517393946647644,
  0.525942508771329,
  0.534354329109191,
  0.542635762230353,
  0.550792694091796,
  0.558830599438087,
  0.566754519939422,
  0.574569148039264,
  0.582278907299041,
  0.589887911977272,
  0.59740000963211,
  0.604823657502073,
  0.61215728521347,
  0.61940411056605,
  0.626567125320434,
  0.633649181622743,
  0.640652954578399,
  0.647580963301656,
  0.654435634613037,
  0.661219263506722,
  0.667934000492096,
  0.674581899290818,
  0.681164920330047,
  0.687684905887771,
  0.694143652915954,
  0.700542893277978,
  0.706884205341339,
  0.713169102333341,
  0.719399094581604,
  0.725575616972598,
  0.731700003147125,
  0.734741011137376,
  0.737769484519958,
  0.740785574597326,
  0.743789434432983,
  0.746781208702482,
  0.749761044979095,
  0.752729105305821,
  0.75568550825119,
  0.758630366519684,
  0.761563837528228,
  0.764486065255226,
  0.767397165298461,
  0.77029727397159,
  0.77318650484085,
  0.776064945942412,
  0.778932750225067,
  0.781790064808426,
  0.784636974334716,
  0.787473583646825,
  0.790300011634826,
  0.792803950958807,
  0.795300006866455,
  0.79780392148697,
  0.800300002098083,
  0.802803892322847,
  0.805299997329711,
  0.807803863460723,
  0.81029999256134,
  0.812803834895026,
  0.815299987792968,
  0.817803806620319,
  0.820299983024597,
  0.822803778631297,
  0.825299978256225,
  0.827803750922782,
  0.830299973487854,
  0.832803753381377,
  0.835300028324127,
  0.837803755931569,
  0.840300023555755,
  0.842803729034748,
  0.845300018787384,
  0.847803702398935,
  0.850300014019012,
  0.852803676019539,
  0.85530000925064,
  0.857803649892077,
  0.860300004482269,
  0.862803624012168,
  0.865299999713897,
];

export type StatKey = 'atk' | 'def' | 'sta';
export const STATS: { key: StatKey; name: string }[] = [
  { key: 'atk', name: 'Attack' },
  { key: 'def', name: 'Defense' },
  { key: 'sta', name: 'Stamina' },
];

export type IV =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;
export const IV_RANGE: IV[] = Array.from({ length: 16 }).map((_, i) => i as IV);
export const MIN_IV = IV_RANGE[0];
export const MAX_IV = IV_RANGE[IV_RANGE.length - 1];

export type IVFloor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12;
export const IV_FLOORS: { value: IVFloor; name: string }[] = [
  { value: 0, name: 'Wild Catch' },
  { value: 1, name: 'Good Friend Trade' },
  { value: 2, name: 'Great Friend Trade' },
  { value: 3, name: 'Ultra Friend Trade' },
  { value: 4, name: 'Weather Boosted Catch' },
  { value: 5, name: 'Best Friend Trade' },
  { value: 6, name: 'Shadow Legendary' },
  { value: 10, name: 'Raid/Egg/Research' },
  { value: 12, name: 'Lucky Trade' },
];
export const MIN_IV_FLOOR = IV_FLOORS[0].value;
export const MAX_IV_FLOOR = IV_FLOORS[IV_FLOORS.length - 1].value;

export type LeagueKey = 'little' | 'great' | 'ultra' | 'master';
export type LeagueCPCap = 500 | 1500 | 2500 | 10000;
export type LeagueName =
  | 'Little Cup'
  | 'Great League'
  | 'Ultra League'
  | 'Master League';
export type League = { key: LeagueKey; cp: LeagueCPCap; name: LeagueName };
export const LEAGUES: League[] = [
  { key: 'great', cp: 1500, name: 'Great League' },
  { key: 'ultra', cp: 2500, name: 'Ultra League' },
  { key: 'master', cp: 10000, name: 'Master League' },
  { key: 'little', cp: 500, name: 'Little Cup' },
];

export type LevelCapNumber = 40 | 41 | 50 | 51;
export type LevelCap = {
  level: LevelCapNumber;
  name: string;
  description: string;
};
export const LEVEL_CAPS: LevelCap[] = [
  { level: 40, name: 'Level 40', description: 'Standard' },
  { level: 41, name: 'Level 41', description: 'Best Buddy' },
  { level: 50, name: 'Level 50', description: 'Candy XL' },
  {
    level: 51,
    name: 'Level 51',
    description: 'Candy XL + Best Buddy',
  },
];

export type OutputDataKey =
  | 'level'
  | 'rank'
  | 'cp'
  | 'stats'
  | 'statProduct'
  | 'percent';
export type OutputDataPoint = {
  key: OutputDataKey;
  name: string;
  description: string;
};
export const OUTPUT_DATA: OutputDataPoint[] = [
  { key: 'rank', name: 'Rank', description: '' },
  { key: 'level', name: 'Level', description: '' },
  { key: 'cp', name: 'CP', description: '' },
  { key: 'stats', name: 'Stats', description: '' },
  { key: 'statProduct', name: 'Product', description: '' },
  { key: 'percent', name: '% of Max', description: '' },
];

export type PokemonID = string;
export type PokemonName = string;
export type PokemonStats = {
  atk: number;
  def: number;
  sta: number;
};
export type PokemonIVs = {
  atk: IV;
  def: IV;
  sta: IV;
};
export type PokemonFamilyStage = 1 | 2 | 3 | 4 | 5;
export type Pokemon = {
  id: PokemonID;
  name: PokemonName;
  stats: PokemonStats;
  floor?: IVFloor;
  speculative?: boolean;
  family: {
    id: PokemonID;
    stage: PokemonFamilyStage;
  };
};

export type Spread = {
  ivs: PokemonIVs;
  cp: number;
  level: number;
  stats: PokemonStats;
  product: number;
};
export type ComparableToMax = {
  value: number;
  percentOfMax: number;
};
export type RankedSpread = Pick<Spread, 'ivs' | 'cp' | 'level'> & {
  rank: number;
  product: ComparableToMax;
  stats: {
    atk: ComparableToMax;
    def: ComparableToMax;
    sta: ComparableToMax;
  };
};

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};
