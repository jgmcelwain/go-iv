import {
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { useState } from 'react';
import { LEAGUES, LeagueCPCap } from '../../data/league';
import { LEVEL_CAPS, LevelCapNumber } from '../../data/levelCap';
import { Pokemon } from '../../data/pokedex';
import { usePokedex } from '../../hooks/usePokedex';
import {
  RankedSpread,
  generateRankedSpreads,
} from '../../lib/generateRankedSpreads';
import { SpeciesDropdown } from './species-dropdown';
import { CheckIcon } from '@heroicons/react/solid';

const defaultPokemon = {
  name: 'Medicham',
  hp: 142,
  cp: 1500,
  leagueCp: 1500,
  levelCap: 51,
} as const;

export function IVGuess() {
  const { byName } = usePokedex();
  const [pokemon, setPokemon] = useState<Pokemon>(byName(defaultPokemon.name)!);
  const [league, setLeague] = useState<LeagueCPCap>(defaultPokemon.leagueCp);
  const [levelCap, setLevelCap] = useState<LevelCapNumber>(
    defaultPokemon.levelCap,
  );

  const [anyHp, setAnyHp] = useState<boolean>(false);
  const [hp, setHp] = useState<number>(defaultPokemon.hp);
  const [anyCp, setAnyCp] = useState<boolean>(false);
  const [cp, setCp] = useState<number>(defaultPokemon.cp);

  const matchingSpreads = generateRankedSpreads(
    pokemon,
    pokemon.floor ?? 0,
    league,
    levelCap,
    0,
    'product',
  ).filter(
    (spread) =>
      (spread.stats.sta.value === hp || anyHp) && (spread.cp === cp || anyCp),
  );

  const extremeStats = (() => {
    const atk = [...matchingSpreads].sort(
      (a, b) => b.stats.atk.value - a.stats.atk.value,
    );
    const def = [...matchingSpreads].sort(
      (a, b) => b.stats.def.value - a.stats.def.value,
    );

    return {
      atk: {
        max: atk.at(0),
        min: atk.at(-1),
      },
      def: {
        max: def.at(0),
        min: def.at(-1),
      },
    };
  })();

  return (
    <div className='w-full px-4 sm:px-0 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-6 items-start'>
      <SpeciesDropdown value={pokemon} onChange={setPokemon} label='Pokémon' />

      <div className='space-y-2'>
        <label className='block'>
          <span className='text-xs text-gray-500 dark:text-gray-400'>CP</span>

          <input
            onChange={(evt) => {
              const value = Number(evt.target.value);

              if (!Number.isNaN(value)) {
                setCp(value);
              }
            }}
            defaultValue={cp}
            max={league}
            className='block w-full mt-1 rounded form-input focus-ring ring-offset-gray-50 dark:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed'
            type='number'
            disabled={anyCp}
          />
        </label>

        <label className='flex justify-start items-center gap-x-2'>
          <span className='text-xs text-gray-500 dark:text-gray-400'>
            Any CP
          </span>

          <input
            onChange={(evt) => setAnyCp(evt.target.checked)}
            defaultChecked={anyCp}
            type='checkbox'
          />
        </label>
      </div>

      <div className='space-y-2'>
        <label className='block'>
          <span className='text-xs text-gray-500 dark:text-gray-400'>
            HP Stat
          </span>

          <input
            onChange={(evt) => {
              const value = Number(evt.target.value);

              if (!Number.isNaN(value)) {
                setHp(value);
              }
            }}
            defaultValue={hp}
            className='block w-full mt-1 rounded form-input focus-ring ring-offset-gray-50 dark:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed'
            type='number'
            disabled={anyHp}
          />
        </label>
        <label className='flex justify-start items-center gap-x-2'>
          <span className='text-xs text-gray-500 dark:text-gray-400'>
            Any HP
          </span>

          <input
            onChange={(evt) => setAnyHp(evt.target.checked)}
            defaultChecked={anyHp}
            type='checkbox'
          />
        </label>
      </div>

      <label className='block'>
        <span className='text-xs text-gray-500 dark:text-gray-400'>League</span>

        <select
          onChange={(evt) => setLeague(Number(evt.target.value) as LeagueCPCap)}
          defaultValue={league}
          className='block w-full mt-1 rounded form-select focus-ring ring-offset-gray-50 dark:ring-offset-gray-900'
        >
          {LEAGUES.map((league) => (
            <option key={league.key} value={league.cp}>
              {league.name}
            </option>
          ))}
        </select>
      </label>

      <label className='block'>
        <span className='text-xs text-gray-500 dark:text-gray-400'>
          Level Cap
        </span>

        <select
          onChange={(evt) =>
            setLevelCap(Number(evt.target.value) as LevelCapNumber)
          }
          defaultValue={levelCap}
          className='block w-full mt-1 rounded form-select focus-ring ring-offset-gray-50 dark:ring-offset-gray-900'
        >
          {LEVEL_CAPS.map((levelCap) => (
            <option key={levelCap.name} value={levelCap.level}>
              {levelCap.level} ({levelCap.description})
            </option>
          ))}
        </select>
      </label>

      <div className='col-span-1 md:col-span-3 2xl:col-span-2 w-full shadow-md shadow-gray-100 dark:shadow-xl bg-white dark:bg-gray-800 p-4 dark:shadow-gray-900 rounded-lg border-y border-gray-200 dark:border-transparent border'>
        <p className='font-title border-b border-gray-100 dark:border-gray-700 pb-2 mb-2'>
          Possible Spreads: {matchingSpreads.length}{' '}
          <span className='text-xs'>of 4096</span>
        </p>

        <table className='w-full table-fixed text-left tabular-nums text-sm'>
          <thead>
            <tr>
              <th className='w-16'>Rank</th>
              <th className='w-10'>BB?</th>
              <th>IVs</th>
              <th>Atk</th>
              <th>Def</th>
            </tr>
          </thead>

          <tbody>
            {matchingSpreads.map((spread) => (
              <tr key={`${spread.ivs.atk}-${spread.ivs.def}-${spread.ivs.sta}`}>
                <td>{spread.rank}</td>
                <td>
                  {spread.level >= 50.5 && (
                    <CheckIcon aria-label='Yes' className='h-4 w-4' />
                  )}
                </td>
                <td>
                  {spread.ivs.atk}-{spread.ivs.def}-{spread.ivs.sta}
                </td>
                <td>{spread.stats.atk.value.toFixed(2)}</td>
                <td>{spread.stats.def.value.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {matchingSpreads.length > 0 && (
        <>
          <div className='col-span-1 md:col-span-3 w-full overflow-hidden shadow-md shadow-gray-100 dark:shadow-xl bg-white dark:bg-gray-800 p-4 dark:shadow-gray-900 rounded-lg border-y border-gray-200 dark:border-transparent border'>
            <div className='pt-2 pb-6 text-center w-full flex justify-center items-start flex-wrap gap-x-4 gap-y-8'>
              {extremeStats.atk.max && extremeStats.atk.min && (
                <div className='px-12 flex justify-center gap-6 items-end'>
                  <div>
                    <p className='text-xs mb-0.5'>Max</p>

                    <p className='font-title text-2xl leading-none tabular-nums'>
                      {extremeStats.atk.max.stats.atk.value.toFixed(2)}
                    </p>
                  </div>

                  <p className='font-title leading-6'>Attack</p>

                  <div>
                    <p className='text-xs mb-0.5'>Min</p>

                    <p className='font-title text-2xl leading-none tabular-nums'>
                      {extremeStats.atk.min.stats.atk.value.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}

              {extremeStats.def.max && extremeStats.def.min && (
                <div className='px-12 flex justify-center gap-6 items-end'>
                  <div>
                    <p className='text-xs mb-0.5'>Max</p>

                    <p className='font-title text-2xl leading-none tabular-nums'>
                      {extremeStats.def.max.stats.def.value.toFixed(2)}
                    </p>
                  </div>

                  <p className='font-title leading-6'>Defense</p>

                  <div>
                    <p className='text-xs mb-0.5'>Min</p>

                    <p className='font-title text-2xl leading-none tabular-nums'>
                      {extremeStats.def.min.stats.def.value.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <ResponsiveContainer width='100%' height={300}>
              <ScatterChart margin={{ bottom: 20, left: 20 }}>
                <CartesianGrid
                  strokeDasharray='3 3'
                  stroke='currentColor'
                  className='text-gray-300 dark:text-gray-600'
                />

                <XAxis
                  type='number'
                  dataKey='def'
                  name='Defense'
                  tickCount={8}
                  interval='preserveStartEnd'
                  domain={[
                    (dataMin: number) => Math.floor(dataMin / 2) * 2,
                    (dataMax: number) => Math.ceil(dataMax / 2) * 2,
                  ]}
                  stroke='currentColor'
                  className='text-gray-500 dark:text-gray-400'
                >
                  <Label value='Defense Stat' offset={0} position='bottom' />
                </XAxis>

                <YAxis
                  type='number'
                  dataKey='atk'
                  name='Attack'
                  tickCount={5}
                  interval='preserveStartEnd'
                  domain={[
                    (dataMin: number) => Math.floor(dataMin / 2) * 2,
                    (dataMax: number) => Math.ceil(dataMax / 2) * 2,
                  ]}
                  stroke='currentColor'
                  className='text-gray-500 dark:text-gray-400'
                >
                  <Label
                    value='Attack Stat'
                    offset={0}
                    angle={270}
                    position='insideLeft'
                    style={{ textAnchor: 'middle' }}
                  />
                </YAxis>

                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  content={({ active, payload }) => {
                    if (
                      active === false ||
                      payload === undefined ||
                      payload.length === 0
                    ) {
                      return null;
                    }

                    const spread = payload[0].payload as RankedSpread;

                    return (
                      <div className='p-2 text-sm space-y-1 shadow-md shadow-gray-100 dark:shadow-xl bg-white dark:bg-gray-800 dark:shadow-gray-900 rounded-lg border-y border-gray-200 dark:border-transparent border'>
                        <p className='font-semibold'>
                          {spread.ivs.atk}-{spread.ivs.def}-{spread.ivs.sta}{' '}
                          (Rank {spread.rank})
                        </p>

                        <p>
                          {spread.cp} CP, Level {spread.level}
                        </p>
                        <p>Attack: {spread.stats.atk.value.toFixed(2)}</p>
                        <p>Defense: {spread.stats.def.value.toFixed(2)}</p>
                        <p>HP: {spread.stats.sta.value}</p>
                      </div>
                    );
                  }}
                />

                <Scatter
                  data={matchingSpreads.map((spread) => ({
                    ...spread,
                    atk: spread.stats.atk.value,
                    def: spread.stats.def.value,
                  }))}
                  fill='#8884d8'
                  animationDuration={100}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}
