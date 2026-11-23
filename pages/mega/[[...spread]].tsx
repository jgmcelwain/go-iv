import React, {
  FC,
  ReactNode,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Head from 'next/head';
import { RadioGroup } from '@headlessui/react';
import { useRouter } from 'next/router';

import { IV, IV_RANGE, MAX_IV } from '../../data/iv';
import { LEVEL_CAPS, LevelCapNumber } from '../../data/levelCap';
import { Pokemon, PokemonID, PokemonIVs } from '../../data/pokedex';
import { Settings } from '../../hooks/useSettings';
import { RANKABLE_METRICS, RankableMetric, STATS } from '../../data/stat';
import { usePokedex } from '../../hooks/usePokedex';
import { useScrolledSideways } from '../../hooks/useScrolledSideways';
import { useSettings } from '../../hooks/useSettings';
import {
  MEGA_POKEMON,
  MegaLeagueSpread,
  getMegaLeagueSpreads,
  ivsKey,
} from '../../lib/megaLeagueSpreads';
import { getMetricPercent } from '../../lib/generateRankedSpreads';
import { formatValue } from '../../utils/formatValue';
import { isSubsequence } from '../../utils/isSubsequence';
import { getPercentColors } from '../../utils/getRankColors';
import * as CandidateLeagueTableCells from '../../components/CandidateLeagueTableCells';
import { RankedSpreadLevel } from '../../components/RankedSpreadLevel';
import { StickySummary } from '../../components/CandidateBuilderStickyHeader';
import MegaEvolutionIcon from '../../components/MegaEvolutionIcon';
import SpeciesTypeIcons from '../../components/SpeciesTypeIcons';

const TOP_SPREAD_COUNT = 100;

const formatPercent = (value: number) =>
  formatValue(value, 2, { style: 'percent' });

function findByName(list: Pokemon[], query: string) {
  const lowerQuery = query.trim().toLowerCase();
  if (!lowerQuery) return undefined;
  const names = list.map((pokemon) => pokemon.name.toLowerCase());
  const matchers = [
    (name: string) => name === lowerQuery,
    (name: string) => name.includes(lowerQuery),
    (name: string) => isSubsequence(lowerQuery, name),
  ];

  for (const matches of matchers) {
    const index = names.findIndex(matches);
    if (index !== -1) return list[index];
  }
}

function useNameInput(name: string) {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current && document.activeElement !== input.current) {
      input.current.value = name;
    }
  }, [name]);

  return input;
}

const DEFAULT_POKEMON_ID = 'clefable_mega';
const DEFAULT_IVS = '0-13-9';
const SORTS = ['combined', 'great', 'ultra'] as const;
type Sort = (typeof SORTS)[number];

function defaultLevelCap(levelCaps: Settings['levelCaps']): LevelCapNumber {
  const preferred: LevelCapNumber[] = [50, 40, 51, 41];
  return preferred.find((level) => levelCaps[level]) ?? 50;
}

function parseIVs(value: string, floor: number): PokemonIVs {
  const [atk, def, sta] = value.split('-').map((part) => {
    const iv = parseInt(part, 10);
    return (
      Number.isNaN(iv) ? MAX_IV : Math.min(Math.max(iv, floor), MAX_IV)
    ) as IV;
  });
  return { atk: atk ?? MAX_IV, def: def ?? MAX_IV, sta: sta ?? MAX_IV };
}

