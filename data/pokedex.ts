import { IV } from './iv';
import { IVFloor } from './ivFloor';

export type PokemonID = string;

export type PokemonName = string;

export type PokedexNumber = number;

export type PokemonStats = {
  atk: number;
  def: number;
  sta: number;
};

export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy';

export type PokemonIVs = {
  atk: IV;
  def: IV;
  sta: IV;
};

export type PokemonFamilyStage = 1 | 2 | 3 | 4 | 5;

export type Pokemon = {
  id: PokemonID;
  dexNumber: PokedexNumber;
  name: PokemonName;
  stats: PokemonStats;
  types: PokemonType[];
  floor?: IVFloor;
  family: {
    id: PokemonID;
    stage: PokemonFamilyStage;
  };
  speculative?: boolean;
};

export const POKEDEX: Pokemon[] = [
  {
    id: 'bulbasaur',
    dexNumber: 1,
    name: 'Bulbasaur',
    stats: {
      atk: 118,
      def: 111,
      sta: 128,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'bulbasaur',
      stage: 1,
    },
  },
  {
    id: 'ivysaur',
    dexNumber: 2,
    name: 'Ivysaur',
    stats: {
      atk: 151,
      def: 143,
      sta: 155,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'bulbasaur',
      stage: 2,
    },
  },
  {
    id: 'venusaur',
    dexNumber: 3,
    name: 'Venusaur',
    stats: {
      atk: 198,
      def: 189,
      sta: 190,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'bulbasaur',
      stage: 3,
    },
  },
  {
    id: 'venusaur_mega',
    dexNumber: 3,
    name: 'Venusaur (Mega)',
    stats: {
      atk: 241,
      def: 246,
      sta: 190,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'bulbasaur',
      stage: 4,
    },
  },
  {
    id: 'charmander',
    dexNumber: 4,
    name: 'Charmander',
    stats: {
      atk: 116,
      def: 93,
      sta: 118,
    },
    types: ['fire'],
    family: {
      id: 'charmander',
      stage: 1,
    },
  },
  {
    id: 'charmeleon',
    dexNumber: 5,
    name: 'Charmeleon',
    stats: {
      atk: 158,
      def: 126,
      sta: 151,
    },
    types: ['fire'],
    family: {
      id: 'charmander',
      stage: 2,
    },
  },
  {
    id: 'charizard',
    dexNumber: 6,
    name: 'Charizard',
    stats: {
      atk: 223,
      def: 173,
      sta: 186,
    },
    types: ['fire', 'flying'],
    family: {
      id: 'charmander',
      stage: 3,
    },
  },
  {
    id: 'charizard_mega_x',
    dexNumber: 6,
    name: 'Charizard (Mega X)',
    stats: {
      atk: 273,
      def: 213,
      sta: 186,
    },
    types: ['fire', 'dragon'],
    family: {
      id: 'charmander',
      stage: 4,
    },
  },
  {
    id: 'charizard_mega_y',
    dexNumber: 6,
    name: 'Charizard (Mega Y)',
    stats: {
      atk: 319,
      def: 212,
      sta: 186,
    },
    types: ['fire', 'flying'],
    family: {
      id: 'charmander',
      stage: 4,
    },
  },
  {
    id: 'squirtle',
    dexNumber: 7,
    name: 'Squirtle',
    stats: {
      atk: 94,
      def: 121,
      sta: 127,
    },
    types: ['water'],
    family: {
      id: 'squirtle',
      stage: 1,
    },
  },
  {
    id: 'wartortle',
    dexNumber: 8,
    name: 'Wartortle',
    stats: {
      atk: 126,
      def: 155,
      sta: 153,
    },
    types: ['water'],
    family: {
      id: 'squirtle',
      stage: 2,
    },
  },
  {
    id: 'blastoise',
    dexNumber: 9,
    name: 'Blastoise',
    stats: {
      atk: 171,
      def: 207,
      sta: 188,
    },
    types: ['water'],
    family: {
      id: 'squirtle',
      stage: 3,
    },
  },
  {
    id: 'blastoise_mega',
    dexNumber: 9,
    name: 'Blastoise (Mega)',
    stats: {
      atk: 264,
      def: 237,
      sta: 188,
    },
    types: ['water'],
    family: {
      id: 'squirtle',
      stage: 3,
    },
  },
  {
    id: 'caterpie',
    dexNumber: 10,
    name: 'Caterpie',
    stats: {
      atk: 55,
      def: 55,
      sta: 128,
    },
    types: ['bug'],
    family: {
      id: 'caterpie',
      stage: 1,
    },
  },
  {
    id: 'metapod',
    dexNumber: 11,
    name: 'Metapod',
    stats: {
      atk: 45,
      def: 80,
      sta: 137,
    },
    types: ['bug'],
    family: {
      id: 'caterpie',
      stage: 2,
    },
  },
  {
    id: 'butterfree',
    dexNumber: 12,
    name: 'Butterfree',
    stats: {
      atk: 167,
      def: 137,
      sta: 155,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'caterpie',
      stage: 3,
    },
  },
  {
    id: 'weedle',
    dexNumber: 13,
    name: 'Weedle',
    stats: {
      atk: 63,
      def: 50,
      sta: 120,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'weedle',
      stage: 1,
    },
  },
  {
    id: 'kakuna',
    dexNumber: 14,
    name: 'Kakuna',
    stats: {
      atk: 46,
      def: 75,
      sta: 128,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'weedle',
      stage: 2,
    },
  },
  {
    id: 'beedrill',
    dexNumber: 15,
    name: 'Beedrill',
    stats: {
      atk: 169,
      def: 130,
      sta: 163,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'weedle',
      stage: 3,
    },
  },
  {
    id: 'beedrill_mega',
    dexNumber: 15,
    name: 'Beedrill (Mega)',
    stats: {
      atk: 303,
      def: 148,
      sta: 163,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'weedle',
      stage: 4,
    },
  },
  {
    id: 'pidgey',
    dexNumber: 16,
    name: 'Pidgey',
    stats: {
      atk: 85,
      def: 73,
      sta: 120,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'pidgey',
      stage: 1,
    },
  },
  {
    id: 'pidgeotto',
    dexNumber: 17,
    name: 'Pidgeotto',
    stats: {
      atk: 117,
      def: 105,
      sta: 160,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'pidgey',
      stage: 2,
    },
  },
  {
    id: 'pidgeot',
    dexNumber: 18,
    name: 'Pidgeot',
    stats: {
      atk: 166,
      def: 154,
      sta: 195,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'pidgey',
      stage: 3,
    },
  },
  {
    id: 'pidgeot_mega',
    dexNumber: 18,
    name: 'Pidgeot (Mega)',
    stats: {
      atk: 280,
      def: 175,
      sta: 195,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'pidgey',
      stage: 4,
    },
  },
  {
    id: 'rattata',
    dexNumber: 19,
    name: 'Rattata',
    stats: {
      atk: 103,
      def: 70,
      sta: 102,
    },
    types: ['normal'],
    family: {
      id: 'rattata',
      stage: 1,
    },
  },
  {
    id: 'rattata_alolan',
    dexNumber: 19,
    name: 'Rattata (Alolan)',
    stats: {
      atk: 103,
      def: 70,
      sta: 102,
    },
    types: ['dark', 'normal'],
    family: {
      id: 'rattata_alolan',
      stage: 1,
    },
  },
  {
    id: 'raticate',
    dexNumber: 20,
    name: 'Raticate',
    stats: {
      atk: 161,
      def: 139,
      sta: 146,
    },
    types: ['normal'],
    family: {
      id: 'rattata',
      stage: 2,
    },
  },
  {
    id: 'raticate_alolan',
    dexNumber: 20,
    name: 'Raticate (Alolan)',
    stats: {
      atk: 135,
      def: 154,
      sta: 181,
    },
    types: ['dark', 'normal'],
    family: {
      id: 'rattata_alolan',
      stage: 2,
    },
  },
  {
    id: 'spearow',
    dexNumber: 21,
    name: 'Spearow',
    stats: {
      atk: 112,
      def: 60,
      sta: 120,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'spearow',
      stage: 1,
    },
  },
  {
    id: 'fearow',
    dexNumber: 22,
    name: 'Fearow',
    stats: {
      atk: 182,
      def: 133,
      sta: 163,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'spearow',
      stage: 2,
    },
  },
  {
    id: 'ekans',
    dexNumber: 23,
    name: 'Ekans',
    stats: {
      atk: 110,
      def: 97,
      sta: 111,
    },
    types: ['poison'],
    family: {
      id: 'ekans',
      stage: 1,
    },
  },
  {
    id: 'arbok',
    dexNumber: 24,
    name: 'Arbok',
    stats: {
      atk: 167,
      def: 153,
      sta: 155,
    },
    types: ['poison'],
    family: {
      id: 'ekans',
      stage: 2,
    },
  },
  {
    id: 'pikachu',
    dexNumber: 25,
    name: 'Pikachu',
    stats: {
      atk: 112,
      def: 96,
      sta: 111,
    },
    types: ['electric'],
    family: {
      id: 'pichu',
      stage: 2,
    },
  },
  {
    id: 'raichu',
    dexNumber: 26,
    name: 'Raichu',
    stats: {
      atk: 193,
      def: 151,
      sta: 155,
    },
    types: ['electric'],
    family: {
      id: 'pichu',
      stage: 2,
    },
  },
  {
    id: 'raichu_alolan',
    dexNumber: 26,
    name: 'Raichu (Alolan)',
    stats: {
      atk: 201,
      def: 154,
      sta: 155,
    },
    types: ['electric', 'psychic'],
    family: {
      id: 'raichu_alolan',
      stage: 1,
    },
  },
  {
    id: 'sandshrew',
    dexNumber: 27,
    name: 'Sandshrew',
    stats: {
      atk: 126,
      def: 120,
      sta: 137,
    },
    types: ['ground'],
    family: {
      id: 'sandshrew',
      stage: 1,
    },
  },
  {
    id: 'sandshrew_alolan',
    dexNumber: 27,
    name: 'Sandshrew (Alolan)',
    stats: {
      atk: 125,
      def: 129,
      sta: 137,
    },
    types: ['ice', 'steel'],
    family: {
      id: 'sandshrew_alolan',
      stage: 1,
    },
  },
  {
    id: 'sandslash',
    dexNumber: 28,
    name: 'Sandslash',
    stats: {
      atk: 182,
      def: 175,
      sta: 181,
    },
    types: ['ground'],
    family: {
      id: 'sandshrew',
      stage: 2,
    },
  },
  {
    id: 'sandslash_alolan',
    dexNumber: 28,
    name: 'Sandslash (Alolan)',
    stats: {
      atk: 177,
      def: 195,
      sta: 181,
    },
    types: ['ice', 'steel'],
    family: {
      id: 'sandshrew_alolan',
      stage: 2,
    },
  },
  {
    id: 'nidoran_female',
    dexNumber: 29,
    name: 'Nidoran♀',
    stats: {
      atk: 86,
      def: 89,
      sta: 146,
    },
    types: ['poison'],
    family: {
      id: 'nidoran_female',
      stage: 1,
    },
  },
  {
    id: 'nidorina',
    dexNumber: 30,
    name: 'Nidorina',
    stats: {
      atk: 117,
      def: 120,
      sta: 172,
    },
    types: ['poison'],
    family: {
      id: 'nidoran_female',
      stage: 2,
    },
  },
  {
    id: 'nidoqueen',
    dexNumber: 31,
    name: 'Nidoqueen',
    stats: {
      atk: 180,
      def: 173,
      sta: 207,
    },
    types: ['poison', 'ground'],
    family: {
      id: 'nidoran_female',
      stage: 3,
    },
  },
  {
    id: 'nidoran_male',
    dexNumber: 32,
    name: 'Nidoran♂',
    stats: {
      atk: 105,
      def: 76,
      sta: 130,
    },
    types: ['poison'],
    family: {
      id: 'nidoran_male',
      stage: 1,
    },
  },
  {
    id: 'nidorino',
    dexNumber: 33,
    name: 'Nidorino',
    stats: {
      atk: 137,
      def: 111,
      sta: 156,
    },
    types: ['poison'],
    family: {
      id: 'nidoran_male',
      stage: 2,
    },
  },
  {
    id: 'nidoking',
    dexNumber: 34,
    name: 'Nidoking',
    stats: {
      atk: 204,
      def: 156,
      sta: 191,
    },
    types: ['poison', 'ground'],
    family: {
      id: 'nidoran_male',
      stage: 3,
    },
  },
  {
    id: 'clefairy',
    dexNumber: 35,
    name: 'Clefairy',
    stats: {
      atk: 107,
      def: 108,
      sta: 172,
    },
    types: ['fairy'],
    family: {
      id: 'cleffa',
      stage: 2,
    },
  },
  {
    id: 'clefable',
    dexNumber: 36,
    name: 'Clefable',
    stats: {
      atk: 178,
      def: 162,
      sta: 216,
    },
    types: ['fairy'],
    family: {
      id: 'cleffa',
      stage: 3,
    },
  },
  {
    id: 'vulpix',
    dexNumber: 37,
    name: 'Vulpix',
    stats: {
      atk: 96,
      def: 109,
      sta: 116,
    },
    types: ['fire'],
    family: {
      id: 'vulpix',
      stage: 1,
    },
  },
  {
    id: 'vulpix_alolan',
    dexNumber: 37,
    name: 'Vulpix (Alolan)',
    stats: {
      atk: 96,
      def: 109,
      sta: 116,
    },
    types: ['ice'],
    family: {
      id: 'vulpix_alolan',
      stage: 1,
    },
  },
  {
    id: 'ninetales',
    dexNumber: 38,
    name: 'Ninetales',
    stats: {
      atk: 169,
      def: 190,
      sta: 177,
    },
    types: ['fire'],
    family: {
      id: 'vulpix',
      stage: 2,
    },
  },
  {
    id: 'ninetales_alolan',
    dexNumber: 38,
    name: 'Ninetales (Alolan)',
    stats: {
      atk: 170,
      def: 193,
      sta: 177,
    },
    types: ['ice', 'fairy'],
    family: {
      id: 'vulpix_alolan',
      stage: 2,
    },
  },
  {
    id: 'jigglypuff',
    dexNumber: 39,
    name: 'Jigglypuff',
    stats: {
      atk: 80,
      def: 41,
      sta: 251,
    },
    types: ['normal', 'fairy'],
    family: {
      id: 'igglybuff',
      stage: 2,
    },
  },
  {
    id: 'wigglytuff',
    dexNumber: 40,
    name: 'Wigglytuff',
    stats: {
      atk: 156,
      def: 90,
      sta: 295,
    },
    types: ['normal', 'fairy'],
    family: {
      id: 'igglybuff',
      stage: 3,
    },
  },
  {
    id: 'zubat',
    dexNumber: 41,
    name: 'Zubat',
    stats: {
      atk: 83,
      def: 73,
      sta: 120,
    },
    types: ['poison', 'flying'],
    family: {
      id: 'zubat',
      stage: 1,
    },
  },
  {
    id: 'golbat',
    dexNumber: 42,
    name: 'Golbat',
    stats: {
      atk: 161,
      def: 150,
      sta: 181,
    },
    types: ['poison', 'flying'],
    family: {
      id: 'zubat',
      stage: 2,
    },
  },
  {
    id: 'oddish',
    dexNumber: 43,
    name: 'Oddish',
    stats: {
      atk: 131,
      def: 112,
      sta: 128,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'oddish',
      stage: 1,
    },
  },
  {
    id: 'gloom',
    dexNumber: 44,
    name: 'Gloom',
    stats: {
      atk: 153,
      def: 136,
      sta: 155,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'oddish',
      stage: 2,
    },
  },
  {
    id: 'vileplume',
    dexNumber: 45,
    name: 'Vileplume',
    stats: {
      atk: 202,
      def: 167,
      sta: 181,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'oddish',
      stage: 3,
    },
  },
  {
    id: 'paras',
    dexNumber: 46,
    name: 'Paras',
    stats: {
      atk: 121,
      def: 99,
      sta: 111,
    },
    types: ['bug', 'grass'],
    family: {
      id: 'paras',
      stage: 1,
    },
  },
  {
    id: 'parasect',
    dexNumber: 47,
    name: 'Parasect',
    stats: {
      atk: 165,
      def: 146,
      sta: 155,
    },
    types: ['bug', 'grass'],
    family: {
      id: 'paras',
      stage: 2,
    },
  },
  {
    id: 'venonat',
    dexNumber: 48,
    name: 'Venonat',
    stats: {
      atk: 100,
      def: 100,
      sta: 155,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'venonat',
      stage: 1,
    },
  },
  {
    id: 'venomoth',
    dexNumber: 49,
    name: 'Venomoth',
    stats: {
      atk: 179,
      def: 143,
      sta: 172,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'venonat',
      stage: 2,
    },
  },
  {
    id: 'diglett',
    dexNumber: 50,
    name: 'Diglett',
    stats: {
      atk: 109,
      def: 78,
      sta: 67,
    },
    types: ['ground'],
    family: {
      id: 'diglett',
      stage: 1,
    },
  },
  {
    id: 'diglett_alolan',
    dexNumber: 50,
    name: 'Diglett (Alolan)',
    stats: {
      atk: 108,
      def: 81,
      sta: 67,
    },
    types: ['ground', 'steel'],
    family: {
      id: 'diglett_alolan',
      stage: 1,
    },
  },
  {
    id: 'dugtrio',
    dexNumber: 51,
    name: 'Dugtrio',
    stats: {
      atk: 167,
      def: 136,
      sta: 111,
    },
    types: ['ground'],
    family: {
      id: 'diglett',
      stage: 2,
    },
  },
  {
    id: 'dugtrio_alolan',
    dexNumber: 51,
    name: 'Dugtrio (Alolan)',
    stats: {
      atk: 201,
      def: 142,
      sta: 111,
    },
    types: ['ground', 'steel'],
    family: {
      id: 'diglett_alolan',
      stage: 2,
    },
  },
  {
    id: 'meowth',
    dexNumber: 52,
    name: 'Meowth',
    stats: {
      atk: 92,
      def: 78,
      sta: 120,
    },
    types: ['normal'],
    family: {
      id: 'meowth',
      stage: 1,
    },
  },
  {
    id: 'meowth_alolan',
    dexNumber: 52,
    name: 'Meowth (Alolan)',
    stats: {
      atk: 99,
      def: 78,
      sta: 120,
    },
    types: ['dark'],
    family: {
      id: 'meowth_alolan',
      stage: 1,
    },
  },
  {
    id: 'meowth_galarian',
    dexNumber: 52,
    name: 'Meowth (Galarian)',
    stats: {
      atk: 115,
      def: 92,
      sta: 137,
    },
    types: ['steel'],
    family: {
      id: 'meowth_galarian',
      stage: 1,
    },
  },
  {
    id: 'persian',
    dexNumber: 53,
    name: 'Persian',
    stats: {
      atk: 150,
      def: 136,
      sta: 163,
    },
    types: ['normal'],
    family: {
      id: 'meowth',
      stage: 2,
    },
  },
  {
    id: 'persian_alolan',
    dexNumber: 53,
    name: 'Persian (Alolan)',
    stats: {
      atk: 158,
      def: 136,
      sta: 163,
    },
    types: ['dark'],
    family: {
      id: 'meowth_alolan',
      stage: 2,
    },
  },
  {
    id: 'psyduck',
    dexNumber: 54,
    name: 'Psyduck',
    stats: {
      atk: 122,
      def: 95,
      sta: 137,
    },
    types: ['water'],
    family: {
      id: 'psyduck',
      stage: 1,
    },
  },
  {
    id: 'golduck',
    dexNumber: 55,
    name: 'Golduck',
    stats: {
      atk: 191,
      def: 162,
      sta: 190,
    },
    types: ['water'],
    family: {
      id: 'psyduck',
      stage: 2,
    },
  },
  {
    id: 'mankey',
    dexNumber: 56,
    name: 'Mankey',
    stats: {
      atk: 148,
      def: 82,
      sta: 120,
    },
    types: ['fighting'],
    family: {
      id: 'mankey',
      stage: 1,
    },
  },
  {
    id: 'primeape',
    dexNumber: 57,
    name: 'Primeape',
    stats: {
      atk: 207,
      def: 138,
      sta: 163,
    },
    types: ['fighting'],
    family: {
      id: 'mankey',
      stage: 2,
    },
  },
  {
    id: 'growlithe',
    dexNumber: 58,
    name: 'Growlithe',
    stats: {
      atk: 136,
      def: 93,
      sta: 146,
    },
    types: ['fire'],
    family: {
      id: 'growlithe',
      stage: 1,
    },
  },
  {
    id: 'arcanine',
    dexNumber: 59,
    name: 'Arcanine',
    stats: {
      atk: 227,
      def: 166,
      sta: 207,
    },
    types: ['fire'],
    family: {
      id: 'growlithe',
      stage: 2,
    },
  },
  {
    id: 'poliwag',
    dexNumber: 60,
    name: 'Poliwag',
    stats: {
      atk: 101,
      def: 82,
      sta: 120,
    },
    types: ['water'],
    family: {
      id: 'poliwag',
      stage: 1,
    },
  },
  {
    id: 'poliwhirl',
    dexNumber: 61,
    name: 'Poliwhirl',
    stats: {
      atk: 130,
      def: 123,
      sta: 163,
    },
    types: ['water'],
    family: {
      id: 'poliwag',
      stage: 2,
    },
  },
  {
    id: 'poliwrath',
    dexNumber: 62,
    name: 'Poliwrath',
    stats: {
      atk: 182,
      def: 184,
      sta: 207,
    },
    types: ['water', 'fighting'],
    family: {
      id: 'poliwag',
      stage: 3,
    },
  },
  {
    id: 'abra',
    dexNumber: 63,
    name: 'Abra',
    stats: {
      atk: 195,
      def: 82,
      sta: 93,
    },
    types: ['psychic'],
    family: {
      id: 'abra',
      stage: 1,
    },
  },
  {
    id: 'kadabra',
    dexNumber: 64,
    name: 'Kadabra',
    stats: {
      atk: 232,
      def: 117,
      sta: 120,
    },
    types: ['psychic'],
    family: {
      id: 'abra',
      stage: 2,
    },
  },
  {
    id: 'alakazam',
    dexNumber: 65,
    name: 'Alakazam',
    stats: {
      atk: 271,
      def: 167,
      sta: 146,
    },
    types: ['psychic'],
    family: {
      id: 'abra',
      stage: 3,
    },
  },
  {
    id: 'alakazam_mega',
    dexNumber: 65,
    name: 'Alakazam (Mega)',
    stats: {
      atk: 367,
      def: 193,
      sta: 146,
    },
    types: ['psychic'],
    family: {
      id: 'abra',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'machop',
    dexNumber: 66,
    name: 'Machop',
    stats: {
      atk: 137,
      def: 82,
      sta: 172,
    },
    types: ['fighting'],
    family: {
      id: 'machop',
      stage: 1,
    },
  },
  {
    id: 'machoke',
    dexNumber: 67,
    name: 'Machoke',
    stats: {
      atk: 177,
      def: 125,
      sta: 190,
    },
    types: ['fighting'],
    family: {
      id: 'machop',
      stage: 2,
    },
  },
  {
    id: 'machamp',
    dexNumber: 68,
    name: 'Machamp',
    stats: {
      atk: 234,
      def: 159,
      sta: 207,
    },
    types: ['fighting'],
    family: {
      id: 'machop',
      stage: 3,
    },
  },
  {
    id: 'bellsprout',
    dexNumber: 69,
    name: 'Bellsprout',
    stats: {
      atk: 139,
      def: 61,
      sta: 137,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'bellsprout',
      stage: 1,
    },
  },
  {
    id: 'weepinbell',
    dexNumber: 70,
    name: 'Weepinbell',
    stats: {
      atk: 172,
      def: 92,
      sta: 163,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'bellsprout',
      stage: 2,
    },
  },
  {
    id: 'victreebel',
    dexNumber: 71,
    name: 'Victreebel',
    stats: {
      atk: 207,
      def: 135,
      sta: 190,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'bellsprout',
      stage: 3,
    },
  },
  {
    id: 'tentacool',
    dexNumber: 72,
    name: 'Tentacool',
    stats: {
      atk: 97,
      def: 149,
      sta: 120,
    },
    types: ['water', 'poison'],
    family: {
      id: 'tentacool',
      stage: 1,
    },
  },
  {
    id: 'tentacruel',
    dexNumber: 73,
    name: 'Tentacruel',
    stats: {
      atk: 166,
      def: 209,
      sta: 190,
    },
    types: ['water', 'poison'],
    family: {
      id: 'tentacool',
      stage: 2,
    },
  },
  {
    id: 'geodude',
    dexNumber: 74,
    name: 'Geodude',
    stats: {
      atk: 132,
      def: 132,
      sta: 120,
    },
    types: ['rock', 'ground'],
    family: {
      id: 'geodude',
      stage: 1,
    },
  },
  {
    id: 'geodude_alolan',
    dexNumber: 74,
    name: 'Geodude (Alolan)',
    stats: {
      atk: 132,
      def: 132,
      sta: 120,
    },
    types: ['rock', 'electric'],
    family: {
      id: 'geodude_alolan',
      stage: 1,
    },
  },
  {
    id: 'graveler',
    dexNumber: 75,
    name: 'Graveler',
    stats: {
      atk: 164,
      def: 164,
      sta: 146,
    },
    types: ['rock', 'ground'],
    family: {
      id: 'geodude',
      stage: 2,
    },
  },
  {
    id: 'graveler_alolan',
    dexNumber: 75,
    name: 'Graveler (Alolan)',
    stats: {
      atk: 164,
      def: 164,
      sta: 146,
    },
    types: ['rock', 'electric'],
    family: {
      id: 'geodude_alolan',
      stage: 2,
    },
  },
  {
    id: 'golem',
    dexNumber: 76,
    name: 'Golem',
    stats: {
      atk: 211,
      def: 198,
      sta: 190,
    },
    types: ['rock', 'ground'],
    family: {
      id: 'geodude',
      stage: 3,
    },
  },
  {
    id: 'golem_alolan',
    dexNumber: 76,
    name: 'Golem (Alolan)',
    stats: {
      atk: 211,
      def: 198,
      sta: 190,
    },
    types: ['rock', 'electric'],
    family: {
      id: 'geodude_alolan',
      stage: 3,
    },
  },
  {
    id: 'ponyta',
    dexNumber: 77,
    name: 'Ponyta',
    stats: {
      atk: 170,
      def: 127,
      sta: 137,
    },
    types: ['fire'],
    family: {
      id: 'ponyta',
      stage: 1,
    },
  },
  {
    id: 'ponyta_galarian',
    dexNumber: 77,
    name: 'Ponyta (Galarian)',
    stats: {
      atk: 170,
      def: 127,
      sta: 137,
    },
    types: ['psychic'],
    family: {
      id: 'ponyta_galarian',
      stage: 1,
    },
  },
  {
    id: 'rapidash',
    dexNumber: 78,
    name: 'Rapidash',
    stats: {
      atk: 207,
      def: 162,
      sta: 163,
    },
    types: ['fire'],
    family: {
      id: 'ponyta',
      stage: 2,
    },
  },
  {
    id: 'rapidash_galarian',
    dexNumber: 78,
    name: 'Rapidash (Galarian)',
    stats: {
      atk: 207,
      def: 162,
      sta: 163,
    },
    types: ['psychic', 'fairy'],
    family: {
      id: 'ponyta_galarian',
      stage: 2,
    },
  },
  {
    id: 'slowpoke',
    dexNumber: 79,
    name: 'Slowpoke',
    stats: {
      atk: 109,
      def: 98,
      sta: 207,
    },
    types: ['water', 'psychic'],
    family: {
      id: 'slowpoke',
      stage: 1,
    },
  },
  {
    id: 'slowbro',
    dexNumber: 80,
    name: 'Slowbro',
    stats: {
      atk: 177,
      def: 180,
      sta: 216,
    },
    types: ['water', 'psychic'],
    family: {
      id: 'slowpoke',
      stage: 2,
    },
  },
  {
    id: 'slowbro_mega',
    dexNumber: 80,
    name: 'Slowbro (Mega)',
    stats: {
      atk: 224,
      def: 259,
      sta: 216,
    },
    types: ['water', 'psychic'],
    family: {
      id: 'slowpoke',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'magnemite',
    dexNumber: 81,
    name: 'Magnemite',
    stats: {
      atk: 165,
      def: 121,
      sta: 93,
    },
    types: ['electric', 'steel'],
    family: {
      id: 'magnemite',
      stage: 1,
    },
  },
  {
    id: 'magneton',
    dexNumber: 82,
    name: 'Magneton',
    stats: {
      atk: 223,
      def: 169,
      sta: 137,
    },
    types: ['electric', 'steel'],
    family: {
      id: 'magnemite',
      stage: 2,
    },
  },
  {
    id: 'farfetchd',
    dexNumber: 83,
    name: "Farfetch'd",
    stats: {
      atk: 124,
      def: 115,
      sta: 141,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'farfetchd',
      stage: 1,
    },
  },
  {
    id: 'farfetchd_galarian',
    dexNumber: 83,
    name: 'Farfetchd (Galarian)',
    stats: {
      atk: 174,
      def: 114,
      sta: 141,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'farfetchd_galarian',
      stage: 1,
    },
  },
  {
    id: 'doduo',
    dexNumber: 84,
    name: 'Doduo',
    stats: {
      atk: 158,
      def: 83,
      sta: 111,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'doduo',
      stage: 1,
    },
  },
  {
    id: 'dodrio',
    dexNumber: 85,
    name: 'Dodrio',
    stats: {
      atk: 218,
      def: 140,
      sta: 155,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'doduo',
      stage: 2,
    },
  },
  {
    id: 'seel',
    dexNumber: 86,
    name: 'Seel',
    stats: {
      atk: 85,
      def: 121,
      sta: 163,
    },
    types: ['water'],
    family: {
      id: 'seel',
      stage: 1,
    },
  },
  {
    id: 'dewgong',
    dexNumber: 87,
    name: 'Dewgong',
    stats: {
      atk: 139,
      def: 177,
      sta: 207,
    },
    types: ['water', 'ice'],
    family: {
      id: 'seel',
      stage: 2,
    },
  },
  {
    id: 'grimer',
    dexNumber: 88,
    name: 'Grimer',
    stats: {
      atk: 135,
      def: 90,
      sta: 190,
    },
    types: ['poison'],
    family: {
      id: 'grimer',
      stage: 1,
    },
  },
  {
    id: 'grimer_alolan',
    dexNumber: 88,
    name: 'Grimer (Alolan)',
    stats: {
      atk: 135,
      def: 90,
      sta: 190,
    },
    types: ['poison', 'dark'],
    family: {
      id: 'grimer_alolan',
      stage: 1,
    },
  },
  {
    id: 'muk',
    dexNumber: 89,
    name: 'Muk',
    stats: {
      atk: 190,
      def: 172,
      sta: 233,
    },
    types: ['poison'],
    family: {
      id: 'grimer',
      stage: 2,
    },
  },
  {
    id: 'muk_alolan',
    dexNumber: 89,
    name: 'Muk (Alolan)',
    stats: {
      atk: 190,
      def: 172,
      sta: 233,
    },
    types: ['poison', 'dark'],
    family: {
      id: 'grimer_alolan',
      stage: 2,
    },
  },
  {
    id: 'shellder',
    dexNumber: 90,
    name: 'Shellder',
    stats: {
      atk: 116,
      def: 134,
      sta: 102,
    },
    types: ['water'],
    family: {
      id: 'shellder',
      stage: 1,
    },
  },
  {
    id: 'shellos',
    dexNumber: 90,
    name: 'Shellos',
    stats: {
      atk: 103,
      def: 105,
      sta: 183,
    },
    types: ['water'],
    family: {
      id: 'shellos',
      stage: 1,
    },
  },
  {
    id: 'cloyster',
    dexNumber: 91,
    name: 'Cloyster',
    stats: {
      atk: 186,
      def: 256,
      sta: 137,
    },
    types: ['water', 'ice'],
    family: {
      id: 'shellder',
      stage: 2,
    },
  },
  {
    id: 'gastly',
    dexNumber: 92,
    name: 'Gastly',
    stats: {
      atk: 186,
      def: 67,
      sta: 102,
    },
    types: ['ghost', 'poison'],
    family: {
      id: 'gastly',
      stage: 1,
    },
  },
  {
    id: 'gastrodon',
    dexNumber: 92,
    name: 'Gastrodon',
    stats: {
      atk: 169,
      def: 143,
      sta: 244,
    },
    types: ['ghost', 'poison'],
    family: {
      id: 'shellos',
      stage: 2,
    },
  },
  {
    id: 'haunter',
    dexNumber: 93,
    name: 'Haunter',
    stats: {
      atk: 223,
      def: 107,
      sta: 128,
    },
    types: ['ghost', 'poison'],
    family: {
      id: 'gastly',
      stage: 2,
    },
  },
  {
    id: 'gengar',
    dexNumber: 94,
    name: 'Gengar',
    stats: {
      atk: 261,
      def: 149,
      sta: 155,
    },
    types: ['ghost', 'poison'],
    family: {
      id: 'gastly',
      stage: 3,
    },
  },
  {
    id: 'gengar_mega',
    dexNumber: 94,
    name: 'Gengar (Mega)',
    stats: {
      atk: 349,
      def: 199,
      sta: 155,
    },
    types: ['ghost', 'poison'],
    family: {
      id: 'gastly',
      stage: 4,
    },
  },
  {
    id: 'onix',
    dexNumber: 95,
    name: 'Onix',
    stats: {
      atk: 85,
      def: 232,
      sta: 111,
    },
    types: ['rock', 'ground'],
    family: {
      id: 'onix',
      stage: 1,
    },
  },
  {
    id: 'drowzee',
    dexNumber: 96,
    name: 'Drowzee',
    stats: {
      atk: 89,
      def: 136,
      sta: 155,
    },
    types: ['psychic'],
    family: {
      id: 'drowzee',
      stage: 1,
    },
  },
  {
    id: 'hypno',
    dexNumber: 97,
    name: 'Hypno',
    stats: {
      atk: 144,
      def: 193,
      sta: 198,
    },
    types: ['psychic'],
    family: {
      id: 'drowzee',
      stage: 2,
    },
  },
  {
    id: 'krabby',
    dexNumber: 98,
    name: 'Krabby',
    stats: {
      atk: 181,
      def: 124,
      sta: 102,
    },
    types: ['water'],
    family: {
      id: 'krabby',
      stage: 1,
    },
  },
  {
    id: 'kingler',
    dexNumber: 99,
    name: 'Kingler',
    stats: {
      atk: 240,
      def: 181,
      sta: 146,
    },
    types: ['water'],
    family: {
      id: 'krabby',
      stage: 2,
    },
  },
  {
    id: 'voltorb',
    dexNumber: 100,
    name: 'Voltorb',
    stats: {
      atk: 109,
      def: 111,
      sta: 120,
    },
    types: ['electric'],
    family: {
      id: 'voltorb',
      stage: 1,
    },
  },
  {
    id: 'voltorb_hisuian',
    dexNumber: 100,
    name: 'Voltorb (Hisuian)',
    stats: {
      atk: 109,
      def: 111,
      sta: 120,
    },
    types: ['electric', 'grass'],
    family: {
      id: 'voltorb_hisuian',
      stage: 1,
    },
  },
  {
    id: 'electrode',
    dexNumber: 101,
    name: 'Electrode',
    stats: {
      atk: 173,
      def: 173,
      sta: 155,
    },
    types: ['electric'],
    family: {
      id: 'voltorb',
      stage: 2,
    },
  },
  {
    id: 'electrode_hisuian',
    dexNumber: 101,
    name: 'Electrode (Hisuian)',
    stats: {
      atk: 176,
      def: 176,
      sta: 155,
    },
    types: ['electric', 'grass'],
    family: {
      id: 'voltorb_hisuian',
      stage: 2,
    },
  },
  {
    id: 'exeggcute',
    dexNumber: 102,
    name: 'Exeggcute',
    stats: {
      atk: 107,
      def: 125,
      sta: 155,
    },
    types: ['grass', 'psychic'],
    family: {
      id: 'exeggcute',
      stage: 1,
    },
  },
  {
    id: 'exeggutor',
    dexNumber: 103,
    name: 'Exeggutor',
    stats: {
      atk: 233,
      def: 149,
      sta: 216,
    },
    types: ['grass', 'psychic'],
    family: {
      id: 'exeggcute',
      stage: 2,
    },
  },
  {
    id: 'exeggutor_alolan',
    dexNumber: 103,
    name: 'Exeggutor (Alolan)',
    stats: {
      atk: 230,
      def: 153,
      sta: 216,
    },
    types: ['grass', 'dragon'],
    family: {
      id: 'exeggutor_alolan',
      stage: 2,
    },
  },
  {
    id: 'cubone',
    dexNumber: 104,
    name: 'Cubone',
    stats: {
      atk: 90,
      def: 144,
      sta: 137,
    },
    types: ['ground'],
    family: {
      id: 'cubone',
      stage: 1,
    },
  },
  {
    id: 'marowak',
    dexNumber: 105,
    name: 'Marowak',
    stats: {
      atk: 144,
      def: 186,
      sta: 155,
    },
    types: ['ground'],
    family: {
      id: 'cubone',
      stage: 2,
    },
  },
  {
    id: 'marowak_alolan',
    dexNumber: 105,
    name: 'Marowak (Alolan)',
    stats: {
      atk: 144,
      def: 186,
      sta: 155,
    },
    types: ['fire', 'ghost'],
    family: {
      id: 'marowak_alolan',
      stage: 1,
    },
  },
  {
    id: 'hitmonlee',
    dexNumber: 106,
    name: 'Hitmonlee',
    stats: {
      atk: 224,
      def: 181,
      sta: 137,
    },
    types: ['fighting'],
    family: {
      id: 'tyrogue',
      stage: 2,
    },
  },
  {
    id: 'hitmonchan',
    dexNumber: 107,
    name: 'Hitmonchan',
    stats: {
      atk: 193,
      def: 197,
      sta: 137,
    },
    types: ['fighting'],
    family: {
      id: 'tyrogue',
      stage: 2,
    },
  },
  {
    id: 'lickitung',
    dexNumber: 108,
    name: 'Lickitung',
    stats: {
      atk: 108,
      def: 137,
      sta: 207,
    },
    types: ['normal'],
    family: {
      id: 'lickitung',
      stage: 1,
    },
  },
  {
    id: 'koffing',
    dexNumber: 109,
    name: 'Koffing',
    stats: {
      atk: 119,
      def: 141,
      sta: 120,
    },
    types: ['poison'],
    family: {
      id: 'koffing',
      stage: 1,
    },
  },
  {
    id: 'weezing',
    dexNumber: 110,
    name: 'Weezing',
    stats: {
      atk: 174,
      def: 197,
      sta: 163,
    },
    types: ['poison'],
    family: {
      id: 'koffing',
      stage: 2,
    },
  },
  {
    id: 'weezing_galarian',
    dexNumber: 110,
    name: 'Weezing (Galarian)',
    stats: {
      atk: 174,
      def: 197,
      sta: 163,
    },
    types: ['poison', 'fairy'],
    family: {
      id: 'weezing_galarian',
      stage: 1,
    },
  },
  {
    id: 'rhyhorn',
    dexNumber: 111,
    name: 'Rhyhorn',
    stats: {
      atk: 140,
      def: 127,
      sta: 190,
    },
    types: ['ground', 'rock'],
    family: {
      id: 'rhyhorn',
      stage: 1,
    },
  },
  {
    id: 'rhydon',
    dexNumber: 112,
    name: 'Rhydon',
    stats: {
      atk: 222,
      def: 171,
      sta: 233,
    },
    types: ['ground', 'rock'],
    family: {
      id: 'rhyhorn',
      stage: 2,
    },
  },
  {
    id: 'chansey',
    dexNumber: 113,
    name: 'Chansey',
    stats: {
      atk: 60,
      def: 128,
      sta: 487,
    },
    types: ['normal'],
    family: {
      id: 'happiny',
      stage: 2,
    },
  },
  {
    id: 'tangela',
    dexNumber: 114,
    name: 'Tangela',
    stats: {
      atk: 183,
      def: 169,
      sta: 163,
    },
    types: ['grass'],
    family: {
      id: 'tangela',
      stage: 1,
    },
  },
  {
    id: 'kangaskhan',
    dexNumber: 115,
    name: 'Kangaskhan',
    stats: {
      atk: 181,
      def: 165,
      sta: 233,
    },
    types: ['normal'],
    family: {
      id: 'kangaskhan',
      stage: 1,
    },
  },
  {
    id: 'kangaskhan_mega',
    dexNumber: 115,
    name: 'Kangaskhan (Mega)',
    stats: {
      atk: 246,
      def: 210,
      sta: 233,
    },
    types: ['normal'],
    family: {
      id: 'kangaskhan',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'horsea',
    dexNumber: 116,
    name: 'Horsea',
    stats: {
      atk: 129,
      def: 103,
      sta: 102,
    },
    types: ['water'],
    family: {
      id: 'horsea',
      stage: 1,
    },
  },
  {
    id: 'seadra',
    dexNumber: 117,
    name: 'Seadra',
    stats: {
      atk: 187,
      def: 156,
      sta: 146,
    },
    types: ['water'],
    family: {
      id: 'horsea',
      stage: 2,
    },
  },
  {
    id: 'goldeen',
    dexNumber: 118,
    name: 'Goldeen',
    stats: {
      atk: 123,
      def: 110,
      sta: 128,
    },
    types: ['water'],
    family: {
      id: 'goldeen',
      stage: 1,
    },
  },
  {
    id: 'seaking',
    dexNumber: 119,
    name: 'Seaking',
    stats: {
      atk: 175,
      def: 147,
      sta: 190,
    },
    types: ['water'],
    family: {
      id: 'goldeen',
      stage: 2,
    },
  },
  {
    id: 'staryu',
    dexNumber: 120,
    name: 'Staryu',
    stats: {
      atk: 137,
      def: 112,
      sta: 102,
    },
    types: ['water'],
    family: {
      id: 'staryu',
      stage: 1,
    },
  },
  {
    id: 'starmie',
    dexNumber: 121,
    name: 'Starmie',
    stats: {
      atk: 210,
      def: 184,
      sta: 155,
    },
    types: ['water', 'psychic'],
    family: {
      id: 'staryu',
      stage: 2,
    },
  },
  {
    id: 'mr_mime',
    dexNumber: 122,
    name: 'Mr. Mime',
    stats: {
      atk: 192,
      def: 205,
      sta: 120,
    },
    types: ['psychic', 'fairy'],
    family: {
      id: 'mime_jr',
      stage: 2,
    },
  },
  {
    id: 'mr_mime_galarian',
    dexNumber: 122,
    name: 'Mr. Mime (Galarian)',
    stats: {
      atk: 183,
      def: 169,
      sta: 137,
    },
    types: ['ice', 'psychic'],
    family: {
      id: 'mr_mime_galarian',
      stage: 1,
    },
  },
  {
    id: 'scyther',
    dexNumber: 123,
    name: 'Scyther',
    stats: {
      atk: 218,
      def: 170,
      sta: 172,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'scyther',
      stage: 1,
    },
  },
  {
    id: 'jynx',
    dexNumber: 124,
    name: 'Jynx',
    stats: {
      atk: 223,
      def: 151,
      sta: 163,
    },
    types: ['ice', 'psychic'],
    family: {
      id: 'smoochum',
      stage: 2,
    },
  },
  {
    id: 'electabuzz',
    dexNumber: 125,
    name: 'Electabuzz',
    stats: {
      atk: 198,
      def: 158,
      sta: 163,
    },
    types: ['electric'],
    family: {
      id: 'elekid',
      stage: 2,
    },
  },
  {
    id: 'magmar',
    dexNumber: 126,
    name: 'Magmar',
    stats: {
      atk: 206,
      def: 154,
      sta: 163,
    },
    types: ['fire'],
    family: {
      id: 'magby',
      stage: 2,
    },
  },
  {
    id: 'pinsir',
    dexNumber: 127,
    name: 'Pinsir',
    stats: {
      atk: 238,
      def: 182,
      sta: 163,
    },
    types: ['bug'],
    family: {
      id: 'pinsir',
      stage: 1,
    },
  },
  {
    id: 'pinsir_mega',
    dexNumber: 127,
    name: 'Pinsir (Mega)',
    stats: {
      atk: 305,
      def: 231,
      sta: 163,
    },
    types: ['bug'],
    family: {
      id: 'pinsir',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'tauros',
    dexNumber: 128,
    name: 'Tauros',
    stats: {
      atk: 198,
      def: 183,
      sta: 181,
    },
    types: ['normal'],
    family: {
      id: 'tauros',
      stage: 1,
    },
  },
  {
    id: 'magikarp',
    dexNumber: 129,
    name: 'Magikarp',
    stats: {
      atk: 29,
      def: 85,
      sta: 85,
    },
    types: ['water'],
    family: {
      id: 'magikarp',
      stage: 1,
    },
  },
  {
    id: 'gyarados',
    dexNumber: 130,
    name: 'Gyarados',
    stats: {
      atk: 237,
      def: 186,
      sta: 216,
    },
    types: ['water', 'flying'],
    family: {
      id: 'magikarp',
      stage: 2,
    },
  },
  {
    id: 'gyarados_mega',
    dexNumber: 130,
    name: 'Gyarados (Mega)',
    stats: {
      atk: 292,
      def: 247,
      sta: 216,
    },
    types: ['water', 'dark'],
    family: {
      id: 'magikarp',
      stage: 3,
    },
  },
  {
    id: 'lapras',
    dexNumber: 131,
    name: 'Lapras',
    stats: {
      atk: 165,
      def: 174,
      sta: 277,
    },
    types: ['water', 'ice'],
    family: {
      id: 'lapras',
      stage: 1,
    },
  },
  {
    id: 'ditto',
    dexNumber: 132,
    name: 'Ditto',
    stats: {
      atk: 91,
      def: 91,
      sta: 134,
    },
    types: ['normal'],
    family: {
      id: 'ditto',
      stage: 1,
    },
  },
  {
    id: 'eevee',
    dexNumber: 133,
    name: 'Eevee',
    stats: {
      atk: 104,
      def: 114,
      sta: 146,
    },
    types: ['normal'],
    family: {
      id: 'eevee',
      stage: 1,
    },
  },
  {
    id: 'vaporeon',
    dexNumber: 134,
    name: 'Vaporeon',
    stats: {
      atk: 205,
      def: 161,
      sta: 277,
    },
    types: ['water'],
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'jolteon',
    dexNumber: 135,
    name: 'Jolteon',
    stats: {
      atk: 232,
      def: 182,
      sta: 163,
    },
    types: ['electric'],
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'flareon',
    dexNumber: 136,
    name: 'Flareon',
    stats: {
      atk: 246,
      def: 179,
      sta: 163,
    },
    types: ['fire'],
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'porygon',
    dexNumber: 137,
    name: 'Porygon',
    stats: {
      atk: 153,
      def: 136,
      sta: 163,
    },
    types: ['normal'],
    family: {
      id: 'porygon',
      stage: 1,
    },
  },
  {
    id: 'omanyte',
    dexNumber: 138,
    name: 'Omanyte',
    stats: {
      atk: 155,
      def: 153,
      sta: 111,
    },
    types: ['rock', 'water'],
    family: {
      id: 'omanyte',
      stage: 1,
    },
  },
  {
    id: 'omastar',
    dexNumber: 139,
    name: 'Omastar',
    stats: {
      atk: 207,
      def: 201,
      sta: 172,
    },
    types: ['rock', 'water'],
    family: {
      id: 'omanyte',
      stage: 2,
    },
  },
  {
    id: 'kabuto',
    dexNumber: 140,
    name: 'Kabuto',
    stats: {
      atk: 148,
      def: 140,
      sta: 102,
    },
    types: ['rock', 'water'],
    family: {
      id: 'kabuto',
      stage: 1,
    },
  },
  {
    id: 'kabutops',
    dexNumber: 141,
    name: 'Kabutops',
    stats: {
      atk: 220,
      def: 186,
      sta: 155,
    },
    types: ['rock', 'water'],
    family: {
      id: 'kabuto',
      stage: 2,
    },
  },
  {
    id: 'aerodactyl',
    dexNumber: 142,
    name: 'Aerodactyl',
    stats: {
      atk: 221,
      def: 159,
      sta: 190,
    },
    types: ['rock', 'flying'],
    family: {
      id: 'aerodactyl',
      stage: 1,
    },
  },
  {
    id: 'aerodactyl_mega',
    dexNumber: 142,
    name: 'Aerodactyl (Mega)',
    stats: {
      atk: 292,
      def: 210,
      sta: 190,
    },
    types: ['rock', 'flying'],
    family: {
      id: 'aerodactyl',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'snorlax',
    dexNumber: 143,
    name: 'Snorlax',
    stats: {
      atk: 190,
      def: 169,
      sta: 330,
    },
    types: ['normal'],
    family: {
      id: 'munchlax',
      stage: 2,
    },
  },
  {
    id: 'articuno',
    dexNumber: 144,
    name: 'Articuno',
    stats: {
      atk: 192,
      def: 236,
      sta: 207,
    },
    types: ['ice', 'flying'],
    floor: 1,
    family: {
      id: 'articuno',
      stage: 1,
    },
  },
  {
    id: 'zapdos',
    dexNumber: 145,
    name: 'Zapdos',
    stats: {
      atk: 253,
      def: 185,
      sta: 207,
    },
    types: ['electric', 'flying'],
    floor: 1,
    family: {
      id: 'zapdos',
      stage: 1,
    },
  },
  {
    id: 'moltres',
    dexNumber: 146,
    name: 'Moltres',
    stats: {
      atk: 251,
      def: 181,
      sta: 207,
    },
    types: ['fire', 'flying'],
    floor: 1,
    family: {
      id: 'moltres',
      stage: 1,
    },
  },
  {
    id: 'dratini',
    dexNumber: 147,
    name: 'Dratini',
    stats: {
      atk: 119,
      def: 91,
      sta: 121,
    },
    types: ['dragon'],
    family: {
      id: 'dratini',
      stage: 1,
    },
  },
  {
    id: 'dragonair',
    dexNumber: 148,
    name: 'Dragonair',
    stats: {
      atk: 163,
      def: 135,
      sta: 156,
    },
    types: ['dragon'],
    family: {
      id: 'dratini',
      stage: 2,
    },
  },
  {
    id: 'dragonite',
    dexNumber: 149,
    name: 'Dragonite',
    stats: {
      atk: 263,
      def: 198,
      sta: 209,
    },
    types: ['dragon', 'flying'],
    family: {
      id: 'dratini',
      stage: 3,
    },
  },
  {
    id: 'mewtwo',
    dexNumber: 150,
    name: 'Mewtwo',
    stats: {
      atk: 300,
      def: 182,
      sta: 214,
    },
    types: ['psychic'],
    floor: 1,
    family: {
      id: 'mewtwo',
      stage: 1,
    },
  },
  {
    id: 'mewtwo_armored',
    dexNumber: 150,
    name: 'Mewtwo (Armored)',
    stats: {
      atk: 182,
      def: 278,
      sta: 214,
    },
    types: ['psychic'],
    floor: 1,
    family: {
      id: 'mewtwo_armored',
      stage: 1,
    },
  },
  {
    id: 'mewtwo_mega_x',
    dexNumber: 150,
    name: 'Mewtwo (Mega X)',
    stats: {
      atk: 375,
      def: 202,
      sta: 214,
    },
    types: ['psychic'],
    floor: 1,
    family: {
      id: 'mewtwo',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'mewtwo_mega_y',
    dexNumber: 150,
    name: 'Mewtwo (Mega Y)',
    stats: {
      atk: 388,
      def: 208,
      sta: 214,
    },
    types: ['psychic'],
    floor: 1,
    family: {
      id: 'mewtwo',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'mew',
    dexNumber: 151,
    name: 'Mew',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    types: ['psychic'],
    floor: 10,
    family: {
      id: 'mew',
      stage: 1,
    },
  },
  {
    id: 'chikorita',
    dexNumber: 152,
    name: 'Chikorita',
    stats: {
      atk: 92,
      def: 122,
      sta: 128,
    },
    types: ['grass'],
    family: {
      id: 'chikorita',
      stage: 1,
    },
  },
  {
    id: 'bayleef',
    dexNumber: 153,
    name: 'Bayleef',
    stats: {
      atk: 122,
      def: 155,
      sta: 155,
    },
    types: ['grass'],
    family: {
      id: 'chikorita',
      stage: 2,
    },
  },
  {
    id: 'meganium',
    dexNumber: 154,
    name: 'Meganium',
    stats: {
      atk: 168,
      def: 202,
      sta: 190,
    },
    types: ['grass'],
    family: {
      id: 'chikorita',
      stage: 3,
    },
  },
  {
    id: 'cyndaquil',
    dexNumber: 155,
    name: 'Cyndaquil',
    stats: {
      atk: 116,
      def: 93,
      sta: 118,
    },
    types: ['fire'],
    family: {
      id: 'cyndaquil',
      stage: 1,
    },
  },
  {
    id: 'quilava',
    dexNumber: 156,
    name: 'Quilava',
    stats: {
      atk: 158,
      def: 126,
      sta: 151,
    },
    types: ['fire'],
    family: {
      id: 'cyndaquil',
      stage: 2,
    },
  },
  {
    id: 'typhlosion',
    dexNumber: 157,
    name: 'Typhlosion',
    stats: {
      atk: 223,
      def: 173,
      sta: 186,
    },
    types: ['fire'],
    family: {
      id: 'cyndaquil',
      stage: 3,
    },
  },
  {
    id: 'totodile',
    dexNumber: 158,
    name: 'Totodile',
    stats: {
      atk: 117,
      def: 109,
      sta: 137,
    },
    types: ['water'],
    family: {
      id: 'totodile',
      stage: 1,
    },
  },
  {
    id: 'croconaw',
    dexNumber: 159,
    name: 'Croconaw',
    stats: {
      atk: 150,
      def: 142,
      sta: 163,
    },
    types: ['water'],
    family: {
      id: 'totodile',
      stage: 2,
    },
  },
  {
    id: 'feraligatr',
    dexNumber: 160,
    name: 'Feraligatr',
    stats: {
      atk: 205,
      def: 188,
      sta: 198,
    },
    types: ['water'],
    family: {
      id: 'totodile',
      stage: 3,
    },
  },
  {
    id: 'sentret',
    dexNumber: 161,
    name: 'Sentret',
    stats: {
      atk: 79,
      def: 73,
      sta: 111,
    },
    types: ['normal'],
    family: {
      id: 'sentret',
      stage: 1,
    },
  },
  {
    id: 'furret',
    dexNumber: 162,
    name: 'Furret',
    stats: {
      atk: 148,
      def: 125,
      sta: 198,
    },
    types: ['normal'],
    family: {
      id: 'sentret',
      stage: 2,
    },
  },
  {
    id: 'hoothoot',
    dexNumber: 163,
    name: 'Hoothoot',
    stats: {
      atk: 67,
      def: 88,
      sta: 155,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'hoothoot',
      stage: 1,
    },
  },
  {
    id: 'noctowl',
    dexNumber: 164,
    name: 'Noctowl',
    stats: {
      atk: 145,
      def: 156,
      sta: 225,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'hoothoot',
      stage: 2,
    },
  },
  {
    id: 'ledyba',
    dexNumber: 165,
    name: 'Ledyba',
    stats: {
      atk: 72,
      def: 118,
      sta: 120,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'ledyba',
      stage: 1,
    },
  },
  {
    id: 'ledian',
    dexNumber: 166,
    name: 'Ledian',
    stats: {
      atk: 107,
      def: 179,
      sta: 146,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'ledyba',
      stage: 2,
    },
  },
  {
    id: 'spinarak',
    dexNumber: 167,
    name: 'Spinarak',
    stats: {
      atk: 105,
      def: 73,
      sta: 120,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'spinarak',
      stage: 1,
    },
  },
  {
    id: 'ariados',
    dexNumber: 168,
    name: 'Ariados',
    stats: {
      atk: 161,
      def: 124,
      sta: 172,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'spinarak',
      stage: 2,
    },
  },
  {
    id: 'crobat',
    dexNumber: 169,
    name: 'Crobat',
    stats: {
      atk: 194,
      def: 178,
      sta: 198,
    },
    types: ['poison', 'flying'],
    family: {
      id: 'zubat',
      stage: 3,
    },
  },
  {
    id: 'chinchou',
    dexNumber: 170,
    name: 'Chinchou',
    stats: {
      atk: 106,
      def: 97,
      sta: 181,
    },
    types: ['water', 'electric'],
    family: {
      id: 'chinchou',
      stage: 1,
    },
  },
  {
    id: 'lanturn',
    dexNumber: 171,
    name: 'Lanturn',
    stats: {
      atk: 146,
      def: 137,
      sta: 268,
    },
    types: ['water', 'electric'],
    family: {
      id: 'chinchou',
      stage: 2,
    },
  },
  {
    id: 'pichu',
    dexNumber: 172,
    name: 'Pichu',
    stats: {
      atk: 77,
      def: 53,
      sta: 85,
    },
    types: ['electric'],
    family: {
      id: 'pichu',
      stage: 1,
    },
  },
  {
    id: 'cleffa',
    dexNumber: 173,
    name: 'Cleffa',
    stats: {
      atk: 75,
      def: 79,
      sta: 137,
    },
    types: ['fairy'],
    family: {
      id: 'cleffa',
      stage: 1,
    },
  },
  {
    id: 'igglybuff',
    dexNumber: 174,
    name: 'Igglybuff',
    stats: {
      atk: 69,
      def: 32,
      sta: 207,
    },
    types: ['normal', 'fairy'],
    family: {
      id: 'igglybuff',
      stage: 1,
    },
  },
  {
    id: 'togepi',
    dexNumber: 175,
    name: 'Togepi',
    stats: {
      atk: 67,
      def: 116,
      sta: 111,
    },
    types: ['fairy'],
    family: {
      id: 'togepi',
      stage: 1,
    },
  },
  {
    id: 'togetic',
    dexNumber: 176,
    name: 'Togetic',
    stats: {
      atk: 139,
      def: 181,
      sta: 146,
    },
    types: ['fairy', 'flying'],
    family: {
      id: 'togepi',
      stage: 2,
    },
  },
  {
    id: 'natu',
    dexNumber: 177,
    name: 'Natu',
    stats: {
      atk: 134,
      def: 89,
      sta: 120,
    },
    types: ['psychic', 'flying'],
    family: {
      id: 'natu',
      stage: 1,
    },
  },
  {
    id: 'xatu',
    dexNumber: 178,
    name: 'Xatu',
    stats: {
      atk: 192,
      def: 146,
      sta: 163,
    },
    types: ['psychic', 'flying'],
    family: {
      id: 'natu',
      stage: 2,
    },
  },
  {
    id: 'mareep',
    dexNumber: 179,
    name: 'Mareep',
    stats: {
      atk: 114,
      def: 79,
      sta: 146,
    },
    types: ['electric'],
    family: {
      id: 'mareep',
      stage: 1,
    },
  },
  {
    id: 'flaaffy',
    dexNumber: 180,
    name: 'Flaaffy',
    stats: {
      atk: 145,
      def: 109,
      sta: 172,
    },
    types: ['electric'],
    family: {
      id: 'mareep',
      stage: 2,
    },
  },
  {
    id: 'ampharos',
    dexNumber: 181,
    name: 'Ampharos',
    stats: {
      atk: 211,
      def: 169,
      sta: 207,
    },
    types: ['electric'],
    family: {
      id: 'mareep',
      stage: 3,
    },
  },
  {
    id: 'ampharos_mega',
    dexNumber: 181,
    name: 'Ampharos (Mega)',
    stats: {
      atk: 294,
      def: 203,
      sta: 207,
    },
    types: ['electric', 'dragon'],
    family: {
      id: 'mareep',
      stage: 4,
    },
  },
  {
    id: 'bellossom',
    dexNumber: 182,
    name: 'Bellossom',
    stats: {
      atk: 169,
      def: 186,
      sta: 181,
    },
    types: ['grass'],
    family: {
      id: 'oddish',
      stage: 3,
    },
  },
  {
    id: 'marill',
    dexNumber: 183,
    name: 'Marill',
    stats: {
      atk: 37,
      def: 93,
      sta: 172,
    },
    types: ['water', 'fairy'],
    family: {
      id: 'azurill',
      stage: 2,
    },
  },
  {
    id: 'azumarill',
    dexNumber: 184,
    name: 'Azumarill',
    stats: {
      atk: 112,
      def: 152,
      sta: 225,
    },
    types: ['water', 'fairy'],
    family: {
      id: 'azurill',
      stage: 3,
    },
  },
  {
    id: 'sudowoodo',
    dexNumber: 185,
    name: 'Sudowoodo',
    stats: {
      atk: 167,
      def: 176,
      sta: 172,
    },
    types: ['rock'],
    family: {
      id: 'bonsly',
      stage: 2,
    },
  },
  {
    id: 'politoed',
    dexNumber: 186,
    name: 'Politoed',
    stats: {
      atk: 174,
      def: 179,
      sta: 207,
    },
    types: ['water'],
    family: {
      id: 'poliwag',
      stage: 4,
    },
  },
  {
    id: 'hoppip',
    dexNumber: 187,
    name: 'Hoppip',
    stats: {
      atk: 67,
      def: 94,
      sta: 111,
    },
    types: ['grass', 'flying'],
    family: {
      id: 'hoppip',
      stage: 1,
    },
  },
  {
    id: 'skiploom',
    dexNumber: 188,
    name: 'Skiploom',
    stats: {
      atk: 91,
      def: 120,
      sta: 146,
    },
    types: ['grass', 'flying'],
    family: {
      id: 'hoppip',
      stage: 2,
    },
  },
  {
    id: 'jumpluff',
    dexNumber: 189,
    name: 'Jumpluff',
    stats: {
      atk: 118,
      def: 183,
      sta: 181,
    },
    types: ['grass', 'flying'],
    family: {
      id: 'hoppip',
      stage: 3,
    },
  },
  {
    id: 'aipom',
    dexNumber: 190,
    name: 'Aipom',
    stats: {
      atk: 136,
      def: 112,
      sta: 146,
    },
    types: ['normal'],
    family: {
      id: 'aipom',
      stage: 1,
    },
  },
  {
    id: 'sunkern',
    dexNumber: 191,
    name: 'Sunkern',
    stats: {
      atk: 55,
      def: 55,
      sta: 102,
    },
    types: ['grass'],
    family: {
      id: 'sunkern',
      stage: 1,
    },
  },
  {
    id: 'sunflora',
    dexNumber: 192,
    name: 'Sunflora',
    stats: {
      atk: 185,
      def: 135,
      sta: 181,
    },
    types: ['grass'],
    family: {
      id: 'sunkern',
      stage: 2,
    },
  },
  {
    id: 'yanma',
    dexNumber: 193,
    name: 'Yanma',
    stats: {
      atk: 154,
      def: 94,
      sta: 163,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'yanma',
      stage: 1,
    },
  },
  {
    id: 'wooper',
    dexNumber: 194,
    name: 'Wooper',
    stats: {
      atk: 75,
      def: 66,
      sta: 146,
    },
    types: ['water', 'ground'],
    family: {
      id: 'wooper',
      stage: 1,
    },
  },
  {
    id: 'quagsire',
    dexNumber: 195,
    name: 'Quagsire',
    stats: {
      atk: 152,
      def: 143,
      sta: 216,
    },
    types: ['water', 'ground'],
    family: {
      id: 'wooper',
      stage: 2,
    },
  },
  {
    id: 'espeon',
    dexNumber: 196,
    name: 'Espeon',
    stats: {
      atk: 261,
      def: 175,
      sta: 163,
    },
    types: ['psychic'],
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'umbreon',
    dexNumber: 197,
    name: 'Umbreon',
    stats: {
      atk: 126,
      def: 240,
      sta: 216,
    },
    types: ['dark'],
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'murkrow',
    dexNumber: 198,
    name: 'Murkrow',
    stats: {
      atk: 175,
      def: 87,
      sta: 155,
    },
    types: ['dark', 'flying'],
    family: {
      id: 'murkrow',
      stage: 1,
    },
  },
  {
    id: 'slowking',
    dexNumber: 199,
    name: 'Slowking',
    stats: {
      atk: 177,
      def: 180,
      sta: 216,
    },
    types: ['water', 'psychic'],
    family: {
      id: 'slowpoke',
      stage: 2,
    },
  },
  {
    id: 'misdreavus',
    dexNumber: 200,
    name: 'Misdreavus',
    stats: {
      atk: 167,
      def: 154,
      sta: 155,
    },
    types: ['ghost'],
    family: {
      id: 'misdreavus',
      stage: 1,
    },
  },
  {
    id: 'unown',
    dexNumber: 201,
    name: 'Unown',
    stats: {
      atk: 136,
      def: 91,
      sta: 134,
    },
    types: ['psychic'],
    family: {
      id: 'unown',
      stage: 1,
    },
  },
  {
    id: 'wobbuffet',
    dexNumber: 202,
    name: 'Wobbuffet',
    stats: {
      atk: 60,
      def: 106,
      sta: 382,
    },
    types: ['psychic'],
    family: {
      id: 'wynaut',
      stage: 2,
    },
  },
  {
    id: 'girafarig',
    dexNumber: 203,
    name: 'Girafarig',
    stats: {
      atk: 182,
      def: 133,
      sta: 172,
    },
    types: ['normal', 'psychic'],
    family: {
      id: 'girafarig',
      stage: 1,
    },
  },
  {
    id: 'pineco',
    dexNumber: 204,
    name: 'Pineco',
    stats: {
      atk: 108,
      def: 122,
      sta: 137,
    },
    types: ['bug'],
    family: {
      id: 'pineco',
      stage: 1,
    },
  },
  {
    id: 'forretress',
    dexNumber: 205,
    name: 'Forretress',
    stats: {
      atk: 161,
      def: 205,
      sta: 181,
    },
    types: ['bug', 'steel'],
    family: {
      id: 'pineco',
      stage: 2,
    },
  },
  {
    id: 'dunsparce',
    dexNumber: 206,
    name: 'Dunsparce',
    stats: {
      atk: 131,
      def: 128,
      sta: 225,
    },
    types: ['normal'],
    family: {
      id: 'dunsparce',
      stage: 1,
    },
  },
  {
    id: 'gligar',
    dexNumber: 207,
    name: 'Gligar',
    stats: {
      atk: 143,
      def: 184,
      sta: 163,
    },
    types: ['ground', 'flying'],
    family: {
      id: 'gligar',
      stage: 1,
    },
  },
  {
    id: 'steelix',
    dexNumber: 208,
    name: 'Steelix',
    stats: {
      atk: 148,
      def: 272,
      sta: 181,
    },
    types: ['steel', 'ground'],
    family: {
      id: 'onix',
      stage: 2,
    },
  },
  {
    id: 'steelix_mega',
    dexNumber: 208,
    name: 'Steelix (Mega)',
    stats: {
      atk: 212,
      def: 327,
      sta: 181,
    },
    types: ['steel', 'ground'],
    family: {
      id: 'onix',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'snubbull',
    dexNumber: 209,
    name: 'Snubbull',
    stats: {
      atk: 137,
      def: 85,
      sta: 155,
    },
    types: ['fairy'],
    family: {
      id: 'snubbull',
      stage: 1,
    },
  },
  {
    id: 'granbull',
    dexNumber: 210,
    name: 'Granbull',
    stats: {
      atk: 212,
      def: 131,
      sta: 207,
    },
    types: ['fairy'],
    family: {
      id: 'snubbull',
      stage: 2,
    },
  },
  {
    id: 'qwilfish',
    dexNumber: 211,
    name: 'Qwilfish',
    stats: {
      atk: 184,
      def: 138,
      sta: 163,
    },
    types: ['water', 'poison'],
    family: {
      id: 'qwilfish',
      stage: 1,
    },
  },
  {
    id: 'scizor',
    dexNumber: 212,
    name: 'Scizor',
    stats: {
      atk: 236,
      def: 181,
      sta: 172,
    },
    types: ['bug', 'steel'],
    family: {
      id: 'scyther',
      stage: 2,
    },
  },
  {
    id: 'scizor_mega',
    dexNumber: 212,
    name: 'Scizor (Mega)',
    stats: {
      atk: 279,
      def: 250,
      sta: 172,
    },
    types: ['bug', 'steel'],
    family: {
      id: 'scyther',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'shuckle',
    dexNumber: 213,
    name: 'Shuckle',
    stats: {
      atk: 17,
      def: 396,
      sta: 85,
    },
    types: ['bug', 'rock'],
    family: {
      id: 'shuckle',
      stage: 1,
    },
  },
  {
    id: 'heracross',
    dexNumber: 214,
    name: 'Heracross',
    stats: {
      atk: 234,
      def: 179,
      sta: 190,
    },
    types: ['bug', 'fighting'],
    family: {
      id: 'heracross',
      stage: 1,
    },
  },
  {
    id: 'heracross_mega',
    dexNumber: 214,
    name: 'Heracross (Mega)',
    stats: {
      atk: 334,
      def: 223,
      sta: 190,
    },
    types: ['bug', 'fighting'],
    family: {
      id: 'heracross',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'sneasel',
    dexNumber: 215,
    name: 'Sneasel',
    stats: {
      atk: 189,
      def: 146,
      sta: 146,
    },
    types: ['dark', 'ice'],
    family: {
      id: 'sneasel',
      stage: 1,
    },
  },
  {
    id: 'teddiursa',
    dexNumber: 216,
    name: 'Teddiursa',
    stats: {
      atk: 142,
      def: 93,
      sta: 155,
    },
    types: ['normal'],
    family: {
      id: 'teddiursa',
      stage: 1,
    },
  },
  {
    id: 'ursaring',
    dexNumber: 217,
    name: 'Ursaring',
    stats: {
      atk: 236,
      def: 144,
      sta: 207,
    },
    types: ['normal'],
    family: {
      id: 'teddiursa',
      stage: 2,
    },
  },
  {
    id: 'slugma',
    dexNumber: 218,
    name: 'Slugma',
    stats: {
      atk: 118,
      def: 71,
      sta: 120,
    },
    types: ['fire'],
    family: {
      id: 'slugma',
      stage: 1,
    },
  },
  {
    id: 'magcargo',
    dexNumber: 219,
    name: 'Magcargo',
    stats: {
      atk: 139,
      def: 191,
      sta: 137,
    },
    types: ['fire', 'rock'],
    family: {
      id: 'slugma',
      stage: 2,
    },
  },
  {
    id: 'swinub',
    dexNumber: 220,
    name: 'Swinub',
    stats: {
      atk: 90,
      def: 69,
      sta: 137,
    },
    types: ['ice', 'ground'],
    family: {
      id: 'swinub',
      stage: 1,
    },
  },
  {
    id: 'piloswine',
    dexNumber: 221,
    name: 'Piloswine',
    stats: {
      atk: 181,
      def: 138,
      sta: 225,
    },
    types: ['ice', 'ground'],
    family: {
      id: 'swinub',
      stage: 2,
    },
  },
  {
    id: 'corsola',
    dexNumber: 222,
    name: 'Corsola',
    stats: {
      atk: 118,
      def: 156,
      sta: 146,
    },
    types: ['water', 'rock'],
    family: {
      id: 'corsola',
      stage: 1,
    },
  },
  {
    id: 'corsola_galarian',
    dexNumber: 222,
    name: 'Corsola (Galarian)',
    stats: {
      atk: 116,
      def: 182,
      sta: 155,
    },
    types: ['ghost'],
    family: {
      id: 'corsola_galarian',
      stage: 1,
    },
  },
  {
    id: 'remoraid',
    dexNumber: 223,
    name: 'Remoraid',
    stats: {
      atk: 127,
      def: 69,
      sta: 111,
    },
    types: ['water'],
    family: {
      id: 'remoraid',
      stage: 1,
    },
  },
  {
    id: 'octillery',
    dexNumber: 224,
    name: 'Octillery',
    stats: {
      atk: 197,
      def: 141,
      sta: 181,
    },
    types: ['water'],
    family: {
      id: 'remoraid',
      stage: 2,
    },
  },
  {
    id: 'delibird',
    dexNumber: 225,
    name: 'Delibird',
    stats: {
      atk: 128,
      def: 90,
      sta: 128,
    },
    types: ['ice', 'flying'],
    family: {
      id: 'delibird',
      stage: 1,
    },
  },
  {
    id: 'mantine',
    dexNumber: 226,
    name: 'Mantine',
    stats: {
      atk: 148,
      def: 226,
      sta: 163,
    },
    types: ['water', 'flying'],
    family: {
      id: 'mantyke',
      stage: 2,
    },
  },
  {
    id: 'skarmory',
    dexNumber: 227,
    name: 'Skarmory',
    stats: {
      atk: 148,
      def: 226,
      sta: 163,
    },
    types: ['steel', 'flying'],
    family: {
      id: 'skarmory',
      stage: 1,
    },
  },
  {
    id: 'houndour',
    dexNumber: 228,
    name: 'Houndour',
    stats: {
      atk: 152,
      def: 83,
      sta: 128,
    },
    types: ['dark', 'fire'],
    family: {
      id: 'houndour',
      stage: 1,
    },
  },
  {
    id: 'houndoom',
    dexNumber: 229,
    name: 'Houndoom',
    stats: {
      atk: 224,
      def: 144,
      sta: 181,
    },
    types: ['dark', 'fire'],
    family: {
      id: 'houndour',
      stage: 2,
    },
  },
  {
    id: 'houndoom_mega',
    dexNumber: 229,
    name: 'Houndoom (Mega)',
    stats: {
      atk: 289,
      def: 194,
      sta: 181,
    },
    types: ['dark', 'fire'],
    family: {
      id: 'houndour',
      stage: 3,
    },
  },
  {
    id: 'kingdra',
    dexNumber: 230,
    name: 'Kingdra',
    stats: {
      atk: 194,
      def: 194,
      sta: 181,
    },
    types: ['water', 'dragon'],
    family: {
      id: 'horsea',
      stage: 3,
    },
  },
  {
    id: 'phanpy',
    dexNumber: 231,
    name: 'Phanpy',
    stats: {
      atk: 107,
      def: 98,
      sta: 207,
    },
    types: ['ground'],
    family: {
      id: 'phanpy',
      stage: 1,
    },
  },
  {
    id: 'donphan',
    dexNumber: 232,
    name: 'Donphan',
    stats: {
      atk: 214,
      def: 185,
      sta: 207,
    },
    types: ['ground'],
    family: {
      id: 'phanpy',
      stage: 2,
    },
  },
  {
    id: 'porygon2',
    dexNumber: 233,
    name: 'Porygon2',
    stats: {
      atk: 198,
      def: 180,
      sta: 198,
    },
    types: ['normal'],
    family: {
      id: 'porygon',
      stage: 2,
    },
  },
  {
    id: 'stantler',
    dexNumber: 234,
    name: 'Stantler',
    stats: {
      atk: 192,
      def: 131,
      sta: 177,
    },
    types: ['normal'],
    family: {
      id: 'stantler',
      stage: 1,
    },
  },
  {
    id: 'smeargle',
    dexNumber: 235,
    name: 'Smeargle',
    stats: {
      atk: 40,
      def: 83,
      sta: 146,
    },
    types: ['normal'],
    family: {
      id: 'smeargle',
      stage: 1,
    },
  },
  {
    id: 'tyrogue',
    dexNumber: 236,
    name: 'Tyrogue',
    stats: {
      atk: 64,
      def: 64,
      sta: 111,
    },
    types: ['fighting'],
    family: {
      id: 'tyrogue',
      stage: 1,
    },
  },
  {
    id: 'hitmontop',
    dexNumber: 237,
    name: 'Hitmontop',
    stats: {
      atk: 173,
      def: 207,
      sta: 137,
    },
    types: ['fighting'],
    family: {
      id: 'tyrogue',
      stage: 2,
    },
  },
  {
    id: 'smoochum',
    dexNumber: 238,
    name: 'Smoochum',
    stats: {
      atk: 153,
      def: 91,
      sta: 128,
    },
    types: ['ice', 'psychic'],
    family: {
      id: 'smoochum',
      stage: 1,
    },
  },
  {
    id: 'elekid',
    dexNumber: 239,
    name: 'Elekid',
    stats: {
      atk: 135,
      def: 101,
      sta: 128,
    },
    types: ['electric'],
    family: {
      id: 'elekid',
      stage: 1,
    },
  },
  {
    id: 'magby',
    dexNumber: 240,
    name: 'Magby',
    stats: {
      atk: 151,
      def: 99,
      sta: 128,
    },
    types: ['fire'],
    family: {
      id: 'magby',
      stage: 1,
    },
  },
  {
    id: 'miltank',
    dexNumber: 241,
    name: 'Miltank',
    stats: {
      atk: 157,
      def: 193,
      sta: 216,
    },
    types: ['normal'],
    family: {
      id: 'miltank',
      stage: 1,
    },
  },
  {
    id: 'blissey',
    dexNumber: 242,
    name: 'Blissey',
    stats: {
      atk: 129,
      def: 169,
      sta: 496,
    },
    types: ['normal'],
    family: {
      id: 'happiny',
      stage: 3,
    },
  },
  {
    id: 'raikou',
    dexNumber: 243,
    name: 'Raikou',
    stats: {
      atk: 241,
      def: 195,
      sta: 207,
    },
    types: ['electric'],
    floor: 1,
    family: {
      id: 'raikou',
      stage: 1,
    },
  },
  {
    id: 'entei',
    dexNumber: 244,
    name: 'Entei',
    stats: {
      atk: 235,
      def: 171,
      sta: 251,
    },
    types: ['fire'],
    floor: 1,
    family: {
      id: 'entei',
      stage: 1,
    },
  },
  {
    id: 'suicune',
    dexNumber: 245,
    name: 'Suicune',
    stats: {
      atk: 180,
      def: 235,
      sta: 225,
    },
    types: ['water'],
    floor: 1,
    family: {
      id: 'suicune',
      stage: 1,
    },
  },
  {
    id: 'larvitar',
    dexNumber: 246,
    name: 'Larvitar',
    stats: {
      atk: 115,
      def: 93,
      sta: 137,
    },
    types: ['rock', 'ground'],
    family: {
      id: 'larvitar',
      stage: 1,
    },
  },
  {
    id: 'pupitar',
    dexNumber: 247,
    name: 'Pupitar',
    stats: {
      atk: 155,
      def: 133,
      sta: 172,
    },
    types: ['rock', 'ground'],
    family: {
      id: 'larvitar',
      stage: 2,
    },
  },
  {
    id: 'tyranitar',
    dexNumber: 248,
    name: 'Tyranitar',
    stats: {
      atk: 251,
      def: 207,
      sta: 225,
    },
    types: ['rock', 'dark'],
    family: {
      id: 'larvitar',
      stage: 3,
    },
  },
  {
    id: 'tyranitar_mega',
    dexNumber: 248,
    name: 'Tyranitar (Mega)',
    stats: {
      atk: 309,
      def: 276,
      sta: 225,
    },
    types: ['rock', 'dark'],
    family: {
      id: 'larvitar',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'lugia',
    dexNumber: 249,
    name: 'Lugia',
    stats: {
      atk: 193,
      def: 310,
      sta: 235,
    },
    types: ['psychic', 'flying'],
    floor: 1,
    family: {
      id: 'lugia',
      stage: 1,
    },
  },
  {
    id: 'ho_oh',
    dexNumber: 250,
    name: 'Ho-Oh',
    stats: {
      atk: 239,
      def: 244,
      sta: 214,
    },
    types: ['fire', 'flying'],
    floor: 1,
    family: {
      id: 'ho_oh',
      stage: 1,
    },
  },
  {
    id: 'celebi',
    dexNumber: 251,
    name: 'Celebi',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    types: ['psychic', 'grass'],
    floor: 10,
    family: {
      id: 'celebi',
      stage: 1,
    },
  },
  {
    id: 'treecko',
    dexNumber: 252,
    name: 'Treecko',
    stats: {
      atk: 124,
      def: 94,
      sta: 120,
    },
    types: ['grass'],
    family: {
      id: 'treecko',
      stage: 1,
    },
  },
  {
    id: 'grovyle',
    dexNumber: 253,
    name: 'Grovyle',
    stats: {
      atk: 172,
      def: 120,
      sta: 137,
    },
    types: ['grass'],
    family: {
      id: 'treecko',
      stage: 2,
    },
  },
  {
    id: 'sceptile',
    dexNumber: 254,
    name: 'Sceptile',
    stats: {
      atk: 223,
      def: 169,
      sta: 172,
    },
    types: ['grass'],
    family: {
      id: 'treecko',
      stage: 3,
    },
  },
  {
    id: 'sceptile_mega',
    dexNumber: 254,
    name: 'Sceptile (Mega)',
    stats: {
      atk: 320,
      def: 186,
      sta: 172,
    },
    types: ['grass'],
    family: {
      id: 'treecko',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'torchic',
    dexNumber: 255,
    name: 'Torchic',
    stats: {
      atk: 130,
      def: 87,
      sta: 128,
    },
    types: ['fire'],
    family: {
      id: 'torchic',
      stage: 1,
    },
  },
  {
    id: 'combusken',
    dexNumber: 256,
    name: 'Combusken',
    stats: {
      atk: 163,
      def: 115,
      sta: 155,
    },
    types: ['fire', 'fighting'],
    family: {
      id: 'torchic',
      stage: 2,
    },
  },
  {
    id: 'blaziken',
    dexNumber: 257,
    name: 'Blaziken',
    stats: {
      atk: 240,
      def: 141,
      sta: 190,
    },
    types: ['fire', 'fighting'],
    family: {
      id: 'torchic',
      stage: 3,
    },
  },
  {
    id: 'blaziken_mega',
    dexNumber: 257,
    name: 'Blaziken (Mega)',
    stats: {
      atk: 329,
      def: 168,
      sta: 190,
    },
    types: ['fire', 'fighting'],
    family: {
      id: 'torchic',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'mudkip',
    dexNumber: 258,
    name: 'Mudkip',
    stats: {
      atk: 126,
      def: 93,
      sta: 137,
    },
    types: ['water'],
    family: {
      id: 'mudkip',
      stage: 1,
    },
  },
  {
    id: 'marshtomp',
    dexNumber: 259,
    name: 'Marshtomp',
    stats: {
      atk: 156,
      def: 133,
      sta: 172,
    },
    types: ['water', 'ground'],
    family: {
      id: 'mudkip',
      stage: 2,
    },
  },
  {
    id: 'swampert',
    dexNumber: 260,
    name: 'Swampert',
    stats: {
      atk: 208,
      def: 175,
      sta: 225,
    },
    types: ['water', 'ground'],
    family: {
      id: 'mudkip',
      stage: 3,
    },
  },
  {
    id: 'swampert_mega',
    dexNumber: 260,
    name: 'Swampert (Mega)',
    stats: {
      atk: 283,
      def: 218,
      sta: 225,
    },
    types: ['water', 'ground'],
    family: {
      id: 'mudkip',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'poochyena',
    dexNumber: 261,
    name: 'Poochyena',
    stats: {
      atk: 96,
      def: 61,
      sta: 111,
    },
    types: ['dark'],
    family: {
      id: 'poochyena',
      stage: 1,
    },
  },
  {
    id: 'mightyena',
    dexNumber: 262,
    name: 'Mightyena',
    stats: {
      atk: 171,
      def: 132,
      sta: 172,
    },
    types: ['dark'],
    family: {
      id: 'poochyena',
      stage: 2,
    },
  },
  {
    id: 'zigzagoon',
    dexNumber: 263,
    name: 'Zigzagoon',
    stats: {
      atk: 58,
      def: 80,
      sta: 116,
    },
    types: ['normal'],
    family: {
      id: 'zigzagoon',
      stage: 1,
    },
  },
  {
    id: 'zigzagoon_galarian',
    dexNumber: 263,
    name: 'Zigzagoon (Galarian)',
    stats: {
      atk: 58,
      def: 80,
      sta: 116,
    },
    types: ['dark', 'normal'],
    family: {
      id: 'zigzagoon_galarian',
      stage: 1,
    },
  },
  {
    id: 'linoone',
    dexNumber: 264,
    name: 'Linoone',
    stats: {
      atk: 142,
      def: 128,
      sta: 186,
    },
    types: ['normal'],
    family: {
      id: 'zigzagoon',
      stage: 2,
    },
  },
  {
    id: 'linoone_galarian',
    dexNumber: 264,
    name: 'Linoone (Galarian)',
    stats: {
      atk: 142,
      def: 128,
      sta: 186,
    },
    types: ['dark', 'normal'],
    family: {
      id: 'zigzagoon_galarian',
      stage: 2,
    },
  },
  {
    id: 'wurmple',
    dexNumber: 265,
    name: 'Wurmple',
    stats: {
      atk: 75,
      def: 59,
      sta: 128,
    },
    types: ['bug'],
    family: {
      id: 'wurmple',
      stage: 1,
    },
  },
  {
    id: 'silcoon',
    dexNumber: 266,
    name: 'Silcoon',
    stats: {
      atk: 60,
      def: 77,
      sta: 137,
    },
    types: ['bug'],
    family: {
      id: 'wurmple',
      stage: 2,
    },
  },
  {
    id: 'beautifly',
    dexNumber: 267,
    name: 'Beautifly',
    stats: {
      atk: 189,
      def: 98,
      sta: 155,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'wurmple',
      stage: 3,
    },
  },
  {
    id: 'cascoon',
    dexNumber: 268,
    name: 'Cascoon',
    stats: {
      atk: 60,
      def: 77,
      sta: 137,
    },
    types: ['bug'],
    family: {
      id: 'wurmple',
      stage: 4,
    },
  },
  {
    id: 'dustox',
    dexNumber: 269,
    name: 'Dustox',
    stats: {
      atk: 98,
      def: 162,
      sta: 155,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'wurmple',
      stage: 5,
    },
  },
  {
    id: 'lotad',
    dexNumber: 270,
    name: 'Lotad',
    stats: {
      atk: 71,
      def: 77,
      sta: 120,
    },
    types: ['water', 'grass'],
    family: {
      id: 'lotad',
      stage: 1,
    },
  },
  {
    id: 'lombre',
    dexNumber: 271,
    name: 'Lombre',
    stats: {
      atk: 112,
      def: 119,
      sta: 155,
    },
    types: ['water', 'grass'],
    family: {
      id: 'lotad',
      stage: 2,
    },
  },
  {
    id: 'ludicolo',
    dexNumber: 272,
    name: 'Ludicolo',
    stats: {
      atk: 173,
      def: 176,
      sta: 190,
    },
    types: ['water', 'grass'],
    family: {
      id: 'lotad',
      stage: 3,
    },
  },
  {
    id: 'seedot',
    dexNumber: 273,
    name: 'Seedot',
    stats: {
      atk: 71,
      def: 77,
      sta: 120,
    },
    types: ['grass'],
    family: {
      id: 'seedot',
      stage: 1,
    },
  },
  {
    id: 'nuzleaf',
    dexNumber: 274,
    name: 'Nuzleaf',
    stats: {
      atk: 134,
      def: 78,
      sta: 172,
    },
    types: ['grass', 'dark'],
    family: {
      id: 'seedot',
      stage: 2,
    },
  },
  {
    id: 'shiftry',
    dexNumber: 275,
    name: 'Shiftry',
    stats: {
      atk: 200,
      def: 121,
      sta: 207,
    },
    types: ['grass', 'dark'],
    family: {
      id: 'seedot',
      stage: 3,
    },
  },
  {
    id: 'taillow',
    dexNumber: 276,
    name: 'Taillow',
    stats: {
      atk: 106,
      def: 61,
      sta: 120,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'taillow',
      stage: 1,
    },
  },
  {
    id: 'swellow',
    dexNumber: 277,
    name: 'Swellow',
    stats: {
      atk: 185,
      def: 124,
      sta: 155,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'taillow',
      stage: 2,
    },
  },
  {
    id: 'wingull',
    dexNumber: 278,
    name: 'Wingull',
    stats: {
      atk: 106,
      def: 61,
      sta: 120,
    },
    types: ['water', 'flying'],
    family: {
      id: 'wingull',
      stage: 1,
    },
  },
  {
    id: 'pelipper',
    dexNumber: 279,
    name: 'Pelipper',
    stats: {
      atk: 175,
      def: 174,
      sta: 155,
    },
    types: ['water', 'flying'],
    family: {
      id: 'wingull',
      stage: 2,
    },
  },
  {
    id: 'ralts',
    dexNumber: 280,
    name: 'Ralts',
    stats: {
      atk: 79,
      def: 59,
      sta: 99,
    },
    types: ['psychic', 'fairy'],
    family: {
      id: 'ralts',
      stage: 1,
    },
  },
  {
    id: 'kirlia',
    dexNumber: 281,
    name: 'Kirlia',
    stats: {
      atk: 117,
      def: 90,
      sta: 116,
    },
    types: ['psychic', 'fairy'],
    family: {
      id: 'ralts',
      stage: 2,
    },
  },
  {
    id: 'gardevoir',
    dexNumber: 282,
    name: 'Gardevoir',
    stats: {
      atk: 237,
      def: 195,
      sta: 169,
    },
    types: ['psychic', 'fairy'],
    family: {
      id: 'ralts',
      stage: 3,
    },
  },
  {
    id: 'gardevoir_mega',
    dexNumber: 282,
    name: 'Gardevoir (Mega)',
    stats: {
      atk: 326,
      def: 229,
      sta: 169,
    },
    types: ['psychic', 'fairy'],
    family: {
      id: 'ralts',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'surskit',
    dexNumber: 283,
    name: 'Surskit',
    stats: {
      atk: 93,
      def: 87,
      sta: 120,
    },
    types: ['bug', 'water'],
    family: {
      id: 'surskit',
      stage: 1,
    },
  },
  {
    id: 'masquerain',
    dexNumber: 284,
    name: 'Masquerain',
    stats: {
      atk: 192,
      def: 150,
      sta: 172,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'surskit',
      stage: 2,
    },
  },
  {
    id: 'shroomish',
    dexNumber: 285,
    name: 'Shroomish',
    stats: {
      atk: 74,
      def: 110,
      sta: 155,
    },
    types: ['grass'],
    family: {
      id: 'shroomish',
      stage: 1,
    },
  },
  {
    id: 'breloom',
    dexNumber: 286,
    name: 'Breloom',
    stats: {
      atk: 241,
      def: 144,
      sta: 155,
    },
    types: ['grass', 'fighting'],
    family: {
      id: 'shroomish',
      stage: 2,
    },
  },
  {
    id: 'slakoth',
    dexNumber: 287,
    name: 'Slakoth',
    stats: {
      atk: 104,
      def: 92,
      sta: 155,
    },
    types: ['normal'],
    family: {
      id: 'slakoth',
      stage: 1,
    },
  },
  {
    id: 'vigoroth',
    dexNumber: 288,
    name: 'Vigoroth',
    stats: {
      atk: 159,
      def: 145,
      sta: 190,
    },
    types: ['normal'],
    family: {
      id: 'slakoth',
      stage: 2,
    },
  },
  {
    id: 'slaking',
    dexNumber: 289,
    name: 'Slaking',
    stats: {
      atk: 290,
      def: 166,
      sta: 284,
    },
    types: ['normal'],
    family: {
      id: 'slakoth',
      stage: 3,
    },
  },
  {
    id: 'nincada',
    dexNumber: 290,
    name: 'Nincada',
    stats: {
      atk: 80,
      def: 126,
      sta: 104,
    },
    types: ['bug', 'ground'],
    family: {
      id: 'nincada',
      stage: 1,
    },
  },
  {
    id: 'ninjask',
    dexNumber: 291,
    name: 'Ninjask',
    stats: {
      atk: 199,
      def: 112,
      sta: 156,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'nincada',
      stage: 2,
    },
  },
  {
    id: 'shedinja',
    dexNumber: 292,
    name: 'Shedinja',
    stats: {
      atk: 153,
      def: 73,
      sta: 1,
    },
    types: ['bug', 'ghost'],
    family: {
      id: 'shedinja',
      stage: 1,
    },
  },
  {
    id: 'whismur',
    dexNumber: 293,
    name: 'Whismur',
    stats: {
      atk: 92,
      def: 42,
      sta: 162,
    },
    types: ['normal'],
    family: {
      id: 'whismur',
      stage: 1,
    },
  },
  {
    id: 'loudred',
    dexNumber: 294,
    name: 'Loudred',
    stats: {
      atk: 134,
      def: 81,
      sta: 197,
    },
    types: ['normal'],
    family: {
      id: 'whismur',
      stage: 2,
    },
  },
  {
    id: 'exploud',
    dexNumber: 295,
    name: 'Exploud',
    stats: {
      atk: 179,
      def: 137,
      sta: 232,
    },
    types: ['normal'],
    family: {
      id: 'whismur',
      stage: 3,
    },
  },
  {
    id: 'makuhita',
    dexNumber: 296,
    name: 'Makuhita',
    stats: {
      atk: 99,
      def: 54,
      sta: 176,
    },
    types: ['fighting'],
    family: {
      id: 'makuhita',
      stage: 1,
    },
  },
  {
    id: 'hariyama',
    dexNumber: 297,
    name: 'Hariyama',
    stats: {
      atk: 209,
      def: 114,
      sta: 302,
    },
    types: ['fighting'],
    family: {
      id: 'makuhita',
      stage: 2,
    },
  },
  {
    id: 'azurill',
    dexNumber: 298,
    name: 'Azurill',
    stats: {
      atk: 36,
      def: 71,
      sta: 137,
    },
    types: ['normal', 'fairy'],
    family: {
      id: 'azurill',
      stage: 1,
    },
  },
  {
    id: 'nosepass',
    dexNumber: 299,
    name: 'Nosepass',
    stats: {
      atk: 82,
      def: 215,
      sta: 102,
    },
    types: ['rock'],
    family: {
      id: 'nosepass',
      stage: 1,
    },
  },
  {
    id: 'skitty',
    dexNumber: 300,
    name: 'Skitty',
    stats: {
      atk: 84,
      def: 79,
      sta: 137,
    },
    types: ['normal'],
    family: {
      id: 'skitty',
      stage: 1,
    },
  },
  {
    id: 'delcatty',
    dexNumber: 301,
    name: 'Delcatty',
    stats: {
      atk: 132,
      def: 127,
      sta: 172,
    },
    types: ['normal'],
    family: {
      id: 'skitty',
      stage: 2,
    },
  },
  {
    id: 'sableye',
    dexNumber: 302,
    name: 'Sableye',
    stats: {
      atk: 141,
      def: 136,
      sta: 137,
    },
    types: ['dark', 'ghost'],
    family: {
      id: 'sableye',
      stage: 1,
    },
  },
  {
    id: 'sableye_mega',
    dexNumber: 302,
    name: 'Sableye (Mega)',
    stats: {
      atk: 151,
      def: 216,
      sta: 137,
    },
    types: ['dark', 'ghost'],
    family: {
      id: 'sableye',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'mawile',
    dexNumber: 303,
    name: 'Mawile',
    stats: {
      atk: 155,
      def: 141,
      sta: 137,
    },
    types: ['steel', 'fairy'],
    family: {
      id: 'mawile',
      stage: 1,
    },
  },
  {
    id: 'mawile_mega',
    dexNumber: 303,
    name: 'Mawile (Mega)',
    stats: {
      atk: 188,
      def: 217,
      sta: 137,
    },
    types: ['steel', 'fairy'],
    family: {
      id: 'mawile',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'aron',
    dexNumber: 304,
    name: 'Aron',
    stats: {
      atk: 121,
      def: 141,
      sta: 137,
    },
    types: ['steel', 'rock'],
    family: {
      id: 'aron',
      stage: 1,
    },
  },
  {
    id: 'lairon',
    dexNumber: 305,
    name: 'Lairon',
    stats: {
      atk: 158,
      def: 198,
      sta: 155,
    },
    types: ['steel', 'rock'],
    family: {
      id: 'aron',
      stage: 2,
    },
  },
  {
    id: 'aggron',
    dexNumber: 306,
    name: 'Aggron',
    stats: {
      atk: 198,
      def: 257,
      sta: 172,
    },
    types: ['steel', 'rock'],
    family: {
      id: 'aron',
      stage: 3,
    },
  },
  {
    id: 'aggron_mega',
    dexNumber: 306,
    name: 'Aggron (Mega)',
    stats: {
      atk: 247,
      def: 331,
      sta: 172,
    },
    types: ['steel', 'rock'],
    family: {
      id: 'aron',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'meditite',
    dexNumber: 307,
    name: 'Meditite',
    stats: {
      atk: 78,
      def: 107,
      sta: 102,
    },
    types: ['fighting', 'psychic'],
    family: {
      id: 'meditite',
      stage: 1,
    },
  },
  {
    id: 'medicham',
    dexNumber: 308,
    name: 'Medicham',
    stats: {
      atk: 121,
      def: 152,
      sta: 155,
    },
    types: ['fighting', 'psychic'],
    family: {
      id: 'meditite',
      stage: 2,
    },
  },
  {
    id: 'medicham_mega',
    dexNumber: 308,
    name: 'Medicham (Mega)',
    stats: {
      atk: 205,
      def: 179,
      sta: 155,
    },
    types: ['fighting', 'psychic'],
    family: {
      id: 'meditite',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'electrike',
    dexNumber: 309,
    name: 'Electrike',
    stats: {
      atk: 123,
      def: 78,
      sta: 120,
    },
    types: ['electric'],
    family: {
      id: 'electrike',
      stage: 1,
    },
  },
  {
    id: 'manectric',
    dexNumber: 310,
    name: 'Manectric',
    stats: {
      atk: 215,
      def: 127,
      sta: 172,
    },
    types: ['electric'],
    family: {
      id: 'electrike',
      stage: 2,
    },
  },
  {
    id: 'manectric_mega',
    dexNumber: 310,
    name: 'Manectric (Mega)',
    stats: {
      atk: 286,
      def: 179,
      sta: 172,
    },
    types: ['electric'],
    family: {
      id: 'electrike',
      stage: 3,
    },
  },
  {
    id: 'plusle',
    dexNumber: 311,
    name: 'Plusle',
    stats: {
      atk: 167,
      def: 129,
      sta: 155,
    },
    types: ['electric'],
    family: {
      id: 'plusle',
      stage: 1,
    },
  },
  {
    id: 'minun',
    dexNumber: 312,
    name: 'Minun',
    stats: {
      atk: 147,
      def: 150,
      sta: 155,
    },
    types: ['electric'],
    family: {
      id: 'minun',
      stage: 1,
    },
  },
  {
    id: 'volbeat',
    dexNumber: 313,
    name: 'Volbeat',
    stats: {
      atk: 143,
      def: 166,
      sta: 163,
    },
    types: ['bug'],
    family: {
      id: 'volbeat',
      stage: 1,
    },
  },
  {
    id: 'illumise',
    dexNumber: 314,
    name: 'Illumise',
    stats: {
      atk: 143,
      def: 166,
      sta: 163,
    },
    types: ['bug'],
    family: {
      id: 'illumise',
      stage: 1,
    },
  },
  {
    id: 'roselia',
    dexNumber: 315,
    name: 'Roselia',
    stats: {
      atk: 186,
      def: 131,
      sta: 137,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'budew',
      stage: 2,
    },
  },
  {
    id: 'gulpin',
    dexNumber: 316,
    name: 'Gulpin',
    stats: {
      atk: 80,
      def: 99,
      sta: 172,
    },
    types: ['poison'],
    family: {
      id: 'gulpin',
      stage: 1,
    },
  },
  {
    id: 'swalot',
    dexNumber: 317,
    name: 'Swalot',
    stats: {
      atk: 140,
      def: 159,
      sta: 225,
    },
    types: ['poison'],
    family: {
      id: 'gulpin',
      stage: 2,
    },
  },
  {
    id: 'carvanha',
    dexNumber: 318,
    name: 'Carvanha',
    stats: {
      atk: 171,
      def: 39,
      sta: 128,
    },
    types: ['water', 'dark'],
    family: {
      id: 'carvanha',
      stage: 1,
    },
  },
  {
    id: 'sharpedo',
    dexNumber: 319,
    name: 'Sharpedo',
    stats: {
      atk: 243,
      def: 83,
      sta: 172,
    },
    types: ['water', 'dark'],
    family: {
      id: 'carvanha',
      stage: 2,
    },
  },
  {
    id: 'sharpedo_mega',
    dexNumber: 319,
    name: 'Sharpedo (Mega)',
    stats: {
      atk: 289,
      def: 144,
      sta: 172,
    },
    types: ['water', 'dark'],
    family: {
      id: 'carvanha',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'wailmer',
    dexNumber: 320,
    name: 'Wailmer',
    stats: {
      atk: 136,
      def: 68,
      sta: 277,
    },
    types: ['water'],
    family: {
      id: 'wailmer',
      stage: 1,
    },
  },
  {
    id: 'wailord',
    dexNumber: 321,
    name: 'Wailord',
    stats: {
      atk: 175,
      def: 87,
      sta: 347,
    },
    types: ['water'],
    family: {
      id: 'wailmer',
      stage: 2,
    },
  },
  {
    id: 'numel',
    dexNumber: 322,
    name: 'Numel',
    stats: {
      atk: 119,
      def: 79,
      sta: 155,
    },
    types: ['fire', 'ground'],
    family: {
      id: 'numel',
      stage: 1,
    },
  },
  {
    id: 'camerupt',
    dexNumber: 323,
    name: 'Camerupt',
    stats: {
      atk: 194,
      def: 136,
      sta: 172,
    },
    types: ['fire', 'ground'],
    family: {
      id: 'numel',
      stage: 2,
    },
  },
  {
    id: 'camerupt_mega',
    dexNumber: 323,
    name: 'Camerupt (Mega)',
    stats: {
      atk: 253,
      def: 183,
      sta: 172,
    },
    types: ['fire', 'ground'],
    family: {
      id: 'numel',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'torkoal',
    dexNumber: 324,
    name: 'Torkoal',
    stats: {
      atk: 151,
      def: 203,
      sta: 172,
    },
    types: ['fire'],
    family: {
      id: 'torkoal',
      stage: 1,
    },
  },
  {
    id: 'spoink',
    dexNumber: 325,
    name: 'Spoink',
    stats: {
      atk: 125,
      def: 122,
      sta: 155,
    },
    types: ['psychic'],
    family: {
      id: 'spoink',
      stage: 1,
    },
  },
  {
    id: 'grumpig',
    dexNumber: 326,
    name: 'Grumpig',
    stats: {
      atk: 171,
      def: 188,
      sta: 190,
    },
    types: ['psychic'],
    family: {
      id: 'spoink',
      stage: 2,
    },
  },
  {
    id: 'spinda',
    dexNumber: 327,
    name: 'Spinda',
    stats: {
      atk: 116,
      def: 116,
      sta: 155,
    },
    types: ['normal'],
    family: {
      id: 'spinda',
      stage: 1,
    },
  },
  {
    id: 'trapinch',
    dexNumber: 328,
    name: 'Trapinch',
    stats: {
      atk: 162,
      def: 78,
      sta: 128,
    },
    types: ['ground'],
    family: {
      id: 'trapinch',
      stage: 1,
    },
  },
  {
    id: 'vibrava',
    dexNumber: 329,
    name: 'Vibrava',
    stats: {
      atk: 134,
      def: 99,
      sta: 137,
    },
    types: ['ground', 'dragon'],
    family: {
      id: 'trapinch',
      stage: 2,
    },
  },
  {
    id: 'flygon',
    dexNumber: 330,
    name: 'Flygon',
    stats: {
      atk: 205,
      def: 168,
      sta: 190,
    },
    types: ['ground', 'dragon'],
    family: {
      id: 'trapinch',
      stage: 3,
    },
  },
  {
    id: 'cacnea',
    dexNumber: 331,
    name: 'Cacnea',
    stats: {
      atk: 156,
      def: 74,
      sta: 137,
    },
    types: ['grass'],
    family: {
      id: 'cacnea',
      stage: 1,
    },
  },
  {
    id: 'cacturne',
    dexNumber: 332,
    name: 'Cacturne',
    stats: {
      atk: 221,
      def: 115,
      sta: 172,
    },
    types: ['grass', 'dark'],
    family: {
      id: 'cacnea',
      stage: 2,
    },
  },
  {
    id: 'swablu',
    dexNumber: 333,
    name: 'Swablu',
    stats: {
      atk: 76,
      def: 132,
      sta: 128,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'swablu',
      stage: 1,
    },
  },
  {
    id: 'altaria',
    dexNumber: 334,
    name: 'Altaria',
    stats: {
      atk: 141,
      def: 201,
      sta: 181,
    },
    types: ['dragon', 'flying'],
    family: {
      id: 'swablu',
      stage: 2,
    },
  },
  {
    id: 'altaria_mega',
    dexNumber: 334,
    name: 'Altaria (Mega)',
    stats: {
      atk: 222,
      def: 218,
      sta: 181,
    },
    types: ['dragon', 'fairy'],
    family: {
      id: 'swablu',
      stage: 3,
    },
  },
  {
    id: 'zangoose',
    dexNumber: 335,
    name: 'Zangoose',
    stats: {
      atk: 222,
      def: 124,
      sta: 177,
    },
    types: ['normal'],
    family: {
      id: 'zangoose',
      stage: 1,
    },
  },
  {
    id: 'seviper',
    dexNumber: 336,
    name: 'Seviper',
    stats: {
      atk: 196,
      def: 118,
      sta: 177,
    },
    types: ['poison'],
    family: {
      id: 'seviper',
      stage: 1,
    },
  },
  {
    id: 'lunatone',
    dexNumber: 337,
    name: 'Lunatone',
    stats: {
      atk: 178,
      def: 153,
      sta: 207,
    },
    types: ['rock', 'psychic'],
    family: {
      id: 'lunatone',
      stage: 1,
    },
  },
  {
    id: 'solrock',
    dexNumber: 338,
    name: 'Solrock',
    stats: {
      atk: 178,
      def: 153,
      sta: 207,
    },
    types: ['rock', 'psychic'],
    family: {
      id: 'solrock',
      stage: 1,
    },
  },
  {
    id: 'barboach',
    dexNumber: 339,
    name: 'Barboach',
    stats: {
      atk: 93,
      def: 82,
      sta: 137,
    },
    types: ['water', 'ground'],
    family: {
      id: 'barboach',
      stage: 1,
    },
  },
  {
    id: 'whiscash',
    dexNumber: 340,
    name: 'Whiscash',
    stats: {
      atk: 151,
      def: 141,
      sta: 242,
    },
    types: ['water', 'ground'],
    family: {
      id: 'barboach',
      stage: 2,
    },
  },
  {
    id: 'corphish',
    dexNumber: 341,
    name: 'Corphish',
    stats: {
      atk: 141,
      def: 99,
      sta: 125,
    },
    types: ['water'],
    family: {
      id: 'corphish',
      stage: 1,
    },
  },
  {
    id: 'crawdaunt',
    dexNumber: 342,
    name: 'Crawdaunt',
    stats: {
      atk: 224,
      def: 142,
      sta: 160,
    },
    types: ['water', 'dark'],
    family: {
      id: 'corphish',
      stage: 2,
    },
  },
  {
    id: 'baltoy',
    dexNumber: 343,
    name: 'Baltoy',
    stats: {
      atk: 77,
      def: 124,
      sta: 120,
    },
    types: ['ground', 'psychic'],
    family: {
      id: 'baltoy',
      stage: 1,
    },
  },
  {
    id: 'claydol',
    dexNumber: 344,
    name: 'Claydol',
    stats: {
      atk: 140,
      def: 229,
      sta: 155,
    },
    types: ['ground', 'psychic'],
    family: {
      id: 'baltoy',
      stage: 2,
    },
  },
  {
    id: 'lileep',
    dexNumber: 345,
    name: 'Lileep',
    stats: {
      atk: 105,
      def: 150,
      sta: 165,
    },
    types: ['rock', 'grass'],
    family: {
      id: 'lileep',
      stage: 1,
    },
  },
  {
    id: 'cradily',
    dexNumber: 346,
    name: 'Cradily',
    stats: {
      atk: 152,
      def: 194,
      sta: 200,
    },
    types: ['rock', 'grass'],
    family: {
      id: 'lileep',
      stage: 2,
    },
  },
  {
    id: 'anorith',
    dexNumber: 347,
    name: 'Anorith',
    stats: {
      atk: 176,
      def: 100,
      sta: 128,
    },
    types: ['rock', 'bug'],
    family: {
      id: 'anorith',
      stage: 1,
    },
  },
  {
    id: 'armaldo',
    dexNumber: 348,
    name: 'Armaldo',
    stats: {
      atk: 222,
      def: 174,
      sta: 181,
    },
    types: ['rock', 'bug'],
    family: {
      id: 'anorith',
      stage: 2,
    },
  },
  {
    id: 'feebas',
    dexNumber: 349,
    name: 'Feebas',
    stats: {
      atk: 29,
      def: 85,
      sta: 85,
    },
    types: ['water'],
    family: {
      id: 'feebas',
      stage: 1,
    },
  },
  {
    id: 'milotic',
    dexNumber: 350,
    name: 'Milotic',
    stats: {
      atk: 192,
      def: 219,
      sta: 216,
    },
    types: ['water'],
    family: {
      id: 'feebas',
      stage: 2,
    },
  },
  {
    id: 'castform',
    dexNumber: 351,
    name: 'Castform',
    stats: {
      atk: 139,
      def: 139,
      sta: 172,
    },
    types: ['normal'],
    family: {
      id: 'castform',
      stage: 1,
    },
  },
  {
    id: 'castform_rainy',
    dexNumber: 351,
    name: 'Castform (Rainy)',
    stats: {
      atk: 139,
      def: 139,
      sta: 172,
    },
    types: ['water'],
    family: {
      id: 'castform_rainy',
      stage: 1,
    },
  },
  {
    id: 'castform_snowy',
    dexNumber: 351,
    name: 'Castform (Snowy)',
    stats: {
      atk: 139,
      def: 139,
      sta: 172,
    },
    types: ['ice'],
    family: {
      id: 'castform_snowy',
      stage: 1,
    },
  },
  {
    id: 'castform_sunny',
    dexNumber: 351,
    name: 'Castform (Sunny)',
    stats: {
      atk: 139,
      def: 139,
      sta: 172,
    },
    types: ['fire'],
    family: {
      id: 'castform_sunny',
      stage: 1,
    },
  },
  {
    id: 'kecleon',
    dexNumber: 352,
    name: 'Kecleon',
    stats: {
      atk: 161,
      def: 189,
      sta: 155,
    },
    types: ['normal'],
    family: {
      id: 'kecleon',
      stage: 1,
    },
  },
  {
    id: 'shuppet',
    dexNumber: 353,
    name: 'Shuppet',
    stats: {
      atk: 138,
      def: 65,
      sta: 127,
    },
    types: ['ghost'],
    family: {
      id: 'shuppet',
      stage: 1,
    },
  },
  {
    id: 'banette',
    dexNumber: 354,
    name: 'Banette',
    stats: {
      atk: 218,
      def: 126,
      sta: 162,
    },
    types: ['ghost'],
    family: {
      id: 'shuppet',
      stage: 2,
    },
  },
  {
    id: 'banette_mega',
    dexNumber: 354,
    name: 'Banette (Mega)',
    stats: {
      atk: 312,
      def: 160,
      sta: 162,
    },
    types: ['ghost'],
    family: {
      id: 'shuppet',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'duskull',
    dexNumber: 355,
    name: 'Duskull',
    stats: {
      atk: 70,
      def: 162,
      sta: 85,
    },
    types: ['ghost'],
    family: {
      id: 'duskull',
      stage: 1,
    },
  },
  {
    id: 'dusclops',
    dexNumber: 356,
    name: 'Dusclops',
    stats: {
      atk: 124,
      def: 234,
      sta: 120,
    },
    types: ['ghost'],
    family: {
      id: 'duskull',
      stage: 2,
    },
  },
  {
    id: 'tropius',
    dexNumber: 357,
    name: 'Tropius',
    stats: {
      atk: 136,
      def: 163,
      sta: 223,
    },
    types: ['grass', 'flying'],
    family: {
      id: 'tropius',
      stage: 1,
    },
  },
  {
    id: 'chimecho',
    dexNumber: 358,
    name: 'Chimecho',
    stats: {
      atk: 175,
      def: 170,
      sta: 181,
    },
    types: ['psychic'],
    family: {
      id: 'chingling',
      stage: 2,
    },
  },
  {
    id: 'absol',
    dexNumber: 359,
    name: 'Absol',
    stats: {
      atk: 246,
      def: 120,
      sta: 163,
    },
    types: ['dark'],
    family: {
      id: 'absol',
      stage: 1,
    },
  },
  {
    id: 'absol_mega',
    dexNumber: 359,
    name: 'Absol (Mega)',
    stats: {
      atk: 314,
      def: 130,
      sta: 163,
    },
    types: ['dark'],
    family: {
      id: 'absol',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'wynaut',
    dexNumber: 360,
    name: 'Wynaut',
    stats: {
      atk: 41,
      def: 86,
      sta: 216,
    },
    types: ['psychic'],
    family: {
      id: 'wynaut',
      stage: 1,
    },
  },
  {
    id: 'snorunt',
    dexNumber: 361,
    name: 'Snorunt',
    stats: {
      atk: 95,
      def: 95,
      sta: 137,
    },
    types: ['ice'],
    family: {
      id: 'snorunt',
      stage: 1,
    },
  },
  {
    id: 'glalie',
    dexNumber: 362,
    name: 'Glalie',
    stats: {
      atk: 162,
      def: 162,
      sta: 190,
    },
    types: ['ice'],
    family: {
      id: 'snorunt',
      stage: 2,
    },
  },
  {
    id: 'glalie_mega',
    dexNumber: 362,
    name: 'Glalie (Mega)',
    stats: {
      atk: 252,
      def: 168,
      sta: 190,
    },
    types: ['ice'],
    family: {
      id: 'snorunt',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'spheal',
    dexNumber: 363,
    name: 'Spheal',
    stats: {
      atk: 95,
      def: 90,
      sta: 172,
    },
    types: ['ice', 'water'],
    family: {
      id: 'spheal',
      stage: 1,
    },
  },
  {
    id: 'sealeo',
    dexNumber: 364,
    name: 'Sealeo',
    stats: {
      atk: 137,
      def: 132,
      sta: 207,
    },
    types: ['ice', 'water'],
    family: {
      id: 'spheal',
      stage: 2,
    },
  },
  {
    id: 'walrein',
    dexNumber: 365,
    name: 'Walrein',
    stats: {
      atk: 182,
      def: 176,
      sta: 242,
    },
    types: ['ice', 'water'],
    family: {
      id: 'spheal',
      stage: 3,
    },
  },
  {
    id: 'clamperl',
    dexNumber: 366,
    name: 'Clamperl',
    stats: {
      atk: 133,
      def: 135,
      sta: 111,
    },
    types: ['water'],
    family: {
      id: 'clamperl',
      stage: 1,
    },
  },
  {
    id: 'huntail',
    dexNumber: 367,
    name: 'Huntail',
    stats: {
      atk: 197,
      def: 179,
      sta: 146,
    },
    types: ['water'],
    family: {
      id: 'clamperl',
      stage: 2,
    },
  },
  {
    id: 'gorebyss',
    dexNumber: 368,
    name: 'Gorebyss',
    stats: {
      atk: 211,
      def: 179,
      sta: 146,
    },
    types: ['water'],
    family: {
      id: 'clamperl',
      stage: 2,
    },
  },
  {
    id: 'relicanth',
    dexNumber: 369,
    name: 'Relicanth',
    stats: {
      atk: 162,
      def: 203,
      sta: 225,
    },
    types: ['water', 'rock'],
    family: {
      id: 'relicanth',
      stage: 1,
    },
  },
  {
    id: 'luvdisc',
    dexNumber: 370,
    name: 'Luvdisc',
    stats: {
      atk: 81,
      def: 128,
      sta: 125,
    },
    types: ['water'],
    family: {
      id: 'luvdisc',
      stage: 1,
    },
  },
  {
    id: 'bagon',
    dexNumber: 371,
    name: 'Bagon',
    stats: {
      atk: 134,
      def: 93,
      sta: 128,
    },
    types: ['dragon'],
    family: {
      id: 'bagon',
      stage: 1,
    },
  },
  {
    id: 'shelgon',
    dexNumber: 372,
    name: 'Shelgon',
    stats: {
      atk: 172,
      def: 155,
      sta: 163,
    },
    types: ['dragon'],
    family: {
      id: 'bagon',
      stage: 2,
    },
  },
  {
    id: 'salamence',
    dexNumber: 373,
    name: 'Salamence',
    stats: {
      atk: 277,
      def: 168,
      sta: 216,
    },
    types: ['dragon', 'flying'],
    family: {
      id: 'bagon',
      stage: 3,
    },
  },
  {
    id: 'salamence_mega',
    dexNumber: 373,
    name: 'Salamence (Mega)',
    stats: {
      atk: 310,
      def: 251,
      sta: 216,
    },
    types: ['dragon', 'flying'],
    family: {
      id: 'bagon',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'beldum',
    dexNumber: 374,
    name: 'Beldum',
    stats: {
      atk: 96,
      def: 132,
      sta: 120,
    },
    types: ['steel', 'psychic'],
    family: {
      id: 'beldum',
      stage: 1,
    },
  },
  {
    id: 'metang',
    dexNumber: 375,
    name: 'Metang',
    stats: {
      atk: 138,
      def: 176,
      sta: 155,
    },
    types: ['steel', 'psychic'],
    family: {
      id: 'beldum',
      stage: 2,
    },
  },
  {
    id: 'metagross',
    dexNumber: 376,
    name: 'Metagross',
    stats: {
      atk: 257,
      def: 228,
      sta: 190,
    },
    types: ['steel', 'psychic'],
    family: {
      id: 'beldum',
      stage: 3,
    },
  },
  {
    id: 'metagross_mega',
    dexNumber: 376,
    name: 'Metagross (Mega)',
    stats: {
      atk: 300,
      def: 289,
      sta: 190,
    },
    types: ['steel', 'psychic'],
    family: {
      id: 'beldum',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'regirock',
    dexNumber: 377,
    name: 'Regirock',
    stats: {
      atk: 179,
      def: 309,
      sta: 190,
    },
    types: ['rock'],
    floor: 1,
    family: {
      id: 'regirock',
      stage: 1,
    },
  },
  {
    id: 'regice',
    dexNumber: 378,
    name: 'Regice',
    stats: {
      atk: 179,
      def: 309,
      sta: 190,
    },
    types: ['ice'],
    floor: 1,
    family: {
      id: 'regice',
      stage: 1,
    },
  },
  {
    id: 'registeel',
    dexNumber: 379,
    name: 'Registeel',
    stats: {
      atk: 143,
      def: 285,
      sta: 190,
    },
    types: ['steel'],
    floor: 1,
    family: {
      id: 'registeel',
      stage: 1,
    },
  },
  {
    id: 'latias',
    dexNumber: 380,
    name: 'Latias',
    stats: {
      atk: 228,
      def: 246,
      sta: 190,
    },
    types: ['dragon', 'psychic'],
    floor: 1,
    family: {
      id: 'latias',
      stage: 1,
    },
  },
  {
    id: 'latias_mega',
    dexNumber: 380,
    name: 'Latias (Mega)',
    stats: {
      atk: 289,
      def: 297,
      sta: 190,
    },
    types: ['dragon', 'psychic'],
    floor: 1,
    family: {
      id: 'latias',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'latios',
    dexNumber: 381,
    name: 'Latios',
    stats: {
      atk: 268,
      def: 212,
      sta: 190,
    },
    types: ['dragon', 'psychic'],
    floor: 1,
    family: {
      id: 'latios',
      stage: 1,
    },
  },
  {
    id: 'latios_mega',
    dexNumber: 381,
    name: 'Latios (Mega)',
    stats: {
      atk: 335,
      def: 241,
      sta: 190,
    },
    types: ['dragon', 'psychic'],
    floor: 1,
    family: {
      id: 'latios',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'kyogre',
    dexNumber: 382,
    name: 'Kyogre',
    stats: {
      atk: 270,
      def: 228,
      sta: 205,
    },
    types: ['water'],
    floor: 1,
    family: {
      id: 'kyogre',
      stage: 1,
    },
  },
  {
    id: 'kyogre_primal',
    dexNumber: 382,
    name: 'Kyogre (Primal)',
    stats: {
      atk: 331,
      def: 251,
      sta: 205,
    },
    types: ['water'],
    floor: 1,
    family: {
      id: 'kyogre',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'groudon',
    dexNumber: 383,
    name: 'Groudon',
    stats: {
      atk: 270,
      def: 228,
      sta: 205,
    },
    types: ['ground'],
    floor: 1,
    family: {
      id: 'groudon',
      stage: 1,
    },
  },
  {
    id: 'groudon_primal',
    dexNumber: 383,
    name: 'Groudon (Primal)',
    stats: {
      atk: 331,
      def: 251,
      sta: 205,
    },
    types: ['ground'],
    floor: 1,
    family: {
      id: 'groudon',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'rayquaza',
    dexNumber: 384,
    name: 'Rayquaza',
    stats: {
      atk: 284,
      def: 170,
      sta: 213,
    },
    types: ['dragon', 'flying'],
    floor: 1,
    family: {
      id: 'rayquaza',
      stage: 1,
    },
  },
  {
    id: 'rayquaza_mega',
    dexNumber: 384,
    name: 'Rayquaza (Mega)',
    stats: {
      atk: 354,
      def: 197,
      sta: 212,
    },
    types: ['dragon', 'flying'],
    floor: 1,
    family: {
      id: 'rayquaza',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'jirachi',
    dexNumber: 385,
    name: 'Jirachi',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    types: ['steel', 'psychic'],
    floor: 10,
    family: {
      id: 'jirachi',
      stage: 1,
    },
  },
  {
    id: 'deoxys',
    dexNumber: 386,
    name: 'Deoxys',
    stats: {
      atk: 345,
      def: 115,
      sta: 137,
    },
    types: ['psychic'],
    floor: 10,
    family: {
      id: 'deoxys',
      stage: 1,
    },
  },
  {
    id: 'deoxys_attack',
    dexNumber: 386,
    name: 'Deoxys (Attack)',
    stats: {
      atk: 414,
      def: 46,
      sta: 137,
    },
    types: ['psychic'],
    floor: 10,
    family: {
      id: 'deoxys_atk',
      stage: 1,
    },
  },
  {
    id: 'deoxys_defense',
    dexNumber: 386,
    name: 'Deoxys (Defense)',
    stats: {
      atk: 144,
      def: 330,
      sta: 137,
    },
    types: ['psychic'],
    floor: 10,
    family: {
      id: 'deoxys_defense',
      stage: 1,
    },
  },
  {
    id: 'deoxys_speed',
    dexNumber: 386,
    name: 'Deoxys (Speed)',
    stats: {
      atk: 230,
      def: 218,
      sta: 137,
    },
    types: ['psychic'],
    floor: 10,
    family: {
      id: 'deoxys_speed',
      stage: 1,
    },
  },
  {
    id: 'turtwig',
    dexNumber: 387,
    name: 'Turtwig',
    stats: {
      atk: 119,
      def: 110,
      sta: 146,
    },
    types: ['grass'],
    family: {
      id: 'turtwig',
      stage: 1,
    },
  },
  {
    id: 'grotle',
    dexNumber: 388,
    name: 'Grotle',
    stats: {
      atk: 157,
      def: 143,
      sta: 181,
    },
    types: ['grass'],
    family: {
      id: 'turtwig',
      stage: 2,
    },
  },
  {
    id: 'torterra',
    dexNumber: 389,
    name: 'Torterra',
    stats: {
      atk: 202,
      def: 188,
      sta: 216,
    },
    types: ['grass', 'ground'],
    family: {
      id: 'turtwig',
      stage: 3,
    },
  },
  {
    id: 'chimchar',
    dexNumber: 390,
    name: 'Chimchar',
    stats: {
      atk: 113,
      def: 86,
      sta: 127,
    },
    types: ['fire'],
    family: {
      id: 'chimchar',
      stage: 1,
    },
  },
  {
    id: 'monferno',
    dexNumber: 391,
    name: 'Monferno',
    stats: {
      atk: 158,
      def: 105,
      sta: 162,
    },
    types: ['fire', 'fighting'],
    family: {
      id: 'chimchar',
      stage: 2,
    },
  },
  {
    id: 'infernape',
    dexNumber: 392,
    name: 'Infernape',
    stats: {
      atk: 222,
      def: 151,
      sta: 183,
    },
    types: ['fire', 'fighting'],
    family: {
      id: 'chimchar',
      stage: 3,
    },
  },
  {
    id: 'piplup',
    dexNumber: 393,
    name: 'Piplup',
    stats: {
      atk: 112,
      def: 102,
      sta: 142,
    },
    types: ['water'],
    family: {
      id: 'piplup',
      stage: 1,
    },
  },
  {
    id: 'prinplup',
    dexNumber: 394,
    name: 'Prinplup',
    stats: {
      atk: 150,
      def: 139,
      sta: 162,
    },
    types: ['water'],
    family: {
      id: 'piplup',
      stage: 2,
    },
  },
  {
    id: 'empoleon',
    dexNumber: 395,
    name: 'Empoleon',
    stats: {
      atk: 210,
      def: 186,
      sta: 197,
    },
    types: ['water', 'steel'],
    family: {
      id: 'piplup',
      stage: 3,
    },
  },
  {
    id: 'starly',
    dexNumber: 396,
    name: 'Starly',
    stats: {
      atk: 101,
      def: 58,
      sta: 120,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'starly',
      stage: 1,
    },
  },
  {
    id: 'staravia',
    dexNumber: 397,
    name: 'Staravia',
    stats: {
      atk: 142,
      def: 94,
      sta: 146,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'starly',
      stage: 2,
    },
  },
  {
    id: 'staraptor',
    dexNumber: 398,
    name: 'Staraptor',
    stats: {
      atk: 234,
      def: 140,
      sta: 198,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'starly',
      stage: 3,
    },
  },
  {
    id: 'bidoof',
    dexNumber: 399,
    name: 'Bidoof',
    stats: {
      atk: 80,
      def: 73,
      sta: 153,
    },
    types: ['normal'],
    family: {
      id: 'bidoof',
      stage: 1,
    },
  },
  {
    id: 'bibarel',
    dexNumber: 400,
    name: 'Bibarel',
    stats: {
      atk: 162,
      def: 119,
      sta: 188,
    },
    types: ['normal', 'water'],
    family: {
      id: 'bidoof',
      stage: 2,
    },
  },
  {
    id: 'kricketot',
    dexNumber: 401,
    name: 'Kricketot',
    stats: {
      atk: 45,
      def: 74,
      sta: 114,
    },
    types: ['bug'],
    family: {
      id: 'kricketot',
      stage: 1,
    },
  },
  {
    id: 'kricketune',
    dexNumber: 402,
    name: 'Kricketune',
    stats: {
      atk: 160,
      def: 100,
      sta: 184,
    },
    types: ['bug'],
    family: {
      id: 'kricketot',
      stage: 2,
    },
  },
  {
    id: 'shinx',
    dexNumber: 403,
    name: 'Shinx',
    stats: {
      atk: 117,
      def: 64,
      sta: 128,
    },
    types: ['electric'],
    family: {
      id: 'shinx',
      stage: 1,
    },
  },
  {
    id: 'luxio',
    dexNumber: 404,
    name: 'Luxio',
    stats: {
      atk: 159,
      def: 95,
      sta: 155,
    },
    types: ['electric'],
    family: {
      id: 'shinx',
      stage: 2,
    },
  },
  {
    id: 'luxray',
    dexNumber: 405,
    name: 'Luxray',
    stats: {
      atk: 232,
      def: 156,
      sta: 190,
    },
    types: ['electric'],
    family: {
      id: 'shinx',
      stage: 3,
    },
  },
  {
    id: 'budew',
    dexNumber: 406,
    name: 'Budew',
    stats: {
      atk: 91,
      def: 109,
      sta: 120,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'budew',
      stage: 1,
    },
  },
  {
    id: 'roserade',
    dexNumber: 407,
    name: 'Roserade',
    stats: {
      atk: 243,
      def: 185,
      sta: 155,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'budew',
      stage: 3,
    },
  },
  {
    id: 'cranidos',
    dexNumber: 408,
    name: 'Cranidos',
    stats: {
      atk: 218,
      def: 71,
      sta: 167,
    },
    types: ['rock'],
    family: {
      id: 'cranidos',
      stage: 1,
    },
  },
  {
    id: 'rampardos',
    dexNumber: 409,
    name: 'Rampardos',
    stats: {
      atk: 295,
      def: 109,
      sta: 219,
    },
    types: ['rock'],
    family: {
      id: 'cranidos',
      stage: 2,
    },
  },
  {
    id: 'shieldon',
    dexNumber: 410,
    name: 'Shieldon',
    stats: {
      atk: 76,
      def: 195,
      sta: 102,
    },
    types: ['rock', 'steel'],
    family: {
      id: 'shieldon',
      stage: 1,
    },
  },
  {
    id: 'bastiodon',
    dexNumber: 411,
    name: 'Bastiodon',
    stats: {
      atk: 94,
      def: 286,
      sta: 155,
    },
    types: ['rock', 'steel'],
    family: {
      id: 'shieldon',
      stage: 2,
    },
  },
  {
    id: 'burmy_plant',
    dexNumber: 412,
    name: 'Burmy (Plant)',
    stats: {
      atk: 53,
      def: 83,
      sta: 120,
    },
    types: ['bug'],
    family: {
      id: 'burmy',
      stage: 1,
    },
  },
  {
    id: 'burmy_sandy',
    dexNumber: 412,
    name: 'Burmy (Sandy)',
    stats: {
      atk: 53,
      def: 83,
      sta: 120,
    },
    types: ['bug'],
    family: {
      id: 'burmy',
      stage: 1,
    },
  },
  {
    id: 'burmy_trash',
    dexNumber: 412,
    name: 'Burmy (Trash)',
    stats: {
      atk: 53,
      def: 83,
      sta: 120,
    },
    types: ['bug'],
    family: {
      id: 'burmy',
      stage: 1,
    },
  },
  {
    id: 'wormadam_plant',
    dexNumber: 413,
    name: 'Wormadam (Plant)',
    stats: {
      atk: 141,
      def: 180,
      sta: 155,
    },
    types: ['bug', 'grass'],
    family: {
      id: 'burmy',
      stage: 2,
    },
  },
  {
    id: 'wormadam_sandy',
    dexNumber: 413,
    name: 'Wormadam (Sandy)',
    stats: {
      atk: 141,
      def: 180,
      sta: 155,
    },
    types: ['bug', 'ground'],
    family: {
      id: 'burmy',
      stage: 2,
    },
  },
  {
    id: 'wormadam_trash',
    dexNumber: 413,
    name: 'Wormadam (Trash)',
    stats: {
      atk: 127,
      def: 175,
      sta: 155,
    },
    types: ['bug', 'steel'],
    family: {
      id: 'burmy',
      stage: 2,
    },
  },
  {
    id: 'mothim',
    dexNumber: 414,
    name: 'Mothim',
    stats: {
      atk: 185,
      def: 98,
      sta: 172,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'burmy',
      stage: 3,
    },
  },
  {
    id: 'combee',
    dexNumber: 415,
    name: 'Combee',
    stats: {
      atk: 59,
      def: 83,
      sta: 102,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'combee',
      stage: 1,
    },
  },
  {
    id: 'vespiquen',
    dexNumber: 416,
    name: 'Vespiquen',
    stats: {
      atk: 149,
      def: 190,
      sta: 172,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'combee',
      stage: 2,
    },
  },
  {
    id: 'pachirisu',
    dexNumber: 417,
    name: 'Pachirisu',
    stats: {
      atk: 94,
      def: 172,
      sta: 155,
    },
    types: ['electric'],
    family: {
      id: 'pachirisu',
      stage: 1,
    },
  },
  {
    id: 'buizel',
    dexNumber: 418,
    name: 'Buizel',
    stats: {
      atk: 132,
      def: 67,
      sta: 146,
    },
    types: ['water'],
    family: {
      id: 'buizel',
      stage: 1,
    },
  },
  {
    id: 'floatzel',
    dexNumber: 419,
    name: 'Floatzel',
    stats: {
      atk: 221,
      def: 114,
      sta: 198,
    },
    types: ['water'],
    family: {
      id: 'buizel',
      stage: 2,
    },
  },
  {
    id: 'cherubi',
    dexNumber: 420,
    name: 'Cherubi',
    stats: {
      atk: 108,
      def: 92,
      sta: 128,
    },
    types: ['grass'],
    family: {
      id: 'cherubi',
      stage: 1,
    },
  },
  {
    id: 'cherrim_overcast',
    dexNumber: 421,
    name: 'Cherrim (Overcast)',
    stats: {
      atk: 170,
      def: 153,
      sta: 172,
    },
    types: ['grass'],
    family: {
      id: 'cherubi',
      stage: 2,
    },
  },
  {
    id: 'cherrim_sunny',
    dexNumber: 421,
    name: 'Cherrim (Sunny)',
    stats: {
      atk: 170,
      def: 153,
      sta: 172,
    },
    types: ['grass'],
    family: {
      id: 'cherubi',
      stage: 2,
    },
  },
  {
    id: 'ambipom',
    dexNumber: 424,
    name: 'Ambipom',
    stats: {
      atk: 205,
      def: 143,
      sta: 181,
    },
    types: ['normal'],
    family: {
      id: 'aipom',
      stage: 2,
    },
  },
  {
    id: 'drifloon',
    dexNumber: 425,
    name: 'Drifloon',
    stats: {
      atk: 117,
      def: 80,
      sta: 207,
    },
    types: ['ghost', 'flying'],
    family: {
      id: 'drifloon',
      stage: 1,
    },
  },
  {
    id: 'drifblim',
    dexNumber: 426,
    name: 'Drifblim',
    stats: {
      atk: 180,
      def: 102,
      sta: 312,
    },
    types: ['ghost', 'flying'],
    family: {
      id: 'drifloon',
      stage: 2,
    },
  },
  {
    id: 'buneary',
    dexNumber: 427,
    name: 'Buneary',
    stats: {
      atk: 130,
      def: 105,
      sta: 146,
    },
    types: ['normal'],
    family: {
      id: 'buneary',
      stage: 1,
    },
  },
  {
    id: 'lopunny',
    dexNumber: 428,
    name: 'Lopunny',
    stats: {
      atk: 156,
      def: 194,
      sta: 163,
    },
    types: ['normal'],
    family: {
      id: 'buneary',
      stage: 2,
    },
  },
  {
    id: 'lopunny_mega',
    dexNumber: 428,
    name: 'Lopunny (Mega)',
    stats: {
      atk: 282,
      def: 214,
      sta: 163,
    },
    types: ['normal', 'fighting'],
    family: {
      id: 'buneary',
      stage: 3,
    },
  },
  {
    id: 'mismagius',
    dexNumber: 429,
    name: 'Mismagius',
    stats: {
      atk: 211,
      def: 187,
      sta: 155,
    },
    types: ['ghost'],
    family: {
      id: 'misdreavus',
      stage: 2,
    },
  },
  {
    id: 'honchkrow',
    dexNumber: 430,
    name: 'Honchkrow',
    stats: {
      atk: 243,
      def: 103,
      sta: 225,
    },
    types: ['dark', 'flying'],
    family: {
      id: 'murkrow',
      stage: 2,
    },
  },
  {
    id: 'glameow',
    dexNumber: 431,
    name: 'Glameow',
    stats: {
      atk: 109,
      def: 82,
      sta: 135,
    },
    types: ['normal'],
    family: {
      id: 'glameow',
      stage: 1,
    },
  },
  {
    id: 'purugly',
    dexNumber: 432,
    name: 'Purugly',
    stats: {
      atk: 172,
      def: 133,
      sta: 174,
    },
    types: ['normal'],
    family: {
      id: 'glameow',
      stage: 2,
    },
  },
  {
    id: 'chingling',
    dexNumber: 433,
    name: 'Chingling',
    stats: {
      atk: 114,
      def: 94,
      sta: 128,
    },
    types: ['psychic'],
    family: {
      id: 'chingling',
      stage: 1,
    },
  },
  {
    id: 'stunky',
    dexNumber: 434,
    name: 'Stunky',
    stats: {
      atk: 121,
      def: 90,
      sta: 160,
    },
    types: ['poison', 'dark'],
    family: {
      id: 'stunky',
      stage: 1,
    },
  },
  {
    id: 'skuntank',
    dexNumber: 435,
    name: 'Skuntank',
    stats: {
      atk: 184,
      def: 132,
      sta: 230,
    },
    types: ['poison', 'dark'],
    family: {
      id: 'stunky',
      stage: 2,
    },
  },
  {
    id: 'bronzor',
    dexNumber: 436,
    name: 'Bronzor',
    stats: {
      atk: 43,
      def: 154,
      sta: 149,
    },
    types: ['steel', 'psychic'],
    family: {
      id: 'bronzor',
      stage: 1,
    },
  },
  {
    id: 'bronzong',
    dexNumber: 437,
    name: 'Bronzong',
    stats: {
      atk: 161,
      def: 213,
      sta: 167,
    },
    types: ['steel', 'psychic'],
    family: {
      id: 'bronzor',
      stage: 2,
    },
  },
  {
    id: 'bonsly',
    dexNumber: 438,
    name: 'Bonsly',
    stats: {
      atk: 124,
      def: 133,
      sta: 137,
    },
    types: ['rock'],
    family: {
      id: 'bonsly',
      stage: 1,
    },
  },
  {
    id: 'mime_jr',
    dexNumber: 439,
    name: 'Mime (Jr)',
    stats: {
      atk: 125,
      def: 142,
      sta: 85,
    },
    types: ['psychic', 'fairy'],
    family: {
      id: 'mime_jr',
      stage: 1,
    },
  },
  {
    id: 'happiny',
    dexNumber: 440,
    name: 'Happiny',
    stats: {
      atk: 25,
      def: 77,
      sta: 225,
    },
    types: ['normal'],
    family: {
      id: 'happiny',
      stage: 1,
    },
  },
  {
    id: 'chatot',
    dexNumber: 441,
    name: 'Chatot',
    stats: {
      atk: 183,
      def: 91,
      sta: 183,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'chatot',
      stage: 1,
    },
  },
  {
    id: 'spiritomb',
    dexNumber: 442,
    name: 'Spiritomb',
    stats: {
      atk: 169,
      def: 199,
      sta: 137,
    },
    types: ['ghost', 'dark'],
    floor: 1,
    family: {
      id: 'spiritomb',
      stage: 1,
    },
  },
  {
    id: 'gible',
    dexNumber: 443,
    name: 'Gible',
    stats: {
      atk: 124,
      def: 84,
      sta: 151,
    },
    types: ['dragon', 'ground'],
    family: {
      id: 'gible',
      stage: 1,
    },
  },
  {
    id: 'gabite',
    dexNumber: 444,
    name: 'Gabite',
    stats: {
      atk: 172,
      def: 125,
      sta: 169,
    },
    types: ['dragon', 'ground'],
    family: {
      id: 'gible',
      stage: 2,
    },
  },
  {
    id: 'garchomp',
    dexNumber: 445,
    name: 'Garchomp',
    stats: {
      atk: 261,
      def: 193,
      sta: 239,
    },
    types: ['dragon', 'ground'],
    family: {
      id: 'gible',
      stage: 3,
    },
  },
  {
    id: 'garchomp_mega',
    dexNumber: 445,
    name: 'Garchomp (Mega)',
    stats: {
      atk: 339,
      def: 222,
      sta: 239,
    },
    types: ['dragon', 'ground'],
    family: {
      id: 'gible',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'munchlax',
    dexNumber: 446,
    name: 'Munchlax',
    stats: {
      atk: 137,
      def: 117,
      sta: 286,
    },
    types: ['normal'],
    family: {
      id: 'munchlax',
      stage: 1,
    },
  },
  {
    id: 'riolu',
    dexNumber: 447,
    name: 'Riolu',
    stats: {
      atk: 127,
      def: 78,
      sta: 120,
    },
    types: ['fighting'],
    family: {
      id: 'riolu',
      stage: 1,
    },
  },
  {
    id: 'lucario',
    dexNumber: 448,
    name: 'Lucario',
    stats: {
      atk: 236,
      def: 144,
      sta: 172,
    },
    types: ['fighting', 'steel'],
    family: {
      id: 'riolu',
      stage: 2,
    },
  },
  {
    id: 'lucario_mega',
    dexNumber: 448,
    name: 'Lucario (Mega)',
    stats: {
      atk: 310,
      def: 175,
      sta: 172,
    },
    types: ['fighting', 'steel'],
    family: {
      id: 'riolu',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'hippopotas',
    dexNumber: 449,
    name: 'Hippopotas',
    stats: {
      atk: 124,
      def: 118,
      sta: 169,
    },
    types: ['ground'],
    family: {
      id: 'hippopotas',
      stage: 1,
    },
  },
  {
    id: 'hippowdon',
    dexNumber: 450,
    name: 'Hippowdon',
    stats: {
      atk: 201,
      def: 191,
      sta: 239,
    },
    types: ['ground'],
    family: {
      id: 'hippopotas',
      stage: 2,
    },
  },
  {
    id: 'skorupi',
    dexNumber: 451,
    name: 'Skorupi',
    stats: {
      atk: 93,
      def: 151,
      sta: 120,
    },
    types: ['poison', 'bug'],
    family: {
      id: 'skorupi',
      stage: 1,
    },
  },
  {
    id: 'drapion',
    dexNumber: 452,
    name: 'Drapion',
    stats: {
      atk: 180,
      def: 202,
      sta: 172,
    },
    types: ['poison', 'dark'],
    family: {
      id: 'skorupi',
      stage: 2,
    },
  },
  {
    id: 'croagunk',
    dexNumber: 453,
    name: 'Croagunk',
    stats: {
      atk: 116,
      def: 76,
      sta: 134,
    },
    types: ['poison', 'fighting'],
    family: {
      id: 'croagunk',
      stage: 1,
    },
  },
  {
    id: 'toxicroak',
    dexNumber: 454,
    name: 'Toxicroak',
    stats: {
      atk: 211,
      def: 133,
      sta: 195,
    },
    types: ['poison', 'fighting'],
    family: {
      id: 'croagunk',
      stage: 2,
    },
  },
  {
    id: 'carnivine',
    dexNumber: 455,
    name: 'Carnivine',
    stats: {
      atk: 187,
      def: 136,
      sta: 179,
    },
    types: ['grass'],
    family: {
      id: 'carnivine',
      stage: 1,
    },
  },
  {
    id: 'finneon',
    dexNumber: 456,
    name: 'Finneon',
    stats: {
      atk: 96,
      def: 116,
      sta: 135,
    },
    types: ['water'],
    family: {
      id: 'finneon',
      stage: 1,
    },
  },
  {
    id: 'lumineon',
    dexNumber: 457,
    name: 'Lumineon',
    stats: {
      atk: 142,
      def: 170,
      sta: 170,
    },
    types: ['water'],
    family: {
      id: 'finneon',
      stage: 2,
    },
  },
  {
    id: 'mantyke',
    dexNumber: 458,
    name: 'Mantyke',
    stats: {
      atk: 105,
      def: 179,
      sta: 128,
    },
    types: ['water', 'flying'],
    family: {
      id: 'mantyke',
      stage: 1,
    },
  },
  {
    id: 'snover',
    dexNumber: 459,
    name: 'Snover',
    stats: {
      atk: 115,
      def: 105,
      sta: 155,
    },
    types: ['grass', 'ice'],
    family: {
      id: 'snover',
      stage: 1,
    },
  },
  {
    id: 'abomasnow',
    dexNumber: 460,
    name: 'Abomasnow',
    stats: {
      atk: 178,
      def: 158,
      sta: 207,
    },
    types: ['grass', 'ice'],
    family: {
      id: 'snover',
      stage: 2,
    },
  },
  {
    id: 'abomasnow_mega',
    dexNumber: 460,
    name: 'Abomasnow (Mega)',
    stats: {
      atk: 240,
      def: 191,
      sta: 207,
    },
    types: ['grass', 'ice'],
    family: {
      id: 'snover',
      stage: 3,
    },
  },
  {
    id: 'weavile',
    dexNumber: 461,
    name: 'Weavile',
    stats: {
      atk: 243,
      def: 171,
      sta: 172,
    },
    types: ['dark', 'ice'],
    family: {
      id: 'sneasel',
      stage: 2,
    },
  },
  {
    id: 'magnezone',
    dexNumber: 462,
    name: 'Magnezone',
    stats: {
      atk: 238,
      def: 205,
      sta: 172,
    },
    types: ['electric', 'steel'],
    family: {
      id: 'magnemite',
      stage: 3,
    },
  },
  {
    id: 'lickilicky',
    dexNumber: 463,
    name: 'Lickilicky',
    stats: {
      atk: 161,
      def: 181,
      sta: 242,
    },
    types: ['normal'],
    family: {
      id: 'lickitung',
      stage: 2,
    },
  },
  {
    id: 'rhyperior',
    dexNumber: 464,
    name: 'Rhyperior',
    stats: {
      atk: 241,
      def: 190,
      sta: 251,
    },
    types: ['ground', 'rock'],
    family: {
      id: 'rhyhorn',
      stage: 3,
    },
  },
  {
    id: 'tangrowth',
    dexNumber: 465,
    name: 'Tangrowth',
    stats: {
      atk: 207,
      def: 184,
      sta: 225,
    },
    types: ['grass'],
    family: {
      id: 'tangela',
      stage: 2,
    },
  },
  {
    id: 'electivire',
    dexNumber: 466,
    name: 'Electivire',
    stats: {
      atk: 249,
      def: 163,
      sta: 181,
    },
    types: ['electric'],
    family: {
      id: 'elekid',
      stage: 3,
    },
  },
  {
    id: 'magmortar',
    dexNumber: 467,
    name: 'Magmortar',
    stats: {
      atk: 247,
      def: 172,
      sta: 181,
    },
    types: ['fire'],
    family: {
      id: 'magby',
      stage: 3,
    },
  },
  {
    id: 'togekiss',
    dexNumber: 468,
    name: 'Togekiss',
    stats: {
      atk: 225,
      def: 217,
      sta: 198,
    },
    types: ['fairy', 'flying'],
    family: {
      id: 'togepi',
      stage: 3,
    },
  },
  {
    id: 'yanmega',
    dexNumber: 469,
    name: 'Yanmega',
    stats: {
      atk: 231,
      def: 156,
      sta: 200,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'yanma',
      stage: 2,
    },
  },
  {
    id: 'leafeon',
    dexNumber: 470,
    name: 'Leafeon',
    stats: {
      atk: 216,
      def: 219,
      sta: 163,
    },
    types: ['grass'],
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'glaceon',
    dexNumber: 471,
    name: 'Glaceon',
    stats: {
      atk: 238,
      def: 205,
      sta: 163,
    },
    types: ['ice'],
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'gliscor',
    dexNumber: 472,
    name: 'Gliscor',
    stats: {
      atk: 185,
      def: 222,
      sta: 181,
    },
    types: ['ground', 'flying'],
    family: {
      id: 'gligar',
      stage: 2,
    },
  },
  {
    id: 'mamoswine',
    dexNumber: 473,
    name: 'Mamoswine',
    stats: {
      atk: 247,
      def: 146,
      sta: 242,
    },
    types: ['ice', 'ground'],
    family: {
      id: 'swinub',
      stage: 3,
    },
  },
  {
    id: 'porygon_z',
    dexNumber: 474,
    name: 'Porygon-Z',
    stats: {
      atk: 264,
      def: 150,
      sta: 198,
    },
    types: ['normal'],
    family: {
      id: 'porygon',
      stage: 3,
    },
  },
  {
    id: 'gallade',
    dexNumber: 475,
    name: 'Gallade',
    stats: {
      atk: 237,
      def: 195,
      sta: 169,
    },
    types: ['psychic', 'fighting'],
    family: {
      id: 'ralts',
      stage: 3,
    },
  },
  {
    id: 'gallade_mega',
    dexNumber: 475,
    name: 'Gallade (Mega)',
    stats: {
      atk: 326,
      def: 230,
      sta: 169,
    },
    types: ['psychic', 'fighting'],
    family: {
      id: 'ralts',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'probopass',
    dexNumber: 476,
    name: 'Probopass',
    stats: {
      atk: 135,
      def: 275,
      sta: 155,
    },
    types: ['rock', 'steel'],
    family: {
      id: 'nosepass',
      stage: 2,
    },
  },
  {
    id: 'dusknoir',
    dexNumber: 477,
    name: 'Dusknoir',
    stats: {
      atk: 180,
      def: 254,
      sta: 128,
    },
    types: ['ghost'],
    family: {
      id: 'duskull',
      stage: 3,
    },
  },
  {
    id: 'froslass',
    dexNumber: 478,
    name: 'Froslass',
    stats: {
      atk: 171,
      def: 150,
      sta: 172,
    },
    types: ['ice', 'ghost'],
    family: {
      id: 'snorunt',
      stage: 2,
    },
  },
  {
    id: 'rotom',
    dexNumber: 479,
    name: 'Rotom',
    stats: {
      atk: 185,
      def: 159,
      sta: 137,
    },
    types: ['electric', 'ghost'],
    family: {
      id: 'rotom',
      stage: 1,
    },
  },
  {
    id: 'uxie',
    dexNumber: 480,
    name: 'Uxie',
    stats: {
      atk: 156,
      def: 270,
      sta: 181,
    },
    types: ['psychic'],
    family: {
      id: 'uxie',
      stage: 1,
    },
  },
  {
    id: 'mesprit',
    dexNumber: 481,
    name: 'Mesprit',
    stats: {
      atk: 212,
      def: 212,
      sta: 190,
    },
    types: ['psychic'],
    family: {
      id: 'mesprit',
      stage: 1,
    },
  },
  {
    id: 'azelf',
    dexNumber: 482,
    name: 'Azelf',
    stats: {
      atk: 270,
      def: 151,
      sta: 181,
    },
    types: ['psychic'],
    family: {
      id: 'azelf',
      stage: 1,
    },
  },
  {
    id: 'dialga',
    dexNumber: 483,
    name: 'Dialga',
    stats: {
      atk: 275,
      def: 211,
      sta: 205,
    },
    types: ['steel', 'dragon'],
    floor: 1,
    family: {
      id: 'dialga',
      stage: 1,
    },
  },
  {
    id: 'palkia',
    dexNumber: 484,
    name: 'Palkia',
    stats: {
      atk: 280,
      def: 215,
      sta: 189,
    },
    types: ['water', 'dragon'],
    floor: 1,
    family: {
      id: 'palkia',
      stage: 1,
    },
  },
  {
    id: 'heatran',
    dexNumber: 485,
    name: 'Heatran',
    stats: {
      atk: 251,
      def: 213,
      sta: 209,
    },
    types: ['fire', 'steel'],
    floor: 1,
    family: {
      id: 'heatran',
      stage: 1,
    },
  },
  {
    id: 'regigigas',
    dexNumber: 486,
    name: 'Regigigas',
    stats: {
      atk: 287,
      def: 210,
      sta: 221,
    },
    types: ['normal'],
    floor: 1,
    family: {
      id: 'regigigas',
      stage: 1,
    },
  },
  {
    id: 'giratina_altered',
    dexNumber: 487,
    name: 'Giratina (Altered)',
    stats: {
      atk: 187,
      def: 225,
      sta: 284,
    },
    types: ['ghost', 'dragon'],
    floor: 1,
    family: {
      id: 'giratina_altered',
      stage: 1,
    },
  },
  {
    id: 'giratina_origin',
    dexNumber: 487,
    name: 'Giratina (Origin)',
    stats: {
      atk: 225,
      def: 187,
      sta: 284,
    },
    types: ['ghost', 'dragon'],
    floor: 1,
    family: {
      id: 'giratina_origin',
      stage: 1,
    },
  },
  {
    id: 'cresselia',
    dexNumber: 488,
    name: 'Cresselia',
    stats: {
      atk: 152,
      def: 258,
      sta: 260,
    },
    types: ['psychic'],
    floor: 1,
    family: {
      id: 'cresselia',
      stage: 1,
    },
  },
  {
    id: 'phione',
    dexNumber: 489,
    name: 'Phione',
    stats: {
      atk: 162,
      def: 162,
      sta: 190,
    },
    types: ['water'],
    floor: 10,
    family: {
      id: 'phione',
      stage: 1,
    },
  },
  {
    id: 'manaphy',
    dexNumber: 490,
    name: 'Manaphy',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    types: ['water'],
    floor: 10,
    family: {
      id: 'manaphy',
      stage: 1,
    },
  },
  {
    id: 'darkrai',
    dexNumber: 491,
    name: 'Darkrai',
    stats: {
      atk: 285,
      def: 198,
      sta: 172,
    },
    types: ['dark'],
    floor: 10,
    family: {
      id: 'darkrai',
      stage: 1,
    },
  },
  {
    id: 'shaymin_land',
    dexNumber: 492,
    name: 'Shaymin (Land)',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    types: ['grass'],
    floor: 10,
    family: {
      id: 'shaymin_land',
      stage: 1,
    },
  },
  {
    id: 'shaymin_sky',
    dexNumber: 492,
    name: 'Shaymin (Sky)',
    stats: {
      atk: 261,
      def: 166,
      sta: 225,
    },
    types: ['grass', 'flying'],
    floor: 10,
    family: {
      id: 'shaymin_sky',
      stage: 1,
    },
  },
  {
    id: 'arceus',
    dexNumber: 493,
    name: 'Arceus',
    stats: {
      atk: 238,
      def: 238,
      sta: 237,
    },
    types: ['normal'],
    floor: 10,
    family: {
      id: 'arceus',
      stage: 1,
    },
  },
  {
    id: 'victini',
    dexNumber: 494,
    name: 'Victini',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    types: ['psychic', 'fire'],
    floor: 10,
    family: {
      id: 'victini',
      stage: 1,
    },
  },
  {
    id: 'snivy',
    dexNumber: 495,
    name: 'Snivy',
    stats: {
      atk: 88,
      def: 107,
      sta: 128,
    },
    types: ['grass'],
    family: {
      id: 'snivy',
      stage: 1,
    },
  },
  {
    id: 'servine',
    dexNumber: 496,
    name: 'Servine',
    stats: {
      atk: 122,
      def: 152,
      sta: 155,
    },
    types: ['grass'],
    family: {
      id: 'snivy',
      stage: 2,
    },
  },
  {
    id: 'serperior',
    dexNumber: 497,
    name: 'Serperior',
    stats: {
      atk: 161,
      def: 204,
      sta: 181,
    },
    types: ['grass'],
    family: {
      id: 'snivy',
      stage: 3,
    },
  },
  {
    id: 'tepig',
    dexNumber: 498,
    name: 'Tepig',
    stats: {
      atk: 115,
      def: 85,
      sta: 163,
    },
    types: ['fire'],
    family: {
      id: 'tepig',
      stage: 1,
    },
  },
  {
    id: 'pignite',
    dexNumber: 499,
    name: 'Pignite',
    stats: {
      atk: 173,
      def: 106,
      sta: 207,
    },
    types: ['fire', 'fighting'],
    family: {
      id: 'tepig',
      stage: 2,
    },
  },
  {
    id: 'emboar',
    dexNumber: 500,
    name: 'Emboar',
    stats: {
      atk: 235,
      def: 127,
      sta: 242,
    },
    types: ['fire', 'fighting'],
    family: {
      id: 'tepig',
      stage: 3,
    },
  },
  {
    id: 'oshawott',
    dexNumber: 501,
    name: 'Oshawott',
    stats: {
      atk: 117,
      def: 85,
      sta: 146,
    },
    types: ['water'],
    family: {
      id: 'oshawott',
      stage: 1,
    },
  },
  {
    id: 'dewott',
    dexNumber: 502,
    name: 'Dewott',
    stats: {
      atk: 159,
      def: 116,
      sta: 181,
    },
    types: ['water'],
    family: {
      id: 'oshawott',
      stage: 2,
    },
  },
  {
    id: 'samurott',
    dexNumber: 503,
    name: 'Samurott',
    stats: {
      atk: 212,
      def: 157,
      sta: 216,
    },
    types: ['water'],
    family: {
      id: 'oshawott',
      stage: 3,
    },
  },
  {
    id: 'patrat',
    dexNumber: 504,
    name: 'Patrat',
    stats: {
      atk: 98,
      def: 73,
      sta: 128,
    },
    types: ['normal'],
    family: {
      id: 'patrat',
      stage: 1,
    },
  },
  {
    id: 'watchog',
    dexNumber: 505,
    name: 'Watchog',
    stats: {
      atk: 165,
      def: 139,
      sta: 155,
    },
    types: ['normal'],
    family: {
      id: 'patrat',
      stage: 2,
    },
  },
  {
    id: 'lillipup',
    dexNumber: 506,
    name: 'Lillipup',
    stats: {
      atk: 107,
      def: 86,
      sta: 128,
    },
    types: ['normal'],
    family: {
      id: 'lillipup',
      stage: 1,
    },
  },
  {
    id: 'herdier',
    dexNumber: 507,
    name: 'Herdier',
    stats: {
      atk: 145,
      def: 126,
      sta: 163,
    },
    types: ['normal'],
    family: {
      id: 'lillipup',
      stage: 2,
    },
  },
  {
    id: 'stoutland',
    dexNumber: 508,
    name: 'Stoutland',
    stats: {
      atk: 206,
      def: 182,
      sta: 198,
    },
    types: ['normal'],
    family: {
      id: 'lillipup',
      stage: 3,
    },
  },
  {
    id: 'purrloin',
    dexNumber: 509,
    name: 'Purrloin',
    stats: {
      atk: 98,
      def: 73,
      sta: 121,
    },
    types: ['dark'],
    family: {
      id: 'purrloin',
      stage: 1,
    },
  },
  {
    id: 'liepard',
    dexNumber: 510,
    name: 'Liepard',
    stats: {
      atk: 187,
      def: 106,
      sta: 162,
    },
    types: ['dark'],
    family: {
      id: 'purrloin',
      stage: 2,
    },
  },
  {
    id: 'pansage',
    dexNumber: 511,
    name: 'Pansage',
    stats: {
      atk: 104,
      def: 94,
      sta: 137,
    },
    types: ['grass'],
    family: {
      id: 'pansage',
      stage: 1,
    },
  },
  {
    id: 'simisage',
    dexNumber: 512,
    name: 'Simisage',
    stats: {
      atk: 206,
      def: 133,
      sta: 181,
    },
    types: ['grass'],
    family: {
      id: 'pansage',
      stage: 2,
    },
  },
  {
    id: 'pansear',
    dexNumber: 513,
    name: 'Pansear',
    stats: {
      atk: 104,
      def: 94,
      sta: 137,
    },
    types: ['fire'],
    family: {
      id: 'pansear',
      stage: 1,
    },
  },
  {
    id: 'simisear',
    dexNumber: 514,
    name: 'Simisear',
    stats: {
      atk: 206,
      def: 133,
      sta: 181,
    },
    types: ['fire'],
    family: {
      id: 'pansear',
      stage: 2,
    },
  },
  {
    id: 'panpour',
    dexNumber: 515,
    name: 'Panpour',
    stats: {
      atk: 104,
      def: 94,
      sta: 137,
    },
    types: ['water'],
    family: {
      id: 'panpour',
      stage: 1,
    },
  },
  {
    id: 'simipour',
    dexNumber: 516,
    name: 'Simipour',
    stats: {
      atk: 206,
      def: 133,
      sta: 181,
    },
    types: ['water'],
    family: {
      id: 'panpour',
      stage: 2,
    },
  },
  {
    id: 'munna',
    dexNumber: 517,
    name: 'Munna',
    stats: {
      atk: 111,
      def: 92,
      sta: 183,
    },
    types: ['psychic'],
    family: {
      id: 'munna',
      stage: 1,
    },
  },
  {
    id: 'musharna',
    dexNumber: 518,
    name: 'Musharna',
    stats: {
      atk: 183,
      def: 166,
      sta: 253,
    },
    types: ['psychic'],
    family: {
      id: 'munna',
      stage: 2,
    },
  },
  {
    id: 'pidove',
    dexNumber: 519,
    name: 'Pidove',
    stats: {
      atk: 98,
      def: 80,
      sta: 137,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'pidove',
      stage: 1,
    },
  },
  {
    id: 'tranquill',
    dexNumber: 520,
    name: 'Tranquill',
    stats: {
      atk: 144,
      def: 107,
      sta: 158,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'pidove',
      stage: 2,
    },
  },
  {
    id: 'unfezant',
    dexNumber: 521,
    name: 'Unfezant',
    stats: {
      atk: 226,
      def: 146,
      sta: 190,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'pidove',
      stage: 3,
    },
  },
  {
    id: 'blitzle',
    dexNumber: 522,
    name: 'Blitzle',
    stats: {
      atk: 118,
      def: 64,
      sta: 128,
    },
    types: ['electric'],
    family: {
      id: 'blitzle',
      stage: 1,
    },
  },
  {
    id: 'zebstrika',
    dexNumber: 523,
    name: 'Zebstrika',
    stats: {
      atk: 211,
      def: 136,
      sta: 181,
    },
    types: ['electric'],
    family: {
      id: 'blitzle',
      stage: 2,
    },
  },
  {
    id: 'roggenrola',
    dexNumber: 524,
    name: 'Roggenrola',
    stats: {
      atk: 121,
      def: 110,
      sta: 146,
    },
    types: ['rock'],
    family: {
      id: 'roggenrola',
      stage: 1,
    },
  },
  {
    id: 'boldore',
    dexNumber: 525,
    name: 'Boldore',
    stats: {
      atk: 174,
      def: 143,
      sta: 172,
    },
    types: ['rock'],
    family: {
      id: 'roggenrola',
      stage: 2,
    },
  },
  {
    id: 'gigalith',
    dexNumber: 526,
    name: 'Gigalith',
    stats: {
      atk: 226,
      def: 201,
      sta: 198,
    },
    types: ['rock'],
    family: {
      id: 'roggenrola',
      stage: 3,
    },
  },
  {
    id: 'woobat',
    dexNumber: 527,
    name: 'Woobat',
    stats: {
      atk: 107,
      def: 85,
      sta: 163,
    },
    types: ['psychic', 'flying'],
    family: {
      id: 'woobat',
      stage: 1,
    },
  },
  {
    id: 'swoobat',
    dexNumber: 528,
    name: 'Swoobat',
    stats: {
      atk: 161,
      def: 119,
      sta: 167,
    },
    types: ['psychic', 'flying'],
    family: {
      id: 'woobat',
      stage: 2,
    },
  },
  {
    id: 'drilbur',
    dexNumber: 529,
    name: 'Drilbur',
    stats: {
      atk: 154,
      def: 85,
      sta: 155,
    },
    types: ['ground'],
    family: {
      id: 'drilbur',
      stage: 1,
    },
  },
  {
    id: 'excadrill',
    dexNumber: 530,
    name: 'Excadrill',
    stats: {
      atk: 255,
      def: 129,
      sta: 242,
    },
    types: ['ground', 'steel'],
    family: {
      id: 'drilbur',
      stage: 2,
    },
  },
  {
    id: 'audino',
    dexNumber: 531,
    name: 'Audino',
    stats: {
      atk: 114,
      def: 163,
      sta: 230,
    },
    types: ['normal'],
    family: {
      id: 'audino',
      stage: 1,
    },
  },
  {
    id: 'audino_mega',
    dexNumber: 531,
    name: 'Audino (Mega)',
    stats: {
      atk: 147,
      def: 239,
      sta: 230,
    },
    types: ['normal'],
    family: {
      id: 'audino',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'timburr',
    dexNumber: 532,
    name: 'Timburr',
    stats: {
      atk: 134,
      def: 87,
      sta: 181,
    },
    types: ['fighting'],
    family: {
      id: 'timburr',
      stage: 1,
    },
  },
  {
    id: 'gurdurr',
    dexNumber: 533,
    name: 'Gurdurr',
    stats: {
      atk: 180,
      def: 134,
      sta: 198,
    },
    types: ['fighting'],
    family: {
      id: 'timburr',
      stage: 2,
    },
  },
  {
    id: 'conkeldurr',
    dexNumber: 534,
    name: 'Conkeldurr',
    stats: {
      atk: 243,
      def: 158,
      sta: 233,
    },
    types: ['fighting'],
    family: {
      id: 'timburr',
      stage: 3,
    },
  },
  {
    id: 'tympole',
    dexNumber: 535,
    name: 'Tympole',
    stats: {
      atk: 98,
      def: 78,
      sta: 137,
    },
    types: ['water'],
    family: {
      id: 'tympole',
      stage: 1,
    },
  },
  {
    id: 'palpitoad',
    dexNumber: 536,
    name: 'Palpitoad',
    stats: {
      atk: 128,
      def: 109,
      sta: 181,
    },
    types: ['water', 'ground'],
    family: {
      id: 'tympole',
      stage: 2,
    },
  },
  {
    id: 'seismitoad',
    dexNumber: 537,
    name: 'Seismitoad',
    stats: {
      atk: 188,
      def: 150,
      sta: 233,
    },
    types: ['water', 'ground'],
    family: {
      id: 'tympole',
      stage: 3,
    },
  },
  {
    id: 'throh',
    dexNumber: 538,
    name: 'Throh',
    stats: {
      atk: 172,
      def: 160,
      sta: 260,
    },
    types: ['fighting'],
    family: {
      id: 'throh',
      stage: 1,
    },
  },
  {
    id: 'sawk',
    dexNumber: 539,
    name: 'Sawk',
    stats: {
      atk: 231,
      def: 153,
      sta: 181,
    },
    types: ['fighting'],
    family: {
      id: 'sawk',
      stage: 1,
    },
  },
  {
    id: 'sewaddle',
    dexNumber: 540,
    name: 'Sewaddle',
    stats: {
      atk: 96,
      def: 124,
      sta: 128,
    },
    types: ['bug', 'grass'],
    family: {
      id: 'sewaddle',
      stage: 1,
    },
  },
  {
    id: 'swadloon',
    dexNumber: 541,
    name: 'Swadloon',
    stats: {
      atk: 115,
      def: 162,
      sta: 146,
    },
    types: ['bug', 'grass'],
    family: {
      id: 'sewaddle',
      stage: 2,
    },
  },
  {
    id: 'leavanny',
    dexNumber: 542,
    name: 'Leavanny',
    stats: {
      atk: 205,
      def: 165,
      sta: 181,
    },
    types: ['bug', 'grass'],
    family: {
      id: 'sewaddle',
      stage: 3,
    },
  },
  {
    id: 'venipede',
    dexNumber: 543,
    name: 'Venipede',
    stats: {
      atk: 83,
      def: 99,
      sta: 102,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'venipede',
      stage: 1,
    },
  },
  {
    id: 'whirlipede',
    dexNumber: 544,
    name: 'Whirlipede',
    stats: {
      atk: 100,
      def: 173,
      sta: 120,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'venipede',
      stage: 2,
    },
  },
  {
    id: 'scolipede',
    dexNumber: 545,
    name: 'Scolipede',
    stats: {
      atk: 203,
      def: 175,
      sta: 155,
    },
    types: ['bug', 'poison'],
    family: {
      id: 'venipede',
      stage: 3,
    },
  },
  {
    id: 'cottonee',
    dexNumber: 546,
    name: 'Cottonee',
    stats: {
      atk: 71,
      def: 111,
      sta: 120,
    },
    types: ['grass', 'fairy'],
    family: {
      id: 'cottonee',
      stage: 1,
    },
  },
  {
    id: 'whimsicott',
    dexNumber: 547,
    name: 'Whimsicott',
    stats: {
      atk: 164,
      def: 176,
      sta: 155,
    },
    types: ['grass', 'fairy'],
    family: {
      id: 'cottonee',
      stage: 2,
    },
  },
  {
    id: 'petilil',
    dexNumber: 548,
    name: 'Petilil',
    stats: {
      atk: 119,
      def: 91,
      sta: 128,
    },
    types: ['grass'],
    family: {
      id: 'petilil',
      stage: 1,
    },
  },
  {
    id: 'lilligant',
    dexNumber: 549,
    name: 'Lilligant',
    stats: {
      atk: 214,
      def: 155,
      sta: 172,
    },
    types: ['grass'],
    family: {
      id: 'petilil',
      stage: 2,
    },
  },
  {
    id: 'basculin',
    dexNumber: 550,
    name: 'Basculin',
    stats: {
      atk: 189,
      def: 129,
      sta: 172,
    },
    types: ['water'],
    family: {
      id: 'basculin',
      stage: 1,
    },
  },
  {
    id: 'sandile',
    dexNumber: 551,
    name: 'Sandile',
    stats: {
      atk: 132,
      def: 69,
      sta: 137,
    },
    types: ['ground', 'dark'],
    family: {
      id: 'sandile',
      stage: 1,
    },
  },
  {
    id: 'krokorok',
    dexNumber: 552,
    name: 'Krokorok',
    stats: {
      atk: 155,
      def: 90,
      sta: 155,
    },
    types: ['ground', 'dark'],
    family: {
      id: 'sandile',
      stage: 2,
    },
  },
  {
    id: 'krookodile',
    dexNumber: 553,
    name: 'Krookodile',
    stats: {
      atk: 229,
      def: 158,
      sta: 216,
    },
    types: ['ground', 'dark'],
    family: {
      id: 'sandile',
      stage: 3,
    },
  },
  {
    id: 'darumaka',
    dexNumber: 554,
    name: 'Darumaka',
    stats: {
      atk: 153,
      def: 86,
      sta: 172,
    },
    types: ['fire'],
    family: {
      id: 'darumaka',
      stage: 1,
    },
  },
  {
    id: 'darumaka_galarian',
    dexNumber: 554,
    name: 'Darumaka (Galarian)',
    stats: {
      atk: 153,
      def: 86,
      sta: 172,
    },
    types: ['ice'],
    family: {
      id: 'darumaka_galarian',
      stage: 1,
    },
  },
  {
    id: 'darmanitan_galarian_standard',
    dexNumber: 555,
    name: 'Darmanitan (Galarian)',
    stats: {
      atk: 263,
      def: 114,
      sta: 233,
    },
    types: ['ice'],
    family: {
      id: 'darumaka_galarian',
      stage: 2,
    },
  },
  {
    id: 'darmanitan_galarian_zen',
    dexNumber: 555,
    name: 'Darmanitan (Galarian Zen)',
    stats: {
      atk: 323,
      def: 123,
      sta: 233,
    },
    types: ['ice', 'fire'],
    family: {
      id: 'darumaka_galarian',
      stage: 3,
    },
  },
  {
    id: 'darmanitan_standard',
    dexNumber: 555,
    name: 'Darmanitan (Standard)',
    stats: {
      atk: 263,
      def: 114,
      sta: 233,
    },
    types: ['fire'],
    family: {
      id: 'darumaka',
      stage: 2,
    },
  },
  {
    id: 'darmanitan_zen',
    dexNumber: 555,
    name: 'Darmanitan (Zen)',
    stats: {
      atk: 243,
      def: 202,
      sta: 233,
    },
    types: ['fire', 'psychic'],
    family: {
      id: 'darumaka',
      stage: 3,
    },
  },
  {
    id: 'maractus',
    dexNumber: 556,
    name: 'Maractus',
    stats: {
      atk: 201,
      def: 130,
      sta: 181,
    },
    types: ['grass'],
    family: {
      id: 'maractus',
      stage: 1,
    },
  },
  {
    id: 'dwebble',
    dexNumber: 557,
    name: 'Dwebble',
    stats: {
      atk: 118,
      def: 128,
      sta: 137,
    },
    types: ['bug', 'rock'],
    family: {
      id: 'dwebble',
      stage: 1,
    },
  },
  {
    id: 'crustle',
    dexNumber: 558,
    name: 'Crustle',
    stats: {
      atk: 188,
      def: 200,
      sta: 172,
    },
    types: ['bug', 'rock'],
    family: {
      id: 'dwebble',
      stage: 2,
    },
  },
  {
    id: 'scraggy',
    dexNumber: 559,
    name: 'Scraggy',
    stats: {
      atk: 132,
      def: 132,
      sta: 137,
    },
    types: ['dark', 'fighting'],
    family: {
      id: 'scraggy',
      stage: 1,
    },
  },
  {
    id: 'scrafty',
    dexNumber: 560,
    name: 'Scrafty',
    stats: {
      atk: 163,
      def: 222,
      sta: 163,
    },
    types: ['dark', 'fighting'],
    family: {
      id: 'scraggy',
      stage: 2,
    },
  },
  {
    id: 'sigilyph',
    dexNumber: 561,
    name: 'Sigilyph',
    stats: {
      atk: 204,
      def: 167,
      sta: 176,
    },
    types: ['psychic', 'flying'],
    family: {
      id: 'sigilyph',
      stage: 1,
    },
  },
  {
    id: 'yamask',
    dexNumber: 562,
    name: 'Yamask',
    stats: {
      atk: 95,
      def: 141,
      sta: 116,
    },
    types: ['ghost'],
    family: {
      id: 'yamask',
      stage: 1,
    },
  },
  {
    id: 'yamask_galarian',
    dexNumber: 562,
    name: 'Yamask (Galarian)',
    stats: {
      atk: 95,
      def: 141,
      sta: 116,
    },
    types: ['ground', 'ghost'],
    family: {
      id: 'yamask_galarian',
      stage: 1,
    },
  },
  {
    id: 'cofagrigus',
    dexNumber: 563,
    name: 'Cofagrigus',
    stats: {
      atk: 163,
      def: 237,
      sta: 151,
    },
    types: ['ghost'],
    family: {
      id: 'yamask',
      stage: 2,
    },
  },
  {
    id: 'tirtouga',
    dexNumber: 564,
    name: 'Tirtouga',
    stats: {
      atk: 134,
      def: 146,
      sta: 144,
    },
    types: ['water', 'rock'],
    family: {
      id: 'tirtouga',
      stage: 1,
    },
  },
  {
    id: 'carracosta',
    dexNumber: 565,
    name: 'Carracosta',
    stats: {
      atk: 192,
      def: 197,
      sta: 179,
    },
    types: ['water', 'rock'],
    family: {
      id: 'tirtouga',
      stage: 2,
    },
  },
  {
    id: 'archen',
    dexNumber: 566,
    name: 'Archen',
    stats: {
      atk: 213,
      def: 89,
      sta: 146,
    },
    types: ['rock', 'flying'],
    family: {
      id: 'archen',
      stage: 1,
    },
  },
  {
    id: 'archeops',
    dexNumber: 567,
    name: 'Archeops',
    stats: {
      atk: 292,
      def: 139,
      sta: 181,
    },
    types: ['rock', 'flying'],
    family: {
      id: 'archen',
      stage: 2,
    },
  },
  {
    id: 'trubbish',
    dexNumber: 568,
    name: 'Trubbish',
    stats: {
      atk: 96,
      def: 122,
      sta: 137,
    },
    types: ['poison'],
    family: {
      id: 'trubbish',
      stage: 1,
    },
  },
  {
    id: 'garbodor',
    dexNumber: 569,
    name: 'Garbodor',
    stats: {
      atk: 181,
      def: 164,
      sta: 190,
    },
    types: ['poison'],
    family: {
      id: 'trubbish',
      stage: 2,
    },
  },
  {
    id: 'zorua',
    dexNumber: 570,
    name: 'Zorua',
    stats: {
      atk: 153,
      def: 78,
      sta: 120,
    },
    types: ['dark'],
    family: {
      id: 'zorua',
      stage: 1,
    },
  },
  {
    id: 'zoroark',
    dexNumber: 571,
    name: 'Zoroark',
    stats: {
      atk: 250,
      def: 127,
      sta: 155,
    },
    types: ['dark'],
    family: {
      id: 'zorua',
      stage: 2,
    },
  },
  {
    id: 'minccino',
    dexNumber: 572,
    name: 'Minccino',
    stats: {
      atk: 98,
      def: 80,
      sta: 146,
    },
    types: ['normal'],
    family: {
      id: 'minccino',
      stage: 1,
    },
  },
  {
    id: 'cinccino',
    dexNumber: 573,
    name: 'Cinccino',
    stats: {
      atk: 198,
      def: 130,
      sta: 181,
    },
    types: ['normal'],
    family: {
      id: 'minccino',
      stage: 2,
    },
  },
  {
    id: 'gothita',
    dexNumber: 574,
    name: 'Gothita',
    stats: {
      atk: 98,
      def: 112,
      sta: 128,
    },
    types: ['psychic'],
    family: {
      id: 'gothita',
      stage: 1,
    },
  },
  {
    id: 'gothorita',
    dexNumber: 575,
    name: 'Gothorita',
    stats: {
      atk: 137,
      def: 153,
      sta: 155,
    },
    types: ['psychic'],
    family: {
      id: 'gothita',
      stage: 2,
    },
  },
  {
    id: 'gothitelle',
    dexNumber: 576,
    name: 'Gothitelle',
    stats: {
      atk: 176,
      def: 205,
      sta: 172,
    },
    types: ['psychic'],
    family: {
      id: 'gothita',
      stage: 3,
    },
  },
  {
    id: 'solosis',
    dexNumber: 577,
    name: 'Solosis',
    stats: {
      atk: 170,
      def: 83,
      sta: 128,
    },
    types: ['psychic'],
    family: {
      id: 'solosis',
      stage: 1,
    },
  },
  {
    id: 'duosion',
    dexNumber: 578,
    name: 'Duosion',
    stats: {
      atk: 208,
      def: 103,
      sta: 163,
    },
    types: ['psychic'],
    family: {
      id: 'solosis',
      stage: 2,
    },
  },
  {
    id: 'reuniclus',
    dexNumber: 579,
    name: 'Reuniclus',
    stats: {
      atk: 214,
      def: 148,
      sta: 242,
    },
    types: ['psychic'],
    family: {
      id: 'solosis',
      stage: 3,
    },
  },
  {
    id: 'ducklett',
    dexNumber: 580,
    name: 'Ducklett',
    stats: {
      atk: 84,
      def: 96,
      sta: 158,
    },
    types: ['water', 'flying'],
    family: {
      id: 'ducklett',
      stage: 1,
    },
  },
  {
    id: 'swanna',
    dexNumber: 581,
    name: 'Swanna',
    stats: {
      atk: 182,
      def: 132,
      sta: 181,
    },
    types: ['water', 'flying'],
    family: {
      id: 'ducklett',
      stage: 2,
    },
  },
  {
    id: 'vanillite',
    dexNumber: 582,
    name: 'Vanillite',
    stats: {
      atk: 118,
      def: 106,
      sta: 113,
    },
    types: ['ice'],
    family: {
      id: 'vanillite',
      stage: 1,
    },
  },
  {
    id: 'vanillish',
    dexNumber: 583,
    name: 'Vanillish',
    stats: {
      atk: 151,
      def: 138,
      sta: 139,
    },
    types: ['ice'],
    family: {
      id: 'vanillite',
      stage: 2,
    },
  },
  {
    id: 'vanilluxe',
    dexNumber: 584,
    name: 'Vanilluxe',
    stats: {
      atk: 218,
      def: 184,
      sta: 174,
    },
    types: ['ice'],
    family: {
      id: 'vanillite',
      stage: 3,
    },
  },
  {
    id: 'deerling',
    dexNumber: 585,
    name: 'Deerling',
    stats: {
      atk: 115,
      def: 100,
      sta: 155,
    },
    types: ['normal', 'grass'],
    family: {
      id: 'deerling',
      stage: 1,
    },
  },
  {
    id: 'sawsbuck',
    dexNumber: 586,
    name: 'Sawsbuck',
    stats: {
      atk: 198,
      def: 146,
      sta: 190,
    },
    types: ['normal', 'grass'],
    family: {
      id: 'deerling',
      stage: 2,
    },
  },
  {
    id: 'emolga',
    dexNumber: 587,
    name: 'Emolga',
    stats: {
      atk: 158,
      def: 127,
      sta: 146,
    },
    types: ['electric', 'flying'],
    family: {
      id: 'emolga',
      stage: 1,
    },
  },
  {
    id: 'karrablast',
    dexNumber: 588,
    name: 'Karrablast',
    stats: {
      atk: 137,
      def: 87,
      sta: 137,
    },
    types: ['bug'],
    family: {
      id: 'karrablast',
      stage: 1,
    },
  },
  {
    id: 'escavalier',
    dexNumber: 589,
    name: 'Escavalier',
    stats: {
      atk: 223,
      def: 187,
      sta: 172,
    },
    types: ['bug', 'steel'],
    family: {
      id: 'karrablast',
      stage: 2,
    },
  },
  {
    id: 'foongus',
    dexNumber: 590,
    name: 'Foongus',
    stats: {
      atk: 97,
      def: 91,
      sta: 170,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'foongus',
      stage: 1,
    },
  },
  {
    id: 'amoonguss',
    dexNumber: 591,
    name: 'Amoonguss',
    stats: {
      atk: 155,
      def: 139,
      sta: 249,
    },
    types: ['grass', 'poison'],
    family: {
      id: 'foongus',
      stage: 2,
    },
  },
  {
    id: 'frillish',
    dexNumber: 592,
    name: 'Frillish',
    stats: {
      atk: 115,
      def: 134,
      sta: 146,
    },
    types: ['water', 'ghost'],
    family: {
      id: 'frillish',
      stage: 1,
    },
  },
  {
    id: 'jellicent',
    dexNumber: 593,
    name: 'Jellicent',
    stats: {
      atk: 159,
      def: 178,
      sta: 225,
    },
    types: ['water', 'ghost'],
    family: {
      id: 'frillish',
      stage: 2,
    },
  },
  {
    id: 'alomomola',
    dexNumber: 594,
    name: 'Alomomola',
    stats: {
      atk: 138,
      def: 131,
      sta: 338,
    },
    types: ['water'],
    family: {
      id: 'alomomola',
      stage: 1,
    },
  },
  {
    id: 'joltik',
    dexNumber: 595,
    name: 'Joltik',
    stats: {
      atk: 110,
      def: 98,
      sta: 137,
    },
    types: ['bug', 'electric'],
    family: {
      id: 'joltik',
      stage: 1,
    },
  },
  {
    id: 'galvantula',
    dexNumber: 596,
    name: 'Galvantula',
    stats: {
      atk: 201,
      def: 128,
      sta: 172,
    },
    types: ['bug', 'electric'],
    family: {
      id: 'joltik',
      stage: 2,
    },
  },
  {
    id: 'ferroseed',
    dexNumber: 597,
    name: 'Ferroseed',
    stats: {
      atk: 82,
      def: 155,
      sta: 127,
    },
    types: ['grass', 'steel'],
    family: {
      id: 'ferroseed',
      stage: 1,
    },
  },
  {
    id: 'ferrothorn',
    dexNumber: 598,
    name: 'Ferrothorn',
    stats: {
      atk: 158,
      def: 223,
      sta: 179,
    },
    types: ['grass', 'steel'],
    family: {
      id: 'ferroseed',
      stage: 2,
    },
  },
  {
    id: 'klink',
    dexNumber: 599,
    name: 'Klink',
    stats: {
      atk: 98,
      def: 121,
      sta: 120,
    },
    types: ['steel'],
    family: {
      id: 'klink',
      stage: 1,
    },
  },
  {
    id: 'klang',
    dexNumber: 600,
    name: 'Klang',
    stats: {
      atk: 150,
      def: 174,
      sta: 155,
    },
    types: ['steel'],
    family: {
      id: 'klink',
      stage: 2,
    },
  },
  {
    id: 'klinklang',
    dexNumber: 601,
    name: 'Klinklang',
    stats: {
      atk: 199,
      def: 214,
      sta: 155,
    },
    types: ['steel'],
    family: {
      id: 'klink',
      stage: 3,
    },
  },
  {
    id: 'tynamo',
    dexNumber: 602,
    name: 'Tynamo',
    stats: {
      atk: 105,
      def: 78,
      sta: 111,
    },
    types: ['electric'],
    family: {
      id: 'tynamo',
      stage: 1,
    },
  },
  {
    id: 'eelektrik',
    dexNumber: 603,
    name: 'Eelektrik',
    stats: {
      atk: 156,
      def: 130,
      sta: 163,
    },
    types: ['electric'],
    family: {
      id: 'tynamo',
      stage: 2,
    },
  },
  {
    id: 'eelektross',
    dexNumber: 604,
    name: 'Eelektross',
    stats: {
      atk: 217,
      def: 152,
      sta: 198,
    },
    types: ['electric'],
    family: {
      id: 'tynamo',
      stage: 3,
    },
  },
  {
    id: 'elgyem',
    dexNumber: 605,
    name: 'Elgyem',
    stats: {
      atk: 148,
      def: 100,
      sta: 146,
    },
    types: ['psychic'],
    family: {
      id: 'elgyem',
      stage: 1,
    },
  },
  {
    id: 'beheeyem',
    dexNumber: 606,
    name: 'Beheeyem',
    stats: {
      atk: 221,
      def: 163,
      sta: 181,
    },
    types: ['psychic'],
    family: {
      id: 'elgyem',
      stage: 2,
    },
  },
  {
    id: 'litwick',
    dexNumber: 607,
    name: 'Litwick',
    stats: {
      atk: 108,
      def: 98,
      sta: 137,
    },
    types: ['ghost', 'fire'],
    family: {
      id: 'litwick',
      stage: 1,
    },
  },
  {
    id: 'lampent',
    dexNumber: 608,
    name: 'Lampent',
    stats: {
      atk: 169,
      def: 115,
      sta: 155,
    },
    types: ['ghost', 'fire'],
    family: {
      id: 'litwick',
      stage: 2,
    },
  },
  {
    id: 'chandelure',
    dexNumber: 609,
    name: 'Chandelure',
    stats: {
      atk: 271,
      def: 182,
      sta: 155,
    },
    types: ['ghost', 'fire'],
    family: {
      id: 'litwick',
      stage: 3,
    },
  },
  {
    id: 'axew',
    dexNumber: 610,
    name: 'Axew',
    stats: {
      atk: 154,
      def: 101,
      sta: 130,
    },
    types: ['dragon'],
    family: {
      id: 'axew',
      stage: 1,
    },
  },
  {
    id: 'fraxure',
    dexNumber: 611,
    name: 'Fraxure',
    stats: {
      atk: 212,
      def: 123,
      sta: 165,
    },
    types: ['dragon'],
    family: {
      id: 'axew',
      stage: 2,
    },
  },
  {
    id: 'haxorus',
    dexNumber: 612,
    name: 'Haxorus',
    stats: {
      atk: 284,
      def: 172,
      sta: 183,
    },
    types: ['dragon'],
    family: {
      id: 'axew',
      stage: 3,
    },
  },
  {
    id: 'cubchoo',
    dexNumber: 613,
    name: 'Cubchoo',
    stats: {
      atk: 128,
      def: 74,
      sta: 146,
    },
    types: ['ice'],
    family: {
      id: 'cubchoo',
      stage: 1,
    },
  },
  {
    id: 'beartic',
    dexNumber: 614,
    name: 'Beartic',
    stats: {
      atk: 233,
      def: 152,
      sta: 216,
    },
    types: ['ice'],
    family: {
      id: 'cubchoo',
      stage: 2,
    },
  },
  {
    id: 'cryogonal',
    dexNumber: 615,
    name: 'Cryogonal',
    stats: {
      atk: 190,
      def: 218,
      sta: 190,
    },
    types: ['ice'],
    family: {
      id: 'cryogonal',
      stage: 1,
    },
  },
  {
    id: 'shelmet',
    dexNumber: 616,
    name: 'Shelmet',
    stats: {
      atk: 72,
      def: 140,
      sta: 137,
    },
    types: ['bug'],
    family: {
      id: 'shelmet',
      stage: 1,
    },
  },
  {
    id: 'accelgor',
    dexNumber: 617,
    name: 'Accelgor',
    stats: {
      atk: 220,
      def: 120,
      sta: 190,
    },
    types: ['bug'],
    family: {
      id: 'shelmet',
      stage: 2,
    },
  },
  {
    id: 'stunfisk',
    dexNumber: 618,
    name: 'Stunfisk',
    stats: {
      atk: 144,
      def: 171,
      sta: 240,
    },
    types: ['ground', 'electric'],
    family: {
      id: 'stunfisk',
      stage: 1,
    },
  },
  {
    id: 'stunfisk_galarian',
    dexNumber: 618,
    name: 'Stunfisk (Galarian)',
    stats: {
      atk: 144,
      def: 171,
      sta: 240,
    },
    types: ['ground', 'steel'],
    family: {
      id: 'stunfisk_galarian',
      stage: 1,
    },
  },
  {
    id: 'mienfoo',
    dexNumber: 619,
    name: 'Mienfoo',
    stats: {
      atk: 160,
      def: 98,
      sta: 128,
    },
    types: ['fighting'],
    family: {
      id: 'mienfoo',
      stage: 1,
    },
  },
  {
    id: 'mienshao',
    dexNumber: 620,
    name: 'Mienshao',
    stats: {
      atk: 258,
      def: 127,
      sta: 163,
    },
    types: ['fighting'],
    family: {
      id: 'mienfoo',
      stage: 2,
    },
  },
  {
    id: 'druddigon',
    dexNumber: 621,
    name: 'Druddigon',
    stats: {
      atk: 213,
      def: 170,
      sta: 184,
    },
    types: ['dragon'],
    family: {
      id: 'druddigon',
      stage: 1,
    },
  },
  {
    id: 'golett',
    dexNumber: 622,
    name: 'Golett',
    stats: {
      atk: 127,
      def: 92,
      sta: 153,
    },
    types: ['ground', 'ghost'],
    family: {
      id: 'golett',
      stage: 1,
    },
  },
  {
    id: 'golurk',
    dexNumber: 623,
    name: 'Golurk',
    stats: {
      atk: 222,
      def: 154,
      sta: 205,
    },
    types: ['ground', 'ghost'],
    family: {
      id: 'golett',
      stage: 2,
    },
  },
  {
    id: 'pawniard',
    dexNumber: 624,
    name: 'Pawniard',
    stats: {
      atk: 154,
      def: 114,
      sta: 128,
    },
    types: ['dark', 'steel'],
    family: {
      id: 'pawniard',
      stage: 1,
    },
  },
  {
    id: 'bisharp',
    dexNumber: 625,
    name: 'Bisharp',
    stats: {
      atk: 232,
      def: 176,
      sta: 163,
    },
    types: ['dark', 'steel'],
    family: {
      id: 'pawniard',
      stage: 2,
    },
  },
  {
    id: 'bouffalant',
    dexNumber: 626,
    name: 'Bouffalant',
    stats: {
      atk: 195,
      def: 182,
      sta: 216,
    },
    types: ['normal'],
    family: {
      id: 'bouffalant',
      stage: 1,
    },
  },
  {
    id: 'rufflet',
    dexNumber: 627,
    name: 'Rufflet',
    stats: {
      atk: 150,
      def: 97,
      sta: 172,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'rufflet',
      stage: 1,
    },
  },
  {
    id: 'braviary',
    dexNumber: 628,
    name: 'Braviary',
    stats: {
      atk: 232,
      def: 152,
      sta: 225,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'rufflet',
      stage: 2,
    },
  },
  {
    id: 'vullaby',
    dexNumber: 629,
    name: 'Vullaby',
    stats: {
      atk: 105,
      def: 139,
      sta: 172,
    },
    types: ['dark', 'flying'],
    family: {
      id: 'vullaby',
      stage: 1,
    },
  },
  {
    id: 'mandibuzz',
    dexNumber: 630,
    name: 'Mandibuzz',
    stats: {
      atk: 129,
      def: 205,
      sta: 242,
    },
    types: ['dark', 'flying'],
    family: {
      id: 'vullaby',
      stage: 2,
    },
  },
  {
    id: 'heatmor',
    dexNumber: 631,
    name: 'Heatmor',
    stats: {
      atk: 204,
      def: 129,
      sta: 198,
    },
    types: ['fire'],
    family: {
      id: 'heatmor',
      stage: 1,
    },
  },
  {
    id: 'durant',
    dexNumber: 632,
    name: 'Durant',
    stats: {
      atk: 217,
      def: 188,
      sta: 151,
    },
    types: ['bug', 'steel'],
    family: {
      id: 'durant',
      stage: 1,
    },
  },
  {
    id: 'deino',
    dexNumber: 633,
    name: 'Deino',
    stats: {
      atk: 116,
      def: 93,
      sta: 141,
    },
    types: ['dark', 'dragon'],
    family: {
      id: 'deino',
      stage: 1,
    },
  },
  {
    id: 'zweilous',
    dexNumber: 634,
    name: 'Zweilous',
    stats: {
      atk: 159,
      def: 135,
      sta: 176,
    },
    types: ['dark', 'dragon'],
    family: {
      id: 'deino',
      stage: 2,
    },
  },
  {
    id: 'hydreigon',
    dexNumber: 635,
    name: 'Hydreigon',
    stats: {
      atk: 256,
      def: 188,
      sta: 211,
    },
    types: ['dark', 'dragon'],
    family: {
      id: 'deino',
      stage: 3,
    },
  },
  {
    id: 'larvesta',
    dexNumber: 636,
    name: 'Larvesta',
    stats: {
      atk: 156,
      def: 107,
      sta: 146,
    },
    types: ['bug', 'fire'],
    family: {
      id: 'larvesta',
      stage: 1,
    },
  },
  {
    id: 'volcarona',
    dexNumber: 637,
    name: 'Volcarona',
    stats: {
      atk: 264,
      def: 189,
      sta: 198,
    },
    types: ['bug', 'fire'],
    family: {
      id: 'larvesta',
      stage: 2,
    },
  },
  {
    id: 'cobalion',
    dexNumber: 638,
    name: 'Cobalion',
    stats: {
      atk: 192,
      def: 229,
      sta: 209,
    },
    types: ['steel', 'fighting'],
    floor: 1,
    family: {
      id: 'cobalion',
      stage: 1,
    },
  },
  {
    id: 'terrakion',
    dexNumber: 639,
    name: 'Terrakion',
    stats: {
      atk: 260,
      def: 192,
      sta: 209,
    },
    types: ['rock', 'fighting'],
    floor: 1,
    family: {
      id: 'terrakion',
      stage: 1,
    },
  },
  {
    id: 'virizion',
    dexNumber: 640,
    name: 'Virizion',
    stats: {
      atk: 192,
      def: 229,
      sta: 209,
    },
    types: ['grass', 'fighting'],
    floor: 1,
    family: {
      id: 'virizion',
      stage: 1,
    },
  },
  {
    id: 'tornadus_incarnate',
    dexNumber: 641,
    name: 'Tornadus (Incarnate)',
    stats: {
      atk: 266,
      def: 164,
      sta: 188,
    },
    types: ['flying'],
    floor: 1,
    family: {
      id: 'tornadus_incarnate',
      stage: 1,
    },
  },
  {
    id: 'tornadus_therian',
    dexNumber: 641,
    name: 'Tornadus (Therian)',
    stats: {
      atk: 238,
      def: 189,
      sta: 188,
    },
    types: ['flying'],
    floor: 1,
    family: {
      id: 'tornadus_therian',
      stage: 1,
    },
  },
  {
    id: 'thundurus_incarnate',
    dexNumber: 642,
    name: 'Thundurus (Incarnate)',
    stats: {
      atk: 266,
      def: 164,
      sta: 188,
    },
    types: ['electric', 'flying'],
    floor: 1,
    family: {
      id: 'thundurus_incarnate',
      stage: 1,
    },
  },
  {
    id: 'thundurus_therian',
    dexNumber: 642,
    name: 'Thundurus (Therian)',
    stats: {
      atk: 295,
      def: 161,
      sta: 188,
    },
    types: ['electric', 'flying'],
    floor: 1,
    family: {
      id: 'thundurus_therian',
      stage: 1,
    },
  },
  {
    id: 'reshiram',
    dexNumber: 643,
    name: 'Reshiram',
    stats: {
      atk: 275,
      def: 211,
      sta: 205,
    },
    types: ['dragon', 'fire'],
    floor: 1,
    family: {
      id: 'reshiram',
      stage: 1,
    },
  },
  {
    id: 'zekrom',
    dexNumber: 644,
    name: 'Zekrom',
    stats: {
      atk: 275,
      def: 211,
      sta: 205,
    },
    types: ['dragon', 'electric'],
    floor: 1,
    family: {
      id: 'zekrom',
      stage: 1,
    },
  },
  {
    id: 'landorus_incarnate',
    dexNumber: 645,
    name: 'Landorus (Incarnate)',
    stats: {
      atk: 261,
      def: 182,
      sta: 205,
    },
    types: ['ground', 'flying'],
    floor: 1,
    family: {
      id: 'landorus_incarnate',
      stage: 1,
    },
  },
  {
    id: 'landorus_therian',
    dexNumber: 645,
    name: 'Landorus (Therian)',
    stats: {
      atk: 289,
      def: 179,
      sta: 205,
    },
    types: ['ground', 'flying'],
    floor: 1,
    family: {
      id: 'landorus_therian',
      stage: 1,
    },
  },
  {
    id: 'kyurem',
    dexNumber: 646,
    name: 'Kyurem',
    stats: {
      atk: 246,
      def: 170,
      sta: 245,
    },
    types: ['dragon', 'ice'],
    floor: 1,
    family: {
      id: 'kyurem',
      stage: 1,
    },
  },
  {
    id: 'kyurem_black',
    dexNumber: 646,
    name: 'Kyurem (Black)',
    stats: {
      atk: 310,
      def: 183,
      sta: 245,
    },
    types: ['dragon', 'ice'],
    floor: 1,
    family: {
      id: 'kyurem_black',
      stage: 1,
    },
  },
  {
    id: 'kyurem_white',
    dexNumber: 646,
    name: 'Kyurem (White)',
    stats: {
      atk: 310,
      def: 183,
      sta: 245,
    },
    types: ['dragon', 'ice'],
    floor: 1,
    family: {
      id: 'kyurem_white',
      stage: 1,
    },
  },
  {
    id: 'keldeo_ordinary',
    dexNumber: 647,
    name: 'Keldeo (Ordinary)',
    stats: {
      atk: 260,
      def: 192,
      sta: 209,
    },
    types: ['water', 'fighting'],
    family: {
      id: 'keldeo_ordinary',
      stage: 1,
    },
  },
  {
    id: 'keldeo_resolute',
    dexNumber: 647,
    name: 'Keldeo (Resolute)',
    stats: {
      atk: 260,
      def: 192,
      sta: 209,
    },
    types: ['water', 'fighting'],
    family: {
      id: 'keldeo_resolute',
      stage: 1,
    },
  },
  {
    id: 'meloetta_aria',
    dexNumber: 648,
    name: 'Meloetta (Aria)',
    stats: {
      atk: 250,
      def: 225,
      sta: 225,
    },
    types: ['normal', 'psychic'],
    family: {
      id: 'meloetta_aria',
      stage: 1,
    },
  },
  {
    id: 'meloetta_pirouette',
    dexNumber: 648,
    name: 'Meloetta (Pirouette)',
    stats: {
      atk: 269,
      def: 188,
      sta: 225,
    },
    types: ['normal', 'fighting'],
    family: {
      id: 'meloetta_pirouette',
      stage: 1,
    },
  },
  {
    id: 'genesect',
    dexNumber: 649,
    name: 'Genesect',
    stats: {
      atk: 252,
      def: 199,
      sta: 174,
    },
    types: ['bug', 'steel'],
    floor: 10,
    family: {
      id: 'genesect',
      stage: 1,
    },
  },
  {
    id: 'chespin',
    dexNumber: 650,
    name: 'Chespin',
    stats: {
      atk: 110,
      def: 106,
      sta: 148,
    },
    types: ['grass'],
    family: {
      id: 'chespin',
      stage: 1,
    },
  },
  {
    id: 'quilladin',
    dexNumber: 651,
    name: 'Quilladin',
    stats: {
      atk: 146,
      def: 156,
      sta: 156,
    },
    types: ['grass'],
    family: {
      id: 'chespin',
      stage: 2,
    },
  },
  {
    id: 'chesnaught',
    dexNumber: 652,
    name: 'Chesnaught',
    stats: {
      atk: 201,
      def: 204,
      sta: 204,
    },
    types: ['grass', 'fighting'],
    family: {
      id: 'chespin',
      stage: 3,
    },
  },
  {
    id: 'fennekin',
    dexNumber: 653,
    name: 'Fennekin',
    stats: {
      atk: 116,
      def: 102,
      sta: 120,
    },
    types: ['fire'],
    family: {
      id: 'fennekin',
      stage: 1,
    },
  },
  {
    id: 'braixen',
    dexNumber: 654,
    name: 'Braixen',
    stats: {
      atk: 171,
      def: 130,
      sta: 153,
    },
    types: ['fire'],
    family: {
      id: 'fennekin',
      stage: 2,
    },
  },
  {
    id: 'delphox',
    dexNumber: 655,
    name: 'Delphox',
    stats: {
      atk: 230,
      def: 189,
      sta: 181,
    },
    types: ['fire', 'psychic'],
    family: {
      id: 'fennekin',
      stage: 3,
    },
  },
  {
    id: 'froakie',
    dexNumber: 656,
    name: 'Froakie',
    stats: {
      atk: 122,
      def: 84,
      sta: 121,
    },
    types: ['water'],
    family: {
      id: 'froakie',
      stage: 1,
    },
  },
  {
    id: 'frogadier',
    dexNumber: 657,
    name: 'Frogadier',
    stats: {
      atk: 168,
      def: 114,
      sta: 144,
    },
    types: ['water'],
    family: {
      id: 'froakie',
      stage: 2,
    },
  },
  {
    id: 'greninja',
    dexNumber: 658,
    name: 'Greninja',
    stats: {
      atk: 223,
      def: 152,
      sta: 176,
    },
    types: ['water', 'dark'],
    family: {
      id: 'froakie',
      stage: 3,
    },
  },
  {
    id: 'greninja_ash',
    dexNumber: 658,
    name: 'Greninja (Ash)',
    stats: {
      atk: 339,
      def: 155,
      sta: 176,
    },
    types: ['water', 'dark'],
    family: {
      id: 'froakie',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'bunnelby',
    dexNumber: 659,
    name: 'Bunnelby',
    stats: {
      atk: 68,
      def: 72,
      sta: 116,
    },
    types: ['normal'],
    family: {
      id: 'bunnelby',
      stage: 1,
    },
  },
  {
    id: 'diggersby',
    dexNumber: 660,
    name: 'Diggersby',
    stats: {
      atk: 112,
      def: 155,
      sta: 198,
    },
    types: ['normal', 'ground'],
    family: {
      id: 'bunnelby',
      stage: 2,
    },
  },
  {
    id: 'fletchling',
    dexNumber: 661,
    name: 'Fletchling',
    stats: {
      atk: 95,
      def: 80,
      sta: 128,
    },
    types: ['normal', 'flying'],
    family: {
      id: 'fletchling',
      stage: 1,
    },
  },
  {
    id: 'fletchinder',
    dexNumber: 662,
    name: 'Fletchinder',
    stats: {
      atk: 145,
      def: 110,
      sta: 158,
    },
    types: ['fire', 'flying'],
    family: {
      id: 'fletchling',
      stage: 2,
    },
  },
  {
    id: 'talonflame',
    dexNumber: 663,
    name: 'Talonflame',
    stats: {
      atk: 176,
      def: 155,
      sta: 186,
    },
    types: ['fire', 'flying'],
    family: {
      id: 'fletchling',
      stage: 3,
    },
  },
  {
    id: 'scatterbug',
    dexNumber: 664,
    name: 'Scatterbug',
    stats: {
      atk: 63,
      def: 63,
      sta: 116,
    },
    types: ['bug'],
    family: {
      id: 'scatterbug',
      stage: 1,
    },
  },
  {
    id: 'spewpa',
    dexNumber: 665,
    name: 'Spewpa',
    stats: {
      atk: 48,
      def: 89,
      sta: 128,
    },
    types: ['bug'],
    family: {
      id: 'scatterbug',
      stage: 2,
    },
  },
  {
    id: 'vivillon',
    dexNumber: 666,
    name: 'Vivillon',
    stats: {
      atk: 176,
      def: 103,
      sta: 190,
    },
    types: ['bug', 'flying'],
    family: {
      id: 'scatterbug',
      stage: 3,
    },
  },
  {
    id: 'litleo',
    dexNumber: 667,
    name: 'Litleo',
    stats: {
      atk: 139,
      def: 112,
      sta: 158,
    },
    types: ['fire', 'normal'],
    family: {
      id: 'litleo',
      stage: 1,
    },
  },
  {
    id: 'pyroar',
    dexNumber: 668,
    name: 'Pyroar',
    stats: {
      atk: 221,
      def: 149,
      sta: 200,
    },
    types: ['fire', 'normal'],
    family: {
      id: 'litleo',
      stage: 2,
    },
  },
  {
    id: 'flabebe',
    dexNumber: 669,
    name: 'Flabebe',
    stats: {
      atk: 108,
      def: 120,
      sta: 127,
    },
    types: ['fairy'],
    family: {
      id: 'flabebe',
      stage: 1,
    },
  },
  {
    id: 'floette',
    dexNumber: 670,
    name: 'Floette',
    stats: {
      atk: 136,
      def: 151,
      sta: 144,
    },
    types: ['fairy'],
    family: {
      id: 'flabebe',
      stage: 2,
    },
  },
  {
    id: 'florges',
    dexNumber: 671,
    name: 'Florges',
    stats: {
      atk: 212,
      def: 244,
      sta: 186,
    },
    types: ['fairy'],
    family: {
      id: 'flabebe',
      stage: 3,
    },
  },
  {
    id: 'skiddo',
    dexNumber: 672,
    name: 'Skiddo',
    stats: {
      atk: 123,
      def: 102,
      sta: 165,
    },
    types: ['grass'],
    family: {
      id: 'skiddo',
      stage: 1,
    },
  },
  {
    id: 'gogoat',
    dexNumber: 673,
    name: 'Gogoat',
    stats: {
      atk: 196,
      def: 146,
      sta: 265,
    },
    types: ['grass'],
    family: {
      id: 'skiddo',
      stage: 2,
    },
  },
  {
    id: 'pancham',
    dexNumber: 674,
    name: 'Pancham',
    stats: {
      atk: 145,
      def: 107,
      sta: 167,
    },
    types: ['fighting'],
    family: {
      id: 'pancham',
      stage: 1,
    },
  },
  {
    id: 'pangoro',
    dexNumber: 675,
    name: 'Pangoro',
    stats: {
      atk: 226,
      def: 146,
      sta: 216,
    },
    types: ['fighting', 'dark'],
    family: {
      id: 'pancham',
      stage: 2,
    },
  },
  {
    id: 'furfrou',
    dexNumber: 676,
    name: 'Furfrou',
    stats: {
      atk: 164,
      def: 167,
      sta: 181,
    },
    types: ['normal'],
    family: {
      id: 'furfrou',
      stage: 1,
    },
  },
  {
    id: 'espurr',
    dexNumber: 677,
    name: 'Espurr',
    stats: {
      atk: 120,
      def: 114,
      sta: 158,
    },
    types: ['psychic'],
    family: {
      id: 'espurr',
      stage: 1,
    },
  },
  {
    id: 'meowstic',
    dexNumber: 678,
    name: 'Meowstic',
    stats: {
      atk: 166,
      def: 167,
      sta: 179,
    },
    types: ['steel'],
    family: {
      id: 'espurr',
      stage: 1,
    },
  },
  {
    id: 'honedge',
    dexNumber: 679,
    name: 'Honedge',
    stats: {
      atk: 135,
      def: 139,
      sta: 128,
    },
    types: ['steel', 'ghost'],
    family: {
      id: 'honedge',
      stage: 1,
    },
  },
  {
    id: 'doublade',
    dexNumber: 680,
    name: 'Doublade',
    stats: {
      atk: 188,
      def: 206,
      sta: 153,
    },
    types: ['steel', 'ghost'],
    family: {
      id: 'honedge',
      stage: 2,
    },
  },
  {
    id: 'aegislash',
    dexNumber: 681,
    name: 'Aegislash',
    stats: {
      atk: 97,
      def: 291,
      sta: 155,
    },
    types: ['steel', 'ghost'],
    family: {
      id: 'honedge',
      stage: 3,
    },
  },
  {
    id: 'spritzee',
    dexNumber: 682,
    name: 'Spritzee',
    stats: {
      atk: 110,
      def: 113,
      sta: 186,
    },
    types: ['fairy'],
    family: {
      id: 'spritzee',
      stage: 1,
    },
  },
  {
    id: 'aromatisse',
    dexNumber: 683,
    name: 'Aromatisse',
    stats: {
      atk: 173,
      def: 150,
      sta: 226,
    },
    types: ['fairy'],
    family: {
      id: 'spritzee',
      stage: 2,
    },
  },
  {
    id: 'swirlix',
    dexNumber: 684,
    name: 'Swirlix',
    stats: {
      atk: 109,
      def: 119,
      sta: 158,
    },
    types: ['fairy'],
    family: {
      id: 'swirlix',
      stage: 1,
    },
  },
  {
    id: 'slurpuff',
    dexNumber: 685,
    name: 'Slurpuff',
    stats: {
      atk: 168,
      def: 163,
      sta: 193,
    },
    types: ['fairy'],
    family: {
      id: 'swirlix',
      stage: 2,
    },
  },
  {
    id: 'inkay',
    dexNumber: 686,
    name: 'Inkay',
    stats: {
      atk: 98,
      def: 95,
      sta: 142,
    },
    types: ['dark', 'psychic'],
    family: {
      id: 'inkay',
      stage: 1,
    },
  },
  {
    id: 'malamar',
    dexNumber: 687,
    name: 'Malamar',
    stats: {
      atk: 177,
      def: 165,
      sta: 200,
    },
    types: ['dark', 'psychic'],
    family: {
      id: 'inkay',
      stage: 2,
    },
  },
  {
    id: 'binacle',
    dexNumber: 688,
    name: 'Binacle',
    stats: {
      atk: 96,
      def: 120,
      sta: 123,
    },
    types: ['rock', 'water'],
    family: {
      id: 'binacle',
      stage: 1,
    },
  },
  {
    id: 'barbaracle',
    dexNumber: 689,
    name: 'Barbaracle',
    stats: {
      atk: 194,
      def: 205,
      sta: 176,
    },
    types: ['rock', 'water'],
    family: {
      id: 'binacle',
      stage: 2,
    },
  },
  {
    id: 'skrelp',
    dexNumber: 690,
    name: 'Skrelp',
    stats: {
      atk: 109,
      def: 109,
      sta: 137,
    },
    types: ['poison', 'water'],
    family: {
      id: 'skrelp',
      stage: 1,
    },
  },
  {
    id: 'dragalge',
    dexNumber: 691,
    name: 'Dragalge',
    stats: {
      atk: 177,
      def: 207,
      sta: 163,
    },
    types: ['poison', 'dragon'],
    family: {
      id: 'skrelp',
      stage: 2,
    },
  },
  {
    id: 'clauncher',
    dexNumber: 692,
    name: 'Clauncher',
    stats: {
      atk: 108,
      def: 117,
      sta: 137,
    },
    types: ['water'],
    family: {
      id: 'clauncher',
      stage: 1,
    },
  },
  {
    id: 'clawitzer',
    dexNumber: 693,
    name: 'Clawitzer',
    stats: {
      atk: 221,
      def: 171,
      sta: 174,
    },
    types: ['water'],
    family: {
      id: 'clauncher',
      stage: 2,
    },
  },
  {
    id: 'helioptile',
    dexNumber: 694,
    name: 'Helioptile',
    stats: {
      atk: 115,
      def: 78,
      sta: 127,
    },
    types: ['electric', 'normal'],
    family: {
      id: 'helioptile',
      stage: 1,
    },
  },
  {
    id: 'heliolisk',
    dexNumber: 695,
    name: 'Heliolisk',
    stats: {
      atk: 219,
      def: 168,
      sta: 158,
    },
    types: ['electric', 'normal'],
    family: {
      id: 'helioptile',
      stage: 2,
    },
  },
  {
    id: 'tyrunt',
    dexNumber: 696,
    name: 'Tyrunt',
    stats: {
      atk: 158,
      def: 123,
      sta: 151,
    },
    types: ['rock', 'dragon'],
    family: {
      id: 'tyrunt',
      stage: 1,
    },
  },
  {
    id: 'tyrantrum',
    dexNumber: 697,
    name: 'Tyrantrum',
    stats: {
      atk: 227,
      def: 191,
      sta: 193,
    },
    types: ['rock', 'dragon'],
    family: {
      id: 'tyrunt',
      stage: 2,
    },
  },
  {
    id: 'amaura',
    dexNumber: 698,
    name: 'Amaura',
    stats: {
      atk: 124,
      def: 109,
      sta: 184,
    },
    types: ['rock', 'ice'],
    family: {
      id: 'amaura',
      stage: 1,
    },
  },
  {
    id: 'aurorus',
    dexNumber: 699,
    name: 'Aurorus',
    stats: {
      atk: 186,
      def: 163,
      sta: 265,
    },
    types: ['rock', 'ice'],
    family: {
      id: 'amaura',
      stage: 2,
    },
  },
  {
    id: 'sylveon',
    dexNumber: 700,
    name: 'Sylveon',
    stats: {
      atk: 203,
      def: 205,
      sta: 216,
    },
    types: ['fairy'],
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'hawlucha',
    dexNumber: 701,
    name: 'Hawlucha',
    stats: {
      atk: 195,
      def: 153,
      sta: 186,
    },
    types: ['fighting', 'flying'],
    family: {
      id: 'hawlucha',
      stage: 1,
    },
  },
  {
    id: 'dedenne',
    dexNumber: 702,
    name: 'Dedenne',
    stats: {
      atk: 164,
      def: 134,
      sta: 167,
    },
    types: ['electric', 'fairy'],
    family: {
      id: 'dedenne',
      stage: 1,
    },
  },
  {
    id: 'carbink',
    dexNumber: 703,
    name: 'Carbink',
    stats: {
      atk: 95,
      def: 285,
      sta: 137,
    },
    types: ['rock', 'fairy'],
    family: {
      id: 'carbink',
      stage: 1,
    },
  },
  {
    id: 'goomy',
    dexNumber: 704,
    name: 'Goomy',
    stats: {
      atk: 101,
      def: 112,
      sta: 128,
    },
    types: ['dragon'],
    family: {
      id: 'goomy',
      stage: 1,
    },
  },
  {
    id: 'sliggoo',
    dexNumber: 705,
    name: 'Sliggoo',
    stats: {
      atk: 159,
      def: 176,
      sta: 169,
    },
    types: ['dragon'],
    family: {
      id: 'goomy',
      stage: 2,
    },
  },
  {
    id: 'goodra',
    dexNumber: 706,
    name: 'Goodra',
    stats: {
      atk: 220,
      def: 242,
      sta: 207,
    },
    types: ['dragon'],
    family: {
      id: 'goomy',
      stage: 3,
    },
  },
  {
    id: 'klefki',
    dexNumber: 707,
    name: 'Klefki',
    stats: {
      atk: 160,
      def: 179,
      sta: 149,
    },
    types: ['steel', 'fairy'],
    family: {
      id: 'klefki',
      stage: 1,
    },
  },
  {
    id: 'phantump',
    dexNumber: 708,
    name: 'Phantump',
    stats: {
      atk: 125,
      def: 103,
      sta: 125,
    },
    types: ['ghost', 'grass'],
    family: {
      id: 'phantump',
      stage: 1,
    },
  },
  {
    id: 'trevenant',
    dexNumber: 709,
    name: 'Trevenant',
    stats: {
      atk: 201,
      def: 154,
      sta: 198,
    },
    types: ['ghost', 'grass'],
    family: {
      id: 'phantump',
      stage: 2,
    },
  },
  {
    id: 'pumpkaboo_small',
    dexNumber: 708,
    name: 'Pumpkaboo (Small)',
    stats: {
      atk: 122,
      def: 124,
      sta: 127,
    },
    types: ['ghost', 'grass'],
    family: {
      id: 'pumpkaboo_small',
      stage: 1,
    },
  },
  {
    id: 'pumpkaboo_average',
    dexNumber: 708,
    name: 'Pumpkaboo (Average)',
    stats: {
      atk: 121,
      def: 123,
      sta: 135,
    },
    types: ['ghost', 'grass'],
    family: {
      id: 'pumpkaboo_average',
      stage: 1,
    },
  },
  {
    id: 'pumpkaboo_large',
    dexNumber: 708,
    name: 'Pumpkaboo (Large)',
    stats: {
      atk: 120,
      def: 122,
      sta: 144,
    },
    types: ['ghost', 'grass'],
    family: {
      id: 'pumpkaboo_large',
      stage: 1,
    },
  },
  {
    id: 'pumpkaboo_super',
    dexNumber: 708,
    name: 'Pumpkaboo (Super)',
    stats: {
      atk: 118,
      def: 120,
      sta: 153,
    },
    types: ['ghost', 'grass'],
    family: {
      id: 'pumpkaboo_super',
      stage: 1,
    },
  },
  {
    id: 'gourgeist_small',
    dexNumber: 708,
    name: 'Gourgeist (Small)',
    stats: {
      atk: 171,
      def: 219,
      sta: 146,
    },
    types: ['ghost', 'grass'],
    family: {
      id: 'pumpkaboo_small',
      stage: 2,
    },
  },
  {
    id: 'gourgeist_average',
    dexNumber: 708,
    name: 'Gourgeist (Average)',
    stats: {
      atk: 175,
      def: 213,
      sta: 163,
    },
    types: ['ghost', 'grass'],
    family: {
      id: 'pumpkaboo_average',
      stage: 2,
    },
  },
  {
    id: 'gourgeist_large',
    dexNumber: 708,
    name: 'Gourgeist (Large)',
    stats: {
      atk: 179,
      def: 206,
      sta: 181,
    },
    types: ['ghost', 'grass'],
    family: {
      id: 'pumpkaboo_large',
      stage: 2,
    },
  },
  {
    id: 'gourgeist_super',
    dexNumber: 708,
    name: 'Gourgeist (Super)',
    stats: {
      atk: 182,
      def: 200,
      sta: 198,
    },
    types: ['ghost', 'grass'],
    family: {
      id: 'pumpkaboo_super',
      stage: 2,
    },
  },
  {
    id: 'bergmite',
    dexNumber: 712,
    name: 'Bergmite',
    stats: {
      atk: 117,
      def: 120,
      sta: 146,
    },
    types: ['ice'],
    family: {
      id: 'bergmite',
      stage: 1,
    },
  },
  {
    id: 'avalugg',
    dexNumber: 713,
    name: 'Avalugg',
    stats: {
      atk: 196,
      def: 240,
      sta: 216,
    },
    types: ['ice'],
    family: {
      id: 'bergmite',
      stage: 2,
    },
  },
  {
    id: 'noibat',
    dexNumber: 714,
    name: 'Noibat',
    stats: {
      atk: 83,
      def: 73,
      sta: 120,
    },
    types: ['flying', 'dragon'],
    family: {
      id: 'noibat',
      stage: 1,
    },
  },
  {
    id: 'noivern',
    dexNumber: 715,
    name: 'Noivern',
    stats: {
      atk: 205,
      def: 175,
      sta: 198,
    },
    types: ['flying', 'dragon'],
    family: {
      id: 'noibat',
      stage: 2,
    },
  },
  {
    id: 'xerneas',
    dexNumber: 716,
    name: 'Xerneas',
    stats: {
      atk: 250,
      def: 185,
      sta: 246,
    },
    types: ['fairy'],
    floor: 1,
    family: {
      id: 'xerneas',
      stage: 1,
    },
  },
  {
    id: 'yveltal',
    dexNumber: 717,
    name: 'Yveltal',
    stats: {
      atk: 250,
      def: 185,
      sta: 246,
    },
    types: ['dark', 'flying'],
    floor: 1,
    family: {
      id: 'yveltal',
      stage: 1,
    },
  },
  {
    id: 'zygarde',
    dexNumber: 718,
    name: 'Zygarde',
    stats: {
      atk: 203,
      def: 232,
      sta: 239,
    },
    types: ['dragon', 'ground'],
    family: {
      id: 'zygarde',
      stage: 1,
    },
  },
  {
    id: 'diancie',
    dexNumber: 719,
    name: 'Diancie',
    stats: {
      atk: 190,
      def: 285,
      sta: 137,
    },
    types: ['rock', 'fairy'],
    family: {
      id: 'diancie',
      stage: 1,
    },
  },
  {
    id: 'hoopa_confined',
    dexNumber: 720,
    name: 'Hoopa (Confined)',
    stats: {
      atk: 261,
      def: 187,
      sta: 173,
    },
    types: ['psychic', 'ghost'],
    family: {
      id: 'hoopa',
      stage: 1,
    },
  },
  {
    id: 'hoopa_unbound',
    dexNumber: 720,
    name: 'Hoopa (Unbound)',
    stats: {
      atk: 311,
      def: 191,
      sta: 239,
    },
    types: ['psychic', 'dark'],
    family: {
      id: 'hoopa',
      stage: 2,
    },
  },
  {
    id: 'meltan',
    dexNumber: 808,
    name: 'Meltan',
    stats: {
      atk: 118,
      def: 99,
      sta: 130,
    },
    types: ['steel'],
    family: {
      id: 'meltan',
      stage: 1,
    },
  },
  {
    id: 'melmetal',
    dexNumber: 809,
    name: 'Melmetal',
    stats: {
      atk: 226,
      def: 190,
      sta: 264,
    },
    types: ['steel'],
    family: {
      id: 'meltan',
      stage: 2,
    },
  },
  {
    id: 'grookey',
    dexNumber: 810,
    name: 'Grookey',
    stats: {
      atk: 122,
      def: 91,
      sta: 137,
    },
    types: ['grass'],
    family: {
      id: 'grookey',
      stage: 1,
    },
  },
  {
    id: 'thwackey',
    dexNumber: 811,
    name: 'Thwackey',
    stats: {
      atk: 165,
      def: 134,
      sta: 172,
    },
    types: ['grass'],
    family: {
      id: 'grookey',
      stage: 2,
    },
  },
  {
    id: 'rillaboom',
    dexNumber: 812,
    name: 'Rillaboom',
    stats: {
      atk: 239,
      def: 168,
      sta: 225,
    },
    types: ['grass'],
    family: {
      id: 'grookey',
      stage: 3,
    },
  },
  {
    id: 'scorbunny',
    dexNumber: 813,
    name: 'Scorbunny',
    stats: {
      atk: 132,
      def: 79,
      sta: 137,
    },
    types: ['fire'],
    family: {
      id: 'scorbunny',
      stage: 1,
    },
  },
  {
    id: 'raboot',
    dexNumber: 814,
    name: 'Raboot',
    stats: {
      atk: 170,
      def: 125,
      sta: 163,
    },
    types: ['fire'],
    family: {
      id: 'scorbunny',
      stage: 2,
    },
  },
  {
    id: 'cinderace',
    dexNumber: 815,
    name: 'Cinderace',
    stats: {
      atk: 238,
      def: 163,
      sta: 190,
    },
    types: ['fire'],
    family: {
      id: 'scorbunny',
      stage: 3,
    },
  },
  {
    id: 'sobble',
    dexNumber: 816,
    name: 'Sobble',
    stats: {
      atk: 132,
      def: 79,
      sta: 137,
    },
    types: ['water'],
    family: {
      id: 'sobble',
      stage: 1,
    },
  },
  {
    id: 'drizzile',
    dexNumber: 817,
    name: 'Drizzile',
    stats: {
      atk: 186,
      def: 113,
      sta: 163,
    },
    types: ['water'],
    family: {
      id: 'sobble',
      stage: 2,
    },
  },
  {
    id: 'inteleon',
    dexNumber: 818,
    name: 'Inteleon',
    stats: {
      atk: 262,
      def: 142,
      sta: 172,
    },
    types: ['water'],
    family: {
      id: 'sobble',
      stage: 3,
    },
  },
  {
    id: 'skwovet',
    dexNumber: 819,
    name: 'Skwovet',
    stats: {
      atk: 95,
      def: 86,
      sta: 172,
    },
    types: ['normal'],
    family: {
      id: 'skwovet',
      stage: 1,
    },
  },
  {
    id: 'greedent',
    dexNumber: 820,
    name: 'Greedent',
    stats: {
      atk: 160,
      def: 156,
      sta: 260,
    },
    types: ['normal'],
    family: {
      id: 'skwovet',
      stage: 2,
    },
  },
  {
    id: 'rookidee',
    dexNumber: 821,
    name: 'Rookidee',
    stats: {
      atk: 88,
      def: 67,
      sta: 116,
    },
    types: ['flying'],
    family: {
      id: 'rookidee',
      stage: 1,
    },
  },
  {
    id: 'corvisquire',
    dexNumber: 822,
    name: 'Corvisquire',
    stats: {
      atk: 129,
      def: 110,
      sta: 169,
    },
    types: ['flying'],
    family: {
      id: 'rookidee',
      stage: 2,
    },
  },
  {
    id: 'corviknight',
    dexNumber: 823,
    name: 'Corviknight',
    stats: {
      atk: 163,
      def: 192,
      sta: 221,
    },
    types: ['flying', 'steel'],
    family: {
      id: 'rookidee',
      stage: 3,
    },
  },
  {
    id: 'blipbug',
    dexNumber: 824,
    name: 'Blipbug',
    stats: {
      atk: 46,
      def: 67,
      sta: 93,
    },
    types: ['bug'],
    family: {
      id: 'blipbug',
      stage: 1,
    },
  },
  {
    id: 'dottler',
    dexNumber: 825,
    name: 'Dottler',
    stats: {
      atk: 87,
      def: 157,
      sta: 137,
    },
    types: ['bug', 'psychic'],
    family: {
      id: 'blipbug',
      stage: 2,
    },
  },
  {
    id: 'orbeetle',
    dexNumber: 826,
    name: 'Orbeetle',
    stats: {
      atk: 156,
      def: 240,
      sta: 155,
    },
    types: ['bug', 'psychic'],
    family: {
      id: 'blipbug',
      stage: 3,
    },
  },
  {
    id: 'nickit',
    dexNumber: 827,
    name: 'Nickit',
    stats: {
      atk: 85,
      def: 82,
      sta: 120,
    },
    types: ['dark'],
    family: {
      id: 'nickit',
      stage: 1,
    },
  },
  {
    id: 'thievul',
    dexNumber: 828,
    name: 'Thievul',
    stats: {
      atk: 172,
      def: 164,
      sta: 172,
    },
    types: ['dark'],
    family: {
      id: 'nickit',
      stage: 2,
    },
  },
  {
    id: 'gossifleur',
    dexNumber: 829,
    name: 'Gossifleur',
    stats: {
      atk: 70,
      def: 104,
      sta: 120,
    },
    types: ['grass'],
    family: {
      id: 'gossifleur',
      stage: 1,
    },
  },
  {
    id: 'eldegoss',
    dexNumber: 830,
    name: 'Eldegoss',
    stats: {
      atk: 148,
      def: 211,
      sta: 155,
    },
    types: ['grass'],
    family: {
      id: 'gossifleur',
      stage: 2,
    },
  },
  {
    id: 'wooloo',
    dexNumber: 831,
    name: 'Wooloo',
    stats: {
      atk: 76,
      def: 97,
      sta: 123,
    },
    types: ['normal'],
    family: {
      id: 'wooloo',
      stage: 1,
    },
  },
  {
    id: 'dubwool',
    dexNumber: 832,
    name: 'Dubwool',
    stats: {
      atk: 159,
      def: 198,
      sta: 176,
    },
    types: ['normal'],
    family: {
      id: 'wooloo',
      stage: 2,
    },
  },
  {
    id: 'chewtle',
    dexNumber: 833,
    name: 'Chewtle',
    stats: {
      atk: 114,
      def: 85,
      sta: 137,
    },
    types: ['water'],
    family: {
      id: 'chewtle',
      stage: 1,
    },
  },
  {
    id: 'drednaw',
    dexNumber: 834,
    name: 'Drednaw',
    stats: {
      atk: 213,
      def: 164,
      sta: 207,
    },
    types: ['water', 'rock'],
    family: {
      id: 'chewtle',
      stage: 2,
    },
  },
  {
    id: 'yamper',
    dexNumber: 835,
    name: 'Yamper',
    stats: {
      atk: 80,
      def: 90,
      sta: 153,
    },
    types: ['electric'],
    family: {
      id: 'yamper',
      stage: 1,
    },
  },
  {
    id: 'boltund',
    dexNumber: 836,
    name: 'Boltund',
    stats: {
      atk: 197,
      def: 131,
      sta: 170,
    },
    types: ['electric'],
    family: {
      id: 'yamper',
      stage: 2,
    },
  },
  {
    id: 'rolycoly',
    dexNumber: 837,
    name: 'Rolycoly',
    stats: {
      atk: 73,
      def: 91,
      sta: 102,
    },
    types: ['rock'],
    family: {
      id: 'rolycoly',
      stage: 1,
    },
  },
  {
    id: 'carkol',
    dexNumber: 838,
    name: 'Carkol',
    stats: {
      atk: 114,
      def: 157,
      sta: 190,
    },
    types: ['rock', 'fire'],
    family: {
      id: 'rolycoly',
      stage: 2,
    },
  },
  {
    id: 'coalossal',
    dexNumber: 839,
    name: 'Coalossal',
    stats: {
      atk: 146,
      def: 198,
      sta: 242,
    },
    types: ['rock', 'fire'],
    family: {
      id: 'rolycoly',
      stage: 3,
    },
  },
  {
    id: 'applin',
    dexNumber: 840,
    name: 'Applin',
    stats: {
      atk: 71,
      def: 116,
      sta: 120,
    },
    types: ['grass', 'dragon'],
    family: {
      id: 'applin',
      stage: 1,
    },
  },
  {
    id: 'flapple',
    dexNumber: 841,
    name: 'Flapple',
    stats: {
      atk: 214,
      def: 144,
      sta: 172,
    },
    types: ['grass', 'dragon'],
    family: {
      id: 'applin',
      stage: 2,
    },
  },
  {
    id: 'appletun',
    dexNumber: 842,
    name: 'Appletun',
    stats: {
      atk: 178,
      def: 146,
      sta: 242,
    },
    types: ['grass', 'dragon'],
    family: {
      id: 'applin',
      stage: 2,
    },
  },
  {
    id: 'silicobra',
    dexNumber: 843,
    name: 'Silicobra',
    stats: {
      atk: 103,
      def: 123,
      sta: 141,
    },
    types: ['ground'],
    family: {
      id: 'silicobra',
      stage: 1,
    },
  },
  {
    id: 'sandaconda',
    dexNumber: 844,
    name: 'Sandaconda',
    stats: {
      atk: 202,
      def: 207,
      sta: 176,
    },
    types: ['ground'],
    family: {
      id: 'silicobra',
      stage: 2,
    },
  },
  {
    id: 'cramorant',
    dexNumber: 845,
    name: 'Cramorant',
    stats: {
      atk: 173,
      def: 163,
      sta: 172,
    },
    types: ['flying', 'water'],
    family: {
      id: 'cramorant',
      stage: 1,
    },
  },
  {
    id: 'arrokuda',
    dexNumber: 846,
    name: 'Arrokuda',
    stats: {
      atk: 118,
      def: 72,
      sta: 121,
    },
    types: ['water'],
    family: {
      id: 'arrokuda',
      stage: 1,
    },
  },
  {
    id: 'barraskewda',
    dexNumber: 847,
    name: 'Barraskewda',
    stats: {
      atk: 258,
      def: 127,
      sta: 156,
    },
    types: ['water'],
    family: {
      id: 'arrokuda',
      stage: 2,
    },
  },
  {
    id: 'toxel',
    dexNumber: 848,
    name: 'Toxel',
    stats: {
      atk: 97,
      def: 65,
      sta: 120,
    },
    types: ['electric', 'poison'],
    family: {
      id: 'toxel',
      stage: 1,
    },
  },
  {
    id: 'toxtricity',
    dexNumber: 849,
    name: 'Toxtricity',
    stats: {
      atk: 224,
      def: 140,
      sta: 181,
    },
    types: ['electric', 'poison'],
    family: {
      id: 'toxel',
      stage: 2,
    },
  },
  {
    id: 'sizzlipede',
    dexNumber: 850,
    name: 'Sizzlipede',
    stats: {
      atk: 118,
      def: 90,
      sta: 137,
    },
    types: ['fire', 'bug'],
    family: {
      id: 'sizzlipede',
      stage: 1,
    },
  },
  {
    id: 'centiskorch',
    dexNumber: 851,
    name: 'Centiskorch',
    stats: {
      atk: 220,
      def: 158,
      sta: 225,
    },
    types: ['fire', 'bug'],
    family: {
      id: 'sizzlipede',
      stage: 2,
    },
  },
  {
    id: 'clobbopus',
    dexNumber: 852,
    name: 'Clobbopus',
    stats: {
      atk: 121,
      def: 103,
      sta: 137,
    },
    types: ['fighting'],
    family: {
      id: 'clobbopus',
      stage: 1,
    },
  },
  {
    id: 'grapploct',
    dexNumber: 853,
    name: 'Grapploct',
    stats: {
      atk: 209,
      def: 162,
      sta: 190,
    },
    types: ['fighting'],
    family: {
      id: 'clobbopus',
      stage: 2,
    },
  },
  {
    id: 'sinistea',
    dexNumber: 854,
    name: 'Sinistea',
    stats: {
      atk: 134,
      def: 96,
      sta: 120,
    },
    types: ['ghost'],
    family: {
      id: 'sinistea',
      stage: 1,
    },
  },
  {
    id: 'polteageist',
    dexNumber: 855,
    name: 'Polteageist',
    stats: {
      atk: 248,
      def: 189,
      sta: 155,
    },
    types: ['ghost'],
    family: {
      id: 'sinistea',
      stage: 2,
    },
  },
  {
    id: 'hatenna',
    dexNumber: 856,
    name: 'Hatenna',
    stats: {
      atk: 98,
      def: 93,
      sta: 123,
    },
    types: ['psychic'],
    family: {
      id: 'hatenna',
      stage: 1,
    },
  },
  {
    id: 'hattrem',
    dexNumber: 857,
    name: 'Hattrem',
    stats: {
      atk: 153,
      def: 133,
      sta: 149,
    },
    types: ['psychic'],
    family: {
      id: 'hatenna',
      stage: 2,
    },
  },
  {
    id: 'hatterene',
    dexNumber: 858,
    name: 'Hatterene',
    stats: {
      atk: 237,
      def: 182,
      sta: 149,
    },
    types: ['psychic', 'fairy'],
    family: {
      id: 'hatenna',
      stage: 3,
    },
  },
  {
    id: 'impidimp',
    dexNumber: 859,
    name: 'Impidimp',
    stats: {
      atk: 103,
      def: 69,
      sta: 128,
    },
    types: ['dark', 'fairy'],
    family: {
      id: 'impidimp',
      stage: 1,
    },
  },
  {
    id: 'morgrem',
    dexNumber: 860,
    name: 'Morgrem',
    stats: {
      atk: 145,
      def: 102,
      sta: 163,
    },
    types: ['dark', 'fairy'],
    family: {
      id: 'impidimp',
      stage: 2,
    },
  },
  {
    id: 'grimmsnarl',
    dexNumber: 861,
    name: 'Grimmsnarl',
    stats: {
      atk: 227,
      def: 139,
      sta: 216,
    },
    types: ['dark', 'fairy'],
    family: {
      id: 'impidimp',
      stage: 3,
    },
  },
  {
    id: 'obstagoon',
    dexNumber: 862,
    name: 'Obstagoon',
    stats: {
      atk: 180,
      def: 194,
      sta: 212,
    },
    types: ['dark', 'normal'],
    family: {
      id: 'zigzagoon_galarian',
      stage: 3,
    },
  },
  {
    id: 'perrserker',
    dexNumber: 863,
    name: 'Perrserker',
    stats: {
      atk: 195,
      def: 162,
      sta: 172,
    },
    types: ['steel'],
    family: {
      id: 'meowth_galarian',
      stage: 2,
    },
  },
  {
    id: 'cursola',
    dexNumber: 864,
    name: 'Cursola',
    stats: {
      atk: 253,
      def: 182,
      sta: 155,
    },
    types: ['ghost'],
    family: {
      id: 'corsola_galarian',
      stage: 2,
    },
  },
  {
    id: 'sirfetchd',
    dexNumber: 865,
    name: "Sirfetch'd",
    stats: {
      atk: 248,
      def: 176,
      sta: 158,
    },
    types: ['fighting'],
    family: {
      id: 'farfetchd_galarian',
      stage: 2,
    },
  },
  {
    id: 'mr_rime',
    dexNumber: 866,
    name: 'Mr. Rime',
    stats: {
      atk: 212,
      def: 179,
      sta: 190,
    },
    types: ['ice', 'psychic'],
    family: {
      id: 'mr_mime_galarian',
      stage: 2,
    },
  },
  {
    id: 'runerigus',
    dexNumber: 867,
    name: 'Runerigus',
    stats: {
      atk: 163,
      def: 237,
      sta: 151,
    },
    types: ['ground', 'ghost'],
    family: {
      id: 'yamask_galarian',
      stage: 2,
    },
  },
  {
    id: 'milcery',
    dexNumber: 868,
    name: 'Milcery',
    stats: {
      atk: 90,
      def: 97,
      sta: 128,
    },
    types: ['fairy'],
    family: {
      id: 'milcery',
      stage: 1,
    },
  },
  {
    id: 'alcremie',
    dexNumber: 869,
    name: 'Alcremie',
    stats: {
      atk: 203,
      def: 203,
      sta: 163,
    },
    types: ['fairy'],
    family: {
      id: 'milcery',
      stage: 2,
    },
  },
  {
    id: 'falinks',
    dexNumber: 870,
    name: 'Falinks',
    stats: {
      atk: 193,
      def: 170,
      sta: 163,
    },
    types: ['fighting'],
    family: {
      id: 'falinks',
      stage: 1,
    },
  },
  {
    id: 'pincurchin',
    dexNumber: 871,
    name: 'Pincurchin',
    stats: {
      atk: 176,
      def: 161,
      sta: 134,
    },
    types: ['electric'],
    family: {
      id: 'pincurchin',
      stage: 1,
    },
  },
  {
    id: 'snom',
    dexNumber: 872,
    name: 'Snom',
    stats: {
      atk: 76,
      def: 59,
      sta: 102,
    },
    types: ['ice', 'bug'],
    family: {
      id: 'snom',
      stage: 1,
    },
  },
  {
    id: 'frosmoth',
    dexNumber: 873,
    name: 'Frosmoth',
    stats: {
      atk: 230,
      def: 155,
      sta: 172,
    },
    types: ['ice', 'bug'],
    family: {
      id: 'snom',
      stage: 2,
    },
  },
  {
    id: 'stonjourner',
    dexNumber: 874,
    name: 'Stonjourner',
    stats: {
      atk: 222,
      def: 182,
      sta: 225,
    },
    types: ['rock'],
    family: {
      id: 'stonjourner',
      stage: 1,
    },
  },
  {
    id: 'eiscue',
    dexNumber: 875,
    name: 'Eiscue',
    stats: {
      atk: 148,
      def: 195,
      sta: 181,
    },
    types: ['ice'],
    family: {
      id: 'eiscue',
      stage: 1,
    },
  },
  {
    id: 'eiscue_noice',
    dexNumber: 875,
    name: 'Eiscue (No Ice)',
    stats: {
      atk: 173,
      def: 139,
      sta: 181,
    },
    types: ['ice'],
    family: {
      id: 'eiscue',
      stage: 2,
    },
  },
  {
    id: 'indeedee_female',
    dexNumber: 876,
    name: 'Indeedee (Female)',
    stats: {
      atk: 184,
      def: 184,
      sta: 172,
    },
    types: ['psychic', 'normal'],
    family: {
      id: 'indeedee',
      stage: 1,
    },
  },
  {
    id: 'indeedee_male',
    dexNumber: 876,
    name: 'Indeedee (Male)',
    stats: {
      atk: 208,
      def: 166,
      sta: 155,
    },
    types: ['psychic', 'normal'],
    family: {
      id: 'indeedee',
      stage: 1,
    },
  },
  {
    id: 'morpeko',
    dexNumber: 877,
    name: 'Morpeko',
    stats: {
      atk: 192,
      def: 121,
      sta: 151,
    },
    types: ['electric', 'dark'],
    family: {
      id: 'morpeko',
      stage: 1,
    },
  },
  {
    id: 'cufant',
    dexNumber: 878,
    name: 'Cufant',
    stats: {
      atk: 140,
      def: 91,
      sta: 176,
    },
    types: ['steel'],
    family: {
      id: 'cufant',
      stage: 1,
    },
  },
  {
    id: 'copperajah',
    dexNumber: 879,
    name: 'Copperajah',
    stats: {
      atk: 226,
      def: 126,
      sta: 263,
    },
    types: ['steel'],
    family: {
      id: 'cufant',
      stage: 2,
    },
  },
  {
    id: 'dracozolt',
    dexNumber: 880,
    name: 'Dracozolt',
    stats: {
      atk: 195,
      def: 165,
      sta: 207,
    },
    types: ['electric', 'dragon'],
    family: {
      id: 'dracozolt',
      stage: 1,
    },
  },
  {
    id: 'arctozolt',
    dexNumber: 881,
    name: 'Arctozolt',
    stats: {
      atk: 190,
      def: 166,
      sta: 207,
    },
    types: ['electric', 'ice'],
    family: {
      id: 'arctozolt',
      stage: 1,
    },
  },
  {
    id: 'dracovish',
    dexNumber: 882,
    name: 'Dracovish',
    stats: {
      atk: 175,
      def: 185,
      sta: 207,
    },
    types: ['water', 'dragon'],
    family: {
      id: 'dracovish',
      stage: 1,
    },
  },
  {
    id: 'arctovish',
    dexNumber: 883,
    name: 'Arctovish',
    stats: {
      atk: 171,
      def: 185,
      sta: 207,
    },
    types: ['water', 'ice'],
    family: {
      id: 'arctovish',
      stage: 1,
    },
  },
  {
    id: 'duraludon',
    dexNumber: 884,
    name: 'Duraludon',
    stats: {
      atk: 239,
      def: 185,
      sta: 172,
    },
    types: ['steel', 'dragon'],
    family: {
      id: 'duraludon',
      stage: 1,
    },
  },
  {
    id: 'dreepy',
    dexNumber: 885,
    name: 'Dreepy',
    stats: {
      atk: 117,
      def: 61,
      sta: 99,
    },
    types: ['dragon', 'ghost'],
    family: {
      id: 'dreepy',
      stage: 1,
    },
  },
  {
    id: 'drakloak',
    dexNumber: 886,
    name: 'Drakloak',
    stats: {
      atk: 163,
      def: 105,
      sta: 169,
    },
    types: ['dragon', 'ghost'],
    family: {
      id: 'dreepy',
      stage: 2,
    },
  },
  {
    id: 'dragapult',
    dexNumber: 887,
    name: 'Dragapult',
    stats: {
      atk: 266,
      def: 170,
      sta: 204,
    },
    types: ['dragon', 'ghost'],
    family: {
      id: 'dreepy',
      stage: 3,
    },
  },
  {
    id: 'zacian_hero',
    dexNumber: 888,
    name: 'Zacian (Hero)',
    stats: {
      atk: 254,
      def: 236,
      sta: 192,
    },
    types: ['fairy'],
    family: {
      id: 'zacian',
      stage: 1,
    },
  },
  {
    id: 'zacian_crowned_sword',
    dexNumber: 888,
    name: 'Zacian (Crowned Sword)',
    stats: {
      atk: 332,
      def: 240,
      sta: 192,
    },
    types: ['fairy', 'steel'],
    family: {
      id: 'zacian',
      stage: 2,
    },
  },
  {
    id: 'zamazenta_hero',
    dexNumber: 889,
    name: 'Zamazenta (Hero)',
    stats: {
      atk: 254,
      def: 236,
      sta: 192,
    },
    types: ['fighting'],
    family: {
      id: 'zamazenta',
      stage: 1,
    },
  },
  {
    id: 'zamazenta_crowned_shield',
    dexNumber: 889,
    name: 'Zamazenta (Crowned Shield)',
    stats: {
      atk: 250,
      def: 292,
      sta: 192,
    },
    types: ['fighting', 'steel'],
    family: {
      id: 'zamazenta',
      stage: 2,
    },
  },
  {
    id: 'eternatus',
    dexNumber: 890,
    name: 'Eternatus',
    stats: {
      atk: 278,
      def: 192,
      sta: 268,
    },
    types: ['poison', 'dragon'],
    family: {
      id: 'eternatus',
      stage: 1,
    },
  },
  {
    id: 'eternatus_eternamax',
    dexNumber: 890,
    name: 'Eternatus (Eternamax)',
    stats: {
      atk: 251,
      def: 505,
      sta: 452,
    },
    types: ['poison', 'dragon'],
    family: {
      id: 'eternatus',
      stage: 2,
    },
  },
  {
    id: 'kubfu',
    dexNumber: 891,
    name: 'Kubfu',
    stats: {
      atk: 170,
      def: 112,
      sta: 155,
    },
    types: ['fighting'],
    family: {
      id: 'kubfu',
      stage: 1,
    },
  },
  {
    id: 'urshifu',
    dexNumber: 892,
    name: 'Urshifu',
    stats: {
      atk: 254,
      def: 177,
      sta: 225,
    },
    types: ['fighting'],
    family: {
      id: 'kubfu',
      stage: 2,
    },
  },
  {
    id: 'zarude',
    dexNumber: 893,
    name: 'Zarude',
    stats: {
      atk: 242,
      def: 215,
      sta: 233,
    },
    types: ['dark', 'grass'],
    family: {
      id: 'zarude',
      stage: 1,
    },
  },
  {
    id: 'regieleki',
    dexNumber: 894,
    name: 'Regieleki',
    stats: {
      atk: 250,
      def: 125,
      sta: 190,
    },
    types: ['electric'],
    family: {
      id: 'regieleki',
      stage: 1,
    },
  },
  {
    id: 'regidrago',
    dexNumber: 895,
    name: 'Regidrago',
    stats: {
      atk: 202,
      def: 101,
      sta: 400,
    },
    types: ['dragon'],
    family: {
      id: 'regidrago',
      stage: 1,
    },
  },
  {
    id: 'glastrier',
    dexNumber: 896,
    name: 'Glastrier',
    stats: {
      atk: 246,
      def: 223,
      sta: 225,
    },
    types: ['ice'],
    family: {
      id: 'glastrier',
      stage: 1,
    },
  },
  {
    id: 'spectrier',
    dexNumber: 897,
    name: 'Spectrier',
    stats: {
      atk: 273,
      def: 146,
      sta: 205,
    },
    types: ['ghost'],
    family: {
      id: 'spectrier',
      stage: 1,
    },
  },
  {
    id: 'calyrex',
    dexNumber: 898,
    name: 'Calyrex',
    stats: {
      atk: 162,
      def: 162,
      sta: 225,
    },
    types: ['psychic', 'grass'],
    family: {
      id: 'calyrex',
      stage: 1,
    },
  },
  {
    id: 'calyrex_ice_rider',
    dexNumber: 898,
    name: 'Calyrex (Ice Rider)',
    stats: {
      atk: 268,
      def: 246,
      sta: 205,
    },
    types: ['psychic', 'ice'],
    family: {
      id: 'calyrex',
      stage: 2,
    },
  },
  {
    id: 'calyrex_shadow_rider',
    dexNumber: 898,
    name: 'Calyrex (Shadow Rider)',
    stats: {
      atk: 324,
      def: 194,
      sta: 205,
    },
    types: ['psychic', 'ghost'],
    family: {
      id: 'calyrex',
      stage: 2,
    },
  },
];

export function getPokemonByName(name: PokemonName, list: Pokemon[] = POKEDEX) {
  if (!name) return null;

  return list.find((pokemon) => pokemon.name === name) ?? null;
}

export function getPokemonByID(id: PokemonID, list: Pokemon[] = POKEDEX) {
  if (!id) return null;

  return list.find((pokemon) => pokemon.id === id) ?? null;
}

export function getPokemonFamilyMembers(
  familyID: PokemonID,
  list: Pokemon[] = POKEDEX,
) {
  return list.filter((pokemon) => pokemon.family.id === familyID);
}
