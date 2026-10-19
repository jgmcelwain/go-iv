import React, { FC, ReactChild, UIEvent, memo, useMemo, useState } from 'react';
import { RankedSpread } from '../lib/generateRankedSpreads';
import { useCandidate } from '../hooks/useCandidate';
import { RankableMetric } from '../data/stat';
import { LevelCapNumber } from '../data/levelCap';
import { Pokemon } from '../data/pokedex';
import { useRankedSpreads } from '../hooks/useRankedSpreads';
import { useRankedSpreadsAtLevelCap } from '../hooks/useRankedSpreads/useSpreadsAtLevelCap';
import { useLeague } from '../hooks/useLeague';
import { useScrolledSideways } from '../hooks/useScrolledSideways';

import { getRankedSpreadColors } from '../utils/getRankColors';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueTopSpreadsAtLevelCapDownload from './CandidateLeagueTopSpreadsAtLevelCapDownload';
import { xlCount } from '../lib/xlCount';
import { formatValue } from '../utils/formatValue';
import { RankedSpreadLevel } from './RankedSpreadLevel';
import { RadioGroup } from '@headlessui/react';

const TOP_ROW_COUNT = 10;
// header (2.5rem) + pinned row (3.25rem + 5px border) + 10.5 rows
// (3.25rem + 1px border each). The half row hints that the list scrolls.
const SCROLL_BOX_HEIGHT =
  'max-h-[calc(5.75rem_+_5px_+_10.5_*_(3.25rem_+_1px))]';
const OVERSCAN_ROWS = 10;
const FALLBACK_ROW_HEIGHT = 53;
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

// Rendering all 4,096 rows at once takes about a second, so only the rows
// near the visible part of the scroll box are drawn.
const INITIAL_VIEW = {
  scrollTop: 0,
  boxHeight: FALLBACK_BOX_HEIGHT,
  rowHeight: FALLBACK_ROW_HEIGHT,
};

function useVisibleRows(rowCount: number) {
  const [view, setView] = useState(INITIAL_VIEW);

  const onScroll = (evt: UIEvent<HTMLElement>) => {
    const box = evt.currentTarget;
    const row = box.querySelector<HTMLElement>('tbody tr[data-row]');
    setView({
      scrollTop: box.scrollTop,
      boxHeight: box.clientHeight,
      rowHeight: row?.offsetHeight ?? FALLBACK_ROW_HEIGHT,
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
  priority: number;
  widthClass?: string;
};

function getColumns(rankingMetric: RankableMetric) {
  const columns: Column[] = [
    {
      label: 'Rank',
      value: (row: Row) => row.rank,
      priority: 0,
      widthClass: 'w-16 min-w-[4rem]',
    },
    {
      label: 'IVs',
      value: (row) => (
        <>
          {row.ivs.atk}-{row.ivs.def}-{row.ivs.sta}
        </>
      ),
      priority: 0,
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

function useColumns(rankingMetric: RankableMetric) {
  return useMemo(() => getColumns(rankingMetric), [rankingMetric]);
}

// Rank and IVs (always the first two columns) stay on screen when scrolling
// sideways. IVs sits right after Rank, which is held at 4rem wide.
const STICKY_LEFT = ['left-0', 'left-16'];

const stickyLeftClass = (columnIndex: number) =>
  `${STICKY_LEFT[columnIndex]}${
    columnIndex === STICKY_LEFT.length - 1
      ? ` ${CandidateLeagueTableCells.STICKY_EDGE_SHADOW}`
      : ''
  }`;

const headerCellClass = (columnIndex: number) =>
  columnIndex < STICKY_LEFT.length
    ? `sticky top-0 z-30 ${stickyLeftClass(columnIndex)}`
    : 'sticky top-0 z-20';

function bodyCellClass(columnIndex: number, pinned: boolean) {
  const isStickyLeft = columnIndex < STICKY_LEFT.length;

  if (pinned) {
    return `sticky top-10 bg-gray-50 border-b-4 ${
      isStickyLeft ? `${stickyLeftClass(columnIndex)} z-20` : 'z-10'
    }`;
  }

  return isStickyLeft
    ? `sticky ${stickyLeftClass(columnIndex)} z-[1] bg-inherit`
    : undefined;
}

const SpreadRow = memo(function SpreadRow({
  spread,
  pinned,
  isCandidate,
  columns,
  rankingMetric,
}: {
  spread: RankedSpread;
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
      {columns.map((column, i) => (
        <CandidateLeagueTableCells.Body
          key={column.label}
          className={bodyCellClass(i, pinned)}
        >
          {column.value(spread)}
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

function SpreadsTable({ showAll }: { showAll: boolean }) {
  const { candidateKey, candidateSpread, spreads } =
    useDisplayedSpreads(showAll);
  const { start, end, rowHeight, onScroll } = useVisibleRows(spreads.length);
  const [scrolledSideways, trackSidewaysScroll] = useScrolledSideways();
  const { candidate } = useCandidate();

  const columns = useColumns(candidate.rankingMetric);

  return (
    <section
      onScroll={(evt) => {
        trackSidewaysScroll(evt);
        if (showAll) onScroll(evt);
      }}
      data-scrolled={scrolledSideways || undefined}
      className={`group w-full overflow-x-scroll${
        showAll ? ` overflow-y-auto ${SCROLL_BOX_HEIGHT}` : ''
      }`}
    >
      <table className='w-full min-w-max table-fixed border-separate border-spacing-0'>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <CandidateLeagueTableCells.Header
                key={column.label}
                widthClass={column.widthClass}
                className={headerCellClass(i)}
              >
                {column.label}
              </CandidateLeagueTableCells.Header>
            ))}
          </tr>
        </thead>

        <tbody>
          {candidateSpread && (
            <SpreadRow
              spread={candidateSpread}
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
      className='z-10 flex p-0.5 ml-3 rounded-md shrink-0 bg-black/20'
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

const CandidateLeagueTopSpreadsAtLevelCap: FC = () => {
  const { showAllSpreads } = useLeague();

  return (
    <>
      <SpreadsTable
        key={showAllSpreads ? 'all' : 'top'}
        showAll={showAllSpreads}
      />

      <footer className='flex items-center justify-center w-full py-2 bg-white border-t border-gray-200'>
        <CandidateLeagueTopSpreadsAtLevelCapDownload />
      </footer>
    </>
  );
};

export default CandidateLeagueTopSpreadsAtLevelCap;