function useMegaReference() {
  const { settings } = useSettings();
  const pokedex = usePokedex();
  const router = useRouter();

  const [id, atk, def, sta, metric] = (router.query.spread ?? []) as string[];
  const [choices, setChoices] = useState<{ [key: string]: string | undefined }>(
    { pokemon: id, ivs: atk && [atk, def, sta].join('-'), metric },
  );
  const param = (key: string) => choices[key];
  const setParam = (key: string) => (value: string | number) =>
    setChoices((current) => ({ ...current, [key]: String(value) }));

  const availablePokemon = useMemo(
    () => MEGA_POKEMON.filter((species) => pokedex.byId(species.id) !== null),
    [pokedex],
  );

  const byId = (id: string | undefined) =>
    availablePokemon.find((species) => species.id === id);
  const pokemon =
    byId(param('pokemon')) ??
    byId(DEFAULT_POKEMON_ID) ??
    availablePokemon[0] ??
    MEGA_POKEMON[0];
  const rankedPokemon = useDeferredValue(pokemon);
  const rankingMetric: RankableMetric =
    RANKABLE_METRICS.find((metric) => metric.key === param('metric'))?.key ??
    'product';
  const levelCap =
    LEVEL_CAPS.find((cap) => String(cap.level) === param('cap'))?.level ??
    defaultLevelCap(settings.levelCaps);
  const sort: Sort = SORTS.find((key) => key === param('sort')) ?? 'combined';
  const ivFloor = pokemon.floor ?? 0;
  const ivs = parseIVs(param('ivs') ?? DEFAULT_IVS, ivFloor);

  const spreads = useMemo(
    () => getMegaLeagueSpreads(rankedPokemon, levelCap, rankingMetric),
    [rankedPokemon, levelCap, rankingMetric],
  );
  const [cpMargin, setCPMargin] = useState<CPMargin>(null);
  const topSpreads = useMemo(() => {
    const shown =
      cpMargin === null
        ? spreads
        : spreads.filter((spread) => isWithinCPMargin(spread, cpMargin));
    return (
      sort === 'combined'
        ? shown
        : [...shown].sort(
            (a, b) => a[sort].rank - b[sort].rank || a.rank - b.rank,
          )
    ).slice(0, TOP_SPREAD_COUNT);
  }, [spreads, sort, cpMargin]);
  const yourSpread = spreads.find(
    (spread) => ivsKey(spread.ivs) === ivsKey(ivs),
  );

  return {
    availablePokemon,
    pokemon,
    setPokemonId: setParam('pokemon') as (id: PokemonID) => void,
    rankingMetric,
    setSelectedMetric: setParam('metric') as (metric: RankableMetric) => void,
    levelCap,
    setLevelCap: setParam('cap') as (levelCap: LevelCapNumber) => void,
    sort,
    setSort: setParam('sort') as (sort: Sort) => void,
    ivFloor,
    ivs,
    setIVs: (next: PokemonIVs) => setParam('ivs')(ivsKey(next)),
    yourSpread,
    topSpreads,
    cpMargin,
    setCPMargin,
    settings,
  };
}

const STICKY_RANK = 'sticky left-0 z-[1]';
const STICKY_IVS = `sticky sm:left-16 z-[1] ${CandidateLeagueTableCells.STICKY_EDGE_SHADOW}`;
const LEAGUE_DIVIDER = 'border-l border-black/10';
const ROW_DIVIDER = 'max-sm:border-t-2';
const WIDE_ONLY = 'hidden sm:table-cell';
const WIDE_ONLY_COLUMN = 'hidden sm:table-column';
const NARROW_ONLY_LINE = 'block text-xs opacity-70 whitespace-normal sm:hidden';
const STICKY_TOP =
  'max-sm:sticky max-sm:top-14 max-sm:z-10 lg:sticky lg:top-0 lg:z-10';
const STICKY_SECOND_HEADER = 'lg:sticky lg:top-10 lg:z-10';
const STICKY_PINNED_ROW =
  'max-sm:sticky max-sm:top-24 max-sm:z-[5] lg:sticky lg:top-20 lg:z-[5]';
const rankMark = <span className='sm:hidden'>#</span>;
const LEAGUES = [
  {
    key: 'great',
    shortName: 'Great',
    name: 'Great League',
    maxCP: 1500,
    tint: 'from-blue-400 to-blue-500',
    stripe: 'from-red-500 to-red-600',
  },
  {
    key: 'ultra',
    shortName: 'Ultra',
    name: 'Ultra League',
    maxCP: 2500,
    tint: 'from-gray-700 to-gray-800',
    stripe: 'from-yellow-500 to-yellow-600',
  },
] as const;

const CP_MARGINS = [
  { value: null, name: 'Any CP' },
  { value: 10, name: 'Within 10 of cap' },
  { value: 5, name: 'Within 5 of cap' },
] as const;
type CPMargin = (typeof CP_MARGINS)[number]['value'];
const isWithinCPMargin = (spread: MegaLeagueSpread, margin: number) =>
  LEAGUES.every((league) => league.maxCP - spread[league.key].cp <= margin);

const { Header, Body } = CandidateLeagueTableCells;

