import React, { FC, ReactChild, UIEvent, memo, useMemo, useState } from 'react';
import { RankedSpread } from '../lib/generateRankedSpreads';
import { useCandidate } from '../hooks/useCandidate';
import { RankableMetric } from '../data/stat';
import { useRankedSpreads } from '../hooks/useRankedSpreads';

import { getRankedSpreadColors } from '../utils/getRankColors';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueTopSpreadsAtLevelCapDownload from './CandidateLeagueTopSpreadsAtLevelCapDownload';
import { xlCount } from '../lib/xlCount';
import { formatValue } from '../utils/formatValue';
import { RankedSpreadLevel } from './RankedSpreadLevel';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

const TOP_ROW_COUNT = 10;
const OVERSCAN_ROWS = 10;
const FALLBACK_ROW_HEIGHT = 53;
const FALLBACK_BOX_HEIGHT = 600;

function useShowAll() {
  const [showAll, setShowAll] = useState(false);
  return [showAll, () => setShowAll((value) => !value)] as const;
}

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
    resetScroll: () => setView(INITIAL_VIEW),
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
      widthClass: 'w-20 min-w-[5rem]',
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
// sideways. IVs sits right after Rank, which is held at 5rem wide.
const STICKY_LEFT = ['left-0', 'left-20'];

const headerCellClass = (columnIndex: number) =>
  columnIndex < STICKY_LEFT.length
    ? `sticky top-0 z-30 ${STICKY_LEFT[columnIndex]}`
    : 'sticky top-0 z-20';

function bodyCellClass(columnIndex: number, pinned: boolean) {
  const left = STICKY_LEFT[columnIndex];

  if (pinned) {
    return `sticky top-10 bg-gray-50 border-b-4 ${
      left ? `${left} z-20` : 'z-10'
    }`;
  }

  return left ? `sticky ${left} z-[1] bg-inherit` : undefined;
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

const CandidateLeagueTopSpreadsAtLevelCap: FC = () => {
  const [showAll, toggleShowAll] = useShowAll();
  const { candidateKey, candidateSpread, spreads, total } =
    useDisplayedSpreads(showAll);
  const { start, end, rowHeight, onScroll, resetScroll } = useVisibleRows(
    spreads.length,
  );
  const { candidate } = useCandidate();

  const columns = useColumns(candidate.rankingMetric);

  return (
    <>
      <section
        onScroll={showAll ? onScroll : undefined}
        className={`w-full overflow-x-scroll${
          showAll ? ' overflow-y-auto max-h-[min(38.5rem,60vh)]' : ''
        }`}
      >
        <table className='w-full border-separate border-spacing-0'>
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

      <footer className='flex items-center justify-between w-full px-3 py-2 bg-white border-t border-gray-200'>
        {total > TOP_ROW_COUNT && (
          <button
            type='button'
            onClick={() => {
              resetScroll();
              toggleShowAll();
            }}
            aria-expanded={showAll}
            className='flex items-center p-1 text-xs font-semibold text-gray-700 rounded hover:text-black focus-visible-ring'
          >
            {showAll
              ? `Show top ${TOP_ROW_COUNT}`
              : `Show all ${formatValue(total)}`}
            {showAll ? (
              <ChevronUpIcon className='w-4 h-4 ml-1' />
            ) : (
              <ChevronDownIcon className='w-4 h-4 ml-1' />
            )}
          </button>
        )}

        <CandidateLeagueTopSpreadsAtLevelCapDownload />
      </footer>
    </>
  );
};

export default CandidateLeagueTopSpreadsAtLevelCap;
