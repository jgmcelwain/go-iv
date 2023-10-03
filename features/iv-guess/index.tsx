import { useEffect, useMemo, useState } from 'react';
import { SpeciesDropdown } from './species-dropdown';
import { Pokemon } from '../../data/pokedex';
import { usePokedex } from '../../hooks/usePokedex';
import { LEAGUES, LeagueCPCap } from '../../data/league';
import { LEVEL_CAPS, LevelCapNumber } from '../../data/levelCap';
import { generateRankedSpreads } from '../../lib/generateRankedSpreads';

export function IVGuess() {
  const { list, byName } = usePokedex();
  const [pokemon, setPokemon] = useState<Pokemon>(byName('Medicham')!);
  const [league, setLeague] = useState<LeagueCPCap>(1500);
  const [levelCap, setLevelCap] = useState<LevelCapNumber>(51);

  const [hp, setHp] = useState<number>(142);
  const [cp, setCp] = useState<number>(1500);

  const matchingSpreads = useMemo(
    () =>
      generateRankedSpreads(
        pokemon,
        pokemon.floor ?? 0,
        league,
        levelCap,
        0,
        'product',
      ).filter((spread) => spread.cp === cp && spread.stats.sta.value === hp),
    [cp, hp, league, levelCap, pokemon],
  );

  const extremeStats = useMemo(() => {
    const atk = matchingSpreads.map((spread) => spread.stats.atk.value);
    const def = matchingSpreads.map((spread) => spread.stats.def.value);

    return {
      atk: {
        max: Math.max(...atk),
        min: Math.min(...atk),
      },
      def: {
        max: Math.max(...def),
        min: Math.min(...def),
      },
    };
  }, [matchingSpreads]);

  return (
    <div className='w-full grid grid-cols-3 gap-6'>
      <SpeciesDropdown value={pokemon} onChange={setPokemon} label='Pokémon' />

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
          className='block w-full mt-1 rounded form-input focus-ring ring-offset-gray-50 dark:ring-offset-gray-900'
          type='number'
        />
      </label>

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
          className='block w-full mt-1 rounded form-input focus-ring ring-offset-gray-50 dark:ring-offset-gray-900'
          type='number'
        />
      </label>

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

      <div className='col-start-1'>
        <p>Possible Spreads: {matchingSpreads.length}</p>

        <ul className='list-disc list-outside'>
          {matchingSpreads.map((spread) => (
            <li key={`${spread.rank}-${spread.cp}`}>
              #{spread.rank} - {spread.ivs.atk} / {spread.ivs.def} /{' '}
              {spread.ivs.sta} - {spread.stats.atk.value.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      {matchingSpreads.length > 0 && (
        <>
          <div>
            <p>Max Atk - {extremeStats.atk.max.toFixed(2)}</p>

            <p>Min Atk - {extremeStats.atk.min.toFixed(2)}</p>
          </div>
          <div>
            <p>Max Def - {extremeStats.def.max.toFixed(2)}</p>

            <p>Min Def - {extremeStats.def.min.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}