const SpreadRow: FC<{
  spread: MegaLeagueSpread;
  pinned: boolean;
  isEntered: boolean;
  rankingMetric: RankableMetric;
}> = ({ spread, pinned, isEntered, rankingMetric }) => {
  const colors = getPercentColors(spread.averagePercent);
  const cell = pinned
    ? `bg-gray-50 border-b-4 ${STICKY_PINNED_ROW}`
    : `bg-inherit ${ROW_DIVIDER}`;
  const wideCell = `${cell} ${WIDE_ONLY}`;
  const averagePercent = formatPercent(spread.averagePercent);

  return (
    <tr
      className={
        pinned
          ? 'text-gray-700'
          : `${colors.background} ${colors.text}${
              isEntered ? ' font-semibold' : ''
            }`
      }
    >
      <Body className={`${STICKY_RANK} ${cell} max-sm:pr-0`}>
        {spread.rank}
      </Body>
      <Body className={`${STICKY_IVS} ${cell} max-sm:pl-1.5`}>
        {ivsKey(spread.ivs)}
        <span className={NARROW_ONLY_LINE}>
          <span className='mr-1 text-[10px] font-normal opacity-70'>avg</span>
          {averagePercent}
        </span>
      </Body>
      <Body className={wideCell}>{averagePercent}</Body>

      {LEAGUES.map(({ key }) => {
        const ranked = spread[key];
        const percent = formatPercent(getMetricPercent(ranked, rankingMetric));

        return (
          <React.Fragment key={key}>
            <Body className={`${cell} ${LEAGUE_DIVIDER} max-sm:px-2`}>
              {rankMark}
              {ranked.rank}
              <span className={NARROW_ONLY_LINE}>
                {ranked.cp} CP
                <br />
                {percent}{' '}
                <span className='whitespace-nowrap'>· L{ranked.level}</span>
              </span>
            </Body>
            <Body className={wideCell}>
              <RankedSpreadLevel {...ranked} />
            </Body>
            <Body className={wideCell}>{ranked.cp}</Body>
            <Body className={wideCell}>{percent}</Body>
          </React.Fragment>
        );
      })}
    </tr>
  );
};

const SortButton: FC<{
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    type='button'
    aria-pressed={active}
    title='Sort by this rank'
    onClick={onClick}
    className='tracking-wider uppercase rounded focus-visible-ring'
  >
    {children}
    <span aria-hidden className={active ? 'ml-1' : 'ml-1 opacity-40'}>
      ▼
    </span>
  </button>
);

