import React, { FC, ReactChild, UIEvent, memo, useMemo, useState } from 'react';
import { RankedSpread } from '../lib/generateRankedSpreads';
import { useCandidate } from '../hooks/useCandidate';
import { RankableMetric } from '../data/stat';
import { LevelCapNumber } from '../data/levelCap';
import { Pokemon } from '../data/pokedex';
import { useRankedSpreads } from '../hooks/useRankedSpreads';
import { useRankedSpreadsAtLevelCap } from '../hooks/useRankedSpreads/useSpreadsAtLevelCap';
import { useLeague } from '../hooks/useLeague';
import { usePokedex } from '../hooks/usePokedex';
import { useScrolledSideways } from '../hooks/useScrolledSideways';

import { getRankedSpreadColors } from '../utils/getRankColors';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueTopSpreadsAtLevelCapDownload from './CandidateLeagueTopSpreadsAtLevelCapDownload';
import { xlCount } from '../lib/xlCount';
import { formatValue } from '../utils/formatValue';
import { RankedSpreadLevel } from './RankedSpreadLevel';
import { RadioGroup } from '@headlessui/react';

const TOP_ROW_COUNT = 10;
// The scroll box fits the header (2.5rem), the pinned row (a row + 5px border)
// and 10.5 rows (a row + 1px border each). The half row hints that the list
// scrolls.
const ROW_SIZES = {
  oneLine: {
    height: 53,
    scrollBox: 'max-h-[calc(5.75rem_+_5px_+_10.5_*_(3.25rem_+_1px))]',
    cellPadding: undefined,
  },
  withOtherForm: {
    height: 57,
    scrollBox: 'max-h-[calc(6rem_+_5px_+_10.5_*_(3.5rem_+_1px))]',
    cellPadding: '[&>tr>td]:py-2.5',
  },
};
const OVERSCAN_ROWS = 10;
const FALLBACK_BOX_HEIGHT = 600;

const ivsKey = (spread: RankedSpread) =>
  `${spread.ivs.atk}-${spread.ivs.def}-${spread.ivs.sta}`;

function useDisplayedSpreads(showAll: boolean) {
  const { candidate } = useCandidate();
  const rankedSpreads = useRankedSpreads();

  const candidateKey = `${candidate.ivs.atk}-${candidate.ivs.def}-${candidate.ivs.sta}`;

  return {
    candidateKey,
    candidateSpread: rankedSpreads.find(
      (spread) => ivsKey(spread) === candidateKey,
    ),
    spreads: showAll ? rankedSpreads : rankedSpreads.slice(0, TOP_ROW_COUNT),
    total: rankedSpreads.length,
  };
}

// Aegislash and Minior switch forms mid-battle, so each row also shows how
// the same IVs rank as the other form.
function useOtherFormSpreads(levelCap: LevelCapNumber, species: Pokemon) {
  const { candidate } = useCandidate();
  const pokedex = usePokedex();
  const otherForm =
    candidate.species.forms.find(
      (form) => form.id !== species.id && pokedex.byId(form.id),
    ) ?? null;
  const otherFormSpreads = useRankedSpreadsAtLevelCap(
    levelCap,
    otherForm ?? species,
  );

  const byIvs = useMemo(
    () =>
      otherForm
        ? new Map(otherFormSpreads.map((spread) => [ivsKey(spread), spread]))
        : null,
    [otherForm, otherFormSpreads],
  );

  if (!otherForm || !byIvs) return null;

  return {
    name: otherForm.name.match(/\((.+)\)/)?.[1] ?? otherForm.name,
    byIvs,
  };
}

// Rendering all 4,096 rows at once takes about a second, so only the rows
// near the visible part of the scroll box are drawn.
function useVisibleRows(rowCount: number, fallbackRowHeight: number) {
  const [view, setView] = useState({
    scrollTop: 0,
    boxHeight: FALLBACK_BOX_HEIGHT,
    rowHeight: fallbackRowHeight,
  });

  const onScroll = (evt: UIEvent<HTMLElement>) => {
    const box = evt.currentTarget;
    const row = box.querySelector<HTMLElement>('tbody tr[data-row]');
    setView({
      scrollTop: box.scrollTop,
      boxHeight: box.clientHeight,
      rowHeight: row?.offsetHeight ?? fallbackRowHeight,
    });
  };

  const start = Math.max(
    0,
    Math.floor(view.scrollTop / view.rowHeight) - OVERSCAN_ROWS,
  );
  const end = Math.min(
    rowCount,
    start + Math.ceil(view.boxHeight / view.rowHeight) + OVERSCAN_ROWS * 2,
  );

  return {
    start,
    end,
    rowHeight: view.rowHeight,
    onScroll,
  };
}