const MegaSpreadsTable: FC<{
  spreads: MegaLeagueSpread[];
  yourSpread: MegaLeagueSpread | undefined;
  rankingMetric: RankableMetric;
  sort: Sort;
  onSort: (sort: Sort) => void;
}> = ({ spreads, yourSpread, rankingMetric, sort, onSort }) => {
  const [scrolledSideways, trackSidewaysScroll] = useScrolledSideways();

  return (
    <section className='w-full mb-8 sm:overflow-clip sm:shadow-md sm:shadow-gray-100 sm:dark:shadow-xl sm:dark:shadow-gray-900 sm:rounded-lg border-y border-gray-200 dark:border-transparent sm:border'>
      <div
        onScroll={trackSidewaysScroll}
        data-scrolled={scrolledSideways || undefined}
        className='w-full sm:overflow-x-scroll lg:overflow-visible group'
      >
        <table className='w-full border-separate border-spacing-0 sm:min-w-max table-fixed'>
          <colgroup>
            <col className='w-[3.25rem] sm:w-16' />
            <col className='w-[5.5rem] sm:w-24' />
            <col className={`${WIDE_ONLY_COLUMN} w-[4.5rem]`} />
            {LEAGUES.map(({ key }) => (
              <React.Fragment key={key}>
                <col className='sm:w-16' />
                <col className={`${WIDE_ONLY_COLUMN} w-20`} />
                <col className={`${WIDE_ONLY_COLUMN} w-20`} />
                <col className={`${WIDE_ONLY_COLUMN} w-24`} />
              </React.Fragment>
            ))}
          </colgroup>

          <thead>
            <tr>
              <Header
                colSpan={2}
                scope='colgroup'
                widthClass=''
                className={`sticky left-0 z-[1] max-sm:top-14 max-sm:z-10 lg:top-0 lg:z-10 ${CandidateLeagueTableCells.STICKY_EDGE_SHADOW}`}
              >
                <SortButton
                  active={sort === 'combined'}
                  onClick={() => onSort('combined')}
                >
                  Combined
                </SortButton>
              </Header>
              <Header widthClass='' className={`${WIDE_ONLY} ${STICKY_TOP}`} />
              {LEAGUES.map((league) => {
                const tint = `bg-gradient-to-br ${league.tint} [&>span]:text-white`;
                const sortButton = (name: string) => (
                  <SortButton
                    active={sort === league.key}
                    onClick={() => onSort(league.key)}
                  >
                    {name}
                  </SortButton>
                );

                return (
                  <React.Fragment key={league.key}>
                    <Header
                      scope='col'
                      widthClass=''
                      className={`${tint} ${STICKY_TOP} sm:hidden`}
                    >
                      {sortButton(league.shortName)}
                    </Header>
                    <Header
                      colSpan={4}
                      scope='colgroup'
                      widthClass=''
                      className={`${tint} ${WIDE_ONLY} ${STICKY_TOP} relative overflow-hidden`}
                    >
                      {sortButton(league.name)}
                      <span
                        aria-hidden
                        className={`absolute right-10 top-1/2 w-4 h-32 -translate-y-1/2 rotate-45 opacity-90 bg-gradient-to-b ${league.stripe}`}
                      />
                    </Header>
                  </React.Fragment>
                );
              })}
            </tr>

            <tr className='hidden sm:table-row'>
              <Header
                widthClass=''
                className={`${STICKY_RANK} ${STICKY_SECOND_HEADER}`}
              >
                Rank
              </Header>
              <Header
                widthClass=''
                className={`${STICKY_IVS} ${STICKY_SECOND_HEADER}`}
              >
                IVs
              </Header>
              <Header
                widthClass=''
                className={`${WIDE_ONLY} ${STICKY_SECOND_HEADER}`}
              >
                Avg %
              </Header>

              {LEAGUES.map(({ key }) => (
                <React.Fragment key={key}>
                  <Header
                    widthClass=''
                    className={`${LEAGUE_DIVIDER} ${STICKY_SECOND_HEADER}`}
                  >
                    Rank
                  </Header>
                  {['Level', 'CP', '%'].map((label) => (
                    <Header
                      key={label}
                      widthClass=''
                      className={`${WIDE_ONLY} ${STICKY_SECOND_HEADER}`}
                    >
                      {label}
                    </Header>
                  ))}
                </React.Fragment>
              ))}
            </tr>
          </thead>

          <tbody
            className={
              yourSpread
                ? '[&>tr:nth-child(2)>td]:border-t-transparent'
                : undefined
            }
          >
            {yourSpread && (
              <SpreadRow
                spread={yourSpread}
                pinned
                isEntered
                rankingMetric={rankingMetric}
              />
            )}

            {spreads.map((spread) => (
              <SpreadRow
                key={ivsKey(spread.ivs)}
                spread={spread}
                pinned={false}
                isEntered={spread === yourSpread}
                rankingMetric={rankingMetric}
              />
            ))}

            {spreads.length === 0 && (
              <tr>
                <Body colSpan={11} className='whitespace-normal'>
                  No spreads are that close to both league caps.
                </Body>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const MegaPage: FC = () => {
  const {
    availablePokemon,
    pokemon,
    setPokemonId,
    rankingMetric,
    setSelectedMetric,
    levelCap,
    setLevelCap,
    sort,
    setSort,
    ivFloor,
    ivs,
    setIVs,
    yourSpread,
    topSpreads,
    cpMargin,
    setCPMargin,
    settings,
  } = useMegaReference();
  const nameInput = useNameInput(pokemon.name);

  const ivOptions = IV_RANGE.filter((iv) => iv >= ivFloor)[
    settings.invertIVDropdown ? 'reverse' : 'concat'
  ]();

  return (
    <>
      <Head>
        <title>Mega &amp; Primal PvP IVs • GOIV.app</title>
      </Head>

      <div className='w-full px-4 mb-4 sm:px-0'>
        <h1 className='flex items-center pt-2 text-2xl font-semibold text-gray-900 dark:text-white font-title'>
          <MegaEvolutionIcon className='w-6 h-6 mr-2 text-gray-400 dark:text-gray-500 shrink-0' />
          Mega &amp; Primal PvP IVs
        </h1>
      </div>

      <section className='flex flex-wrap items-start justify-start w-full px-4 mb-4 sm:px-0'>
        <label className='block w-full mb-2 sm:w-auto sm:mr-6'>
          <span className='text-xs text-gray-500 dark:text-gray-400'>
            Pokémon
          </span>
          <input
            ref={nameInput}
            type='text'
            list='mega-pokemon-list'
            defaultValue={pokemon.name}
            placeholder='Pokémon Name'
            onChange={(evt) => {
              const match = findByName(availablePokemon, evt.target.value);
              if (match) setPokemonId(match.id);
            }}
            onFocus={(evt) => {
              evt.target.value = '';
            }}
            onBlur={(evt) => {
              evt.target.value = pokemon.name;
            }}
            className='block w-full mt-1 rounded form-input focus-visible-ring ring-offset-gray-50 dark:ring-offset-gray-900'
          />

          <datalist id='mega-pokemon-list'>
            {availablePokemon.map((species) => (
              <option key={species.id} value={species.name} />
            ))}
          </datalist>
        </label>

        <div className='grid grid-cols-3 gap-2 mr-6'>
          {STATS.map((stat) => (
            <label key={stat.key} className='block mb-2'>
              <span className='text-xs text-gray-500 dark:text-gray-400'>
                {stat.name} IV
              </span>
              <select
                value={ivs[stat.key]}
                onChange={(evt) =>
                  setIVs({
                    ...ivs,
                    [stat.key]: parseInt(evt.target.value, 10) as IV,
                  })
                }
                className='block w-full mt-1 rounded form-select focus-ring ring-offset-gray-50 dark:ring-offset-gray-900'
              >
                {ivOptions.map((iv) => (
                  <option key={iv} value={iv}>
                    {iv}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>

        <label className='block mb-2 mr-6'>
          <span className='text-xs text-gray-500 dark:text-gray-400'>
            Level Cap
          </span>
          <select
            value={levelCap}
            onChange={(evt) =>
              setLevelCap(parseInt(evt.target.value, 10) as LevelCapNumber)
            }
            className='block w-full mt-1 rounded form-select focus-ring ring-offset-gray-50 dark:ring-offset-gray-900'
          >
            {LEVEL_CAPS.map((cap) => (
              <option key={cap.level} value={cap.level}>
                {cap.level} - {cap.description}
              </option>
            ))}
          </select>
        </label>

        {(settings.showRankingMetric || rankingMetric !== 'product') && (
          <label className='block mb-2 mr-6'>
            <span className='text-xs text-gray-500 dark:text-gray-400'>
              Rank By
            </span>
            <select
              value={rankingMetric}
              onChange={(evt) =>
                setSelectedMetric(evt.target.value as RankableMetric)
              }
              className='block w-full mt-1 rounded form-select focus-ring ring-offset-gray-50 dark:ring-offset-gray-900'
            >
              {RANKABLE_METRICS.map((metric) => (
                <option key={metric.key} value={metric.key}>
                  {metric.name}
                </option>
              ))}
            </select>
          </label>
        )}

        <RadioGroup
          value={cpMargin}
          onChange={setCPMargin}
          as='div'
          className='flex flex-wrap items-center justify-start w-full mt-2 sm:mt-1'
        >
          <RadioGroup.Label className='sr-only'>
            How close to both league caps
          </RadioGroup.Label>

          {CP_MARGINS.map((margin) => (
            <RadioGroup.Option
              key={margin.name}
              value={margin.value}
              className='mb-2 mr-2 rounded cursor-pointer last:mr-0 focus-visible-ring ring-offset-gray-50 dark:ring-offset-gray-900'
            >
              {({ checked }) => (
                <RadioGroup.Label
                  as='span'
                  className={`block transition-colors border py-1 px-2 text-sm font-semibold hover:text-blue-500 dark:hover:text-blue-300 rounded bg-white dark:bg-gray-800 ${
                    checked
                      ? 'text-blue-500 dark:text-blue-300 border-gray-200 dark:border-gray-700'
                      : 'text-gray-500 dark:text-gray-400 border-gray-100 dark:border-transparent'
                  }`}
                >
                  {margin.name}
                </RadioGroup.Label>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </section>

      <StickySummary
        editLabel='Edit Pokémon and IVs'
        title={
          <>
            <span className='inline-flex mr-2'>
              <SpeciesTypeIcons types={pokemon.types} />
            </span>
            {pokemon.name}, {ivsKey(ivs)}
          </>
        }
        detail={`Ranked by ${
          RANKABLE_METRICS.find((metric) => metric.key === rankingMetric)
            ?.name ?? ''
        }, Level Cap ${levelCap}${
          sort === 'combined'
            ? ''
            : `, sorted by ${
                LEAGUES.find((league) => league.key === sort)?.shortName ?? ''
              } rank`
        }${cpMargin === null ? '' : `, within ${cpMargin} CP of cap`}`}
      />

      <MegaSpreadsTable
        spreads={topSpreads}
        yourSpread={yourSpread}
        rankingMetric={rankingMetric}
        sort={sort}
        onSort={setSort}
      />
    </>
  );
};

export default MegaPage;