type Row = RankedSpread;
type Column = {
  label: string;
  value: (row: Row) => ReactChild;
  otherFormValue?: (row: Row) => ReactChild;
  sameForEveryForm?: true;
  priority: number;
  widthClass?: string;
  stickyLeft?: string;
};

// Rank and IVs stay on screen when scrolling sideways, so IVs is offset by
// Rank's width.
function getColumns(rankingMetric: RankableMetric, otherFormName?: string) {
  const columns: Column[] = [
    {
      label: 'Rank',
      value: (row: Row) => row.rank,
      otherFormValue: (row) => `${otherFormName ?? ''} #${row.rank}`,
      priority: 0,
      widthClass: otherFormName ? 'w-28 min-w-[7rem]' : 'w-16 min-w-[4rem]',
      stickyLeft: 'left-0',
    },
    {
      label: 'IVs',
      value: (row) => (
        <>
          {row.ivs.atk}-{row.ivs.def}-{row.ivs.sta}
        </>
      ),
      sameForEveryForm: true,
      priority: 0,
      stickyLeft: `${otherFormName ? 'left-28' : 'left-16'} ${
        CandidateLeagueTableCells.STICKY_EDGE_SHADOW
      }`,
    },
    {
      label: '%',
      value: (row: Row) =>
        formatValue(
          rankingMetric === 'product'
            ? row.product.percentOfMax
            : rankingMetric === 'bulkProduct'
            ? row.bulkProduct.percentOfMax
            : row.stats[rankingMetric].percentOfMax,
          2,
          { style: 'percent' },
        ),
      priority: 2,
    },
    {
      label: 'Level',
      value: (row) => <RankedSpreadLevel {...row} />,
      priority: 2,
    },
    {
      label: 'CP',
      value: (row) => row.cp,
      priority: 2,
    },
    {
      label: 'XL',
      value: (row) => xlCount(row.level),
      priority: 2,
    },
    {
      widthClass: 'w-28',
      label: 'Product',
      value: (row) => (
        <span title={row.product.value.toString()}>
          {formatValue(row.product.value, 2)}
        </span>
      ),
      priority: rankingMetric === 'product' ? 1 : 3,
    },
    {
      label: 'Atk',
      value: (row) => (
        <span title={row.stats.atk.value.toString()}>
          {formatValue(row.stats.atk.value, 2)}
        </span>
      ),
      priority: rankingMetric === 'atk' ? 1 : 3,
    },
    {
      label: 'Def',
      value: (row) => (
        <span title={row.stats.def.value.toString()}>
          {formatValue(row.stats.def.value, 2)}
        </span>
      ),
      priority: rankingMetric === 'def' ? 1 : 3,
    },
    {
      label: 'Sta',
      value: (row) => row.stats.sta.value,
      priority: rankingMetric === 'sta' ? 1 : 3,
    },
    {
      widthClass: 'w-28',
      label: 'Bulk',
      value: (row) => (
        <span title={row.bulkProduct.value.toString()}>
          {formatValue(row.bulkProduct.value, 2)}
        </span>
      ),
      priority: rankingMetric === 'bulkProduct' ? 1 : 3,
    },
  ];

  return columns.sort((a, b) => a.priority - b.priority);
}

function useColumns(rankingMetric: RankableMetric, otherFormName?: string) {
  return useMemo(
    () => getColumns(rankingMetric, otherFormName),
    [rankingMetric, otherFormName],
  );
}

const headerCellClass = (column: Column) =>
  column.stickyLeft
    ? `sticky top-0 z-30 ${column.stickyLeft}`
    : 'sticky top-0 z-20';

function bodyCellClass(column: Column, pinned: boolean) {
  if (pinned) {
    return `sticky top-10 bg-gray-50 border-b-4 ${
      column.stickyLeft ? `${column.stickyLeft} z-20` : 'z-10'
    }`;
  }

  return column.stickyLeft
    ? `sticky ${column.stickyLeft} z-[1] bg-inherit`
    : undefined;
}

const SpreadRow = memo(function SpreadRow({
  spread,
  otherFormSpread,
  pinned,
  isCandidate,
  columns,
  rankingMetric,
}: {
  spread: RankedSpread;
  otherFormSpread?: RankedSpread;
  pinned: boolean;
  isCandidate: boolean;
  columns: Column[];
  rankingMetric: RankableMetric;
}) {
  const colors = getRankedSpreadColors(spread, rankingMetric);

  return (
    <tr
      data-row={pinned ? undefined : ''}
      className={
        pinned
          ? 'text-gray-700'
          : `${colors.background} ${colors.text}${
              isCandidate ? ' font-semibold' : ''
            }`
      }
    >
      {columns.map((column) => (
        <CandidateLeagueTableCells.Body
          key={column.label}
          className={bodyCellClass(column, pinned)}
        >
          {column.value(spread)}
          {otherFormSpread && !column.sameForEveryForm && (
            <span className='block text-xs opacity-70'>
              {(column.otherFormValue ?? column.value)(otherFormSpread)}
            </span>
          )}
        </CandidateLeagueTableCells.Body>
      ))}
    </tr>
  );
});

function Spacer({
  height,
  columnCount,
}: {
  height: number;
  columnCount: number;
}) {
  if (height <= 0) return null;

  return (
    <tr aria-hidden>
      <td colSpan={columnCount} style={{ height, padding: 0, border: 0 }} />
    </tr>
  );
}

function SpreadsTable({
  showAll,
  levelCap,
  species,
}: {
  showAll: boolean;
  levelCap: LevelCapNumber;
  species: Pokemon;
}) {
  const { candidateKey, candidateSpread, spreads } =
    useDisplayedSpreads(showAll);
  const otherForm = useOtherFormSpreads(levelCap, species);
  const rowSize = otherForm ? ROW_SIZES.withOtherForm : ROW_SIZES.oneLine;
  const { start, end, rowHeight, onScroll } = useVisibleRows(
    spreads.length,
    rowSize.height,
  );
  const [scrolledSideways, trackSidewaysScroll] = useScrolledSideways();
  const { candidate } = useCandidate();

  const columns = useColumns(candidate.rankingMetric, otherForm?.name);

  return (
    <section
      onScroll={(evt) => {
        trackSidewaysScroll(evt);
        if (showAll) onScroll(evt);
      }}
      data-scrolled={scrolledSideways || undefined}
      className={`group w-full overflow-x-scroll${
        showAll ? ` overflow-y-auto ${rowSize.scrollBox}` : ''
      }`}
    >
      <table className='w-full min-w-max table-fixed border-separate border-spacing-0'>
        <thead>
          <tr>
            {columns.map((column) => (
              <CandidateLeagueTableCells.Header
                key={column.label}
                widthClass={column.widthClass}
                className={headerCellClass(column)}
              >
                {column.label}
              </CandidateLeagueTableCells.Header>
            ))}
          </tr>
        </thead>

        <tbody className={rowSize.cellPadding}>
          {candidateSpread && (
            <SpreadRow
              spread={candidateSpread}
              otherFormSpread={otherForm?.byIvs.get(candidateKey)}
              pinned
              isCandidate
              columns={columns}
              rankingMetric={candidate.rankingMetric}
            />
          )}

          <Spacer height={start * rowHeight} columnCount={columns.length} />

          {spreads.slice(start, end).map((spread) => (
            <SpreadRow
              key={ivsKey(spread)}
              spread={spread}
              otherFormSpread={otherForm?.byIvs.get(ivsKey(spread))}
              pinned={false}
              isCandidate={ivsKey(spread) === candidateKey}
              columns={columns}
              rankingMetric={candidate.rankingMetric}
            />
          ))}

          <Spacer
            height={(spreads.length - end) * rowHeight}
            columnCount={columns.length}
          />
        </tbody>
      </table>
    </section>
  );
}

export function SpreadCountPicker({
  levelCap,
  species,
}: {
  levelCap: LevelCapNumber;
  species: Pokemon;
}) {
  const { showAllSpreads, setShowAllSpreads } = useLeague();
  const total = useRankedSpreadsAtLevelCap(levelCap, species).length;

  if (total <= TOP_ROW_COUNT) return null;

  const options = [
    { value: false, label: `Top ${TOP_ROW_COUNT}` },
    { value: true, label: `All ${formatValue(total)}` },
  ];

  return (
    <RadioGroup
      value={showAllSpreads}
      onChange={setShowAllSpreads}
      className='z-10 flex p-1 ml-3 rounded-md shrink-0 bg-black/30'
    >
      <RadioGroup.Label className='sr-only'>Spreads shown</RadioGroup.Label>

      {options.map((option) => (
        <RadioGroup.Option
          key={option.label}
          value={option.value}
          className={({ checked }) =>
            `px-2 py-1 text-xs font-semibold rounded cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 ring-white ${
              checked ? 'bg-white text-gray-800 shadow-sm' : 'hover:bg-white/15'
            }`
          }
        >
          {option.label}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}

const CandidateLeagueTopSpreadsAtLevelCap: FC<{
  levelCap: LevelCapNumber;
  species: Pokemon;
}> = ({ levelCap, species }) => {
  const { showAllSpreads } = useLeague();

  return (
    <>
      <SpreadsTable
        key={showAllSpreads ? 'all' : 'top'}
        showAll={showAllSpreads}
        levelCap={levelCap}
        species={species}
      />

      <footer className='flex items-center justify-center w-full py-2 bg-white border-t border-gray-200'>
        <CandidateLeagueTopSpreadsAtLevelCapDownload />
      </footer>
    </>
  );
};

export default CandidateLeagueTopSpreadsAtLevelCap;
