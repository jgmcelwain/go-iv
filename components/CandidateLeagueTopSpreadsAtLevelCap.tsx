import React, { FC, ReactChild, memo, useMemo, useState } from 'react';
import { RankedSpread } from '../lib/generateRankedSpreads';
import { useLeague } from '../hooks/useLeague';
import { useCandidate } from '../hooks/useCandidate';
import { RankableMetric } from '../data/stat';
import { useRankedSpreads } from '../hooks/useRankedSpreads';

import { getRankedSpreadColors } from '../utils/getRankColors';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueTopSpreadsAtLevelCapDownload from './CandidateLeagueTopSpreadsAtLevelCapDownload';
import { xlCount } from '../lib/xlCount';
import { formatValue } from '../utils/formatValue';
import { RankedSpreadLevel } from './RankedSpreadLevel';

const INITIAL_ROW_COUNT = 10;
const ROWS_PER_PAGE = 100;

function useShownRowCount() {
  const [count, setCount] = useState(INITIAL_ROW_COUNT);
  return [count, () => setCount((value) => value + ROWS_PER_PAGE)] as const;
}

const ivsKey = (spread: RankedSpread) =>
  `${spread.ivs.atk}-${spread.ivs.def}-${spread.ivs.sta}`;

function useDisplayedSpreads(shownRowCount: number) {
  const { inspectedLevelCap } = useLeague();
  const { candidate } = useCandidate();
  const rankedSpreads = useRankedSpreads();

  if (inspectedLevelCap === null) {
    return { rows: [], total: 0 };
  }

  const candidateKey = `${candidate.ivs.atk}-${candidate.ivs.def}-${candidate.ivs.sta}`;
  const candidateSpread = rankedSpreads.find(
    (spread) => ivsKey(spread) === candidateKey,
  );

  const toRow = (spread: RankedSpread, pinned: boolean) => ({
    spread,
    key: pinned ? 'pinned' : ivsKey(spread),
    pinned,
    isCandidate: ivsKey(spread) === candidateKey,
  });

  const rows = [
    ...(candidateSpread ? [toRow(candidateSpread, true)] : []),
    ...rankedSpreads
      .slice(0, shownRowCount)
      .map((spread) => toRow(spread, false)),
  ];

  return { rows, total: rankedSpreads.length };
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
    { label: 'Rank', value: (row: Row) => row.rank, priority: 0 },
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

// memoised so showing more rows only renders the new ones
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
      className={
        pinned
          ? 'bg-gray-50 text-gray-700 border-b-4'
          : `${colors.background} ${colors.text}${
              isCandidate ? ' font-semibold' : ''
            }`
      }
    >
      {columns.map((column) => (
        <CandidateLeagueTableCells.Body key={column.label}>
          {column.value(spread)}
        </CandidateLeagueTableCells.Body>
      ))}
    </tr>
  );
});

const CandidateLeagueTopSpreadsAtLevelCap: FC = () => {
  const [shownRowCount, showMoreRows] = useShownRowCount();
  const { rows, total } = useDisplayedSpreads(shownRowCount);
  const { candidate } = useCandidate();
  const remaining = total - shownRowCount;

  const columns = useColumns(candidate.rankingMetric);

  return (
    <>
      <section className='w-full overflow-x-scroll'>
        <table className='w-full border-collapse'>
          <thead>
            <tr>
              {columns.map((column) => (
                <CandidateLeagueTableCells.Header key={column.label}>
                  {column.label}
                </CandidateLeagueTableCells.Header>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <SpreadRow
                key={row.key}
                spread={row.spread}
                pinned={row.pinned}
                isCandidate={row.isCandidate}
                columns={columns}
                rankingMetric={candidate.rankingMetric}
              />
            ))}
          </tbody>
        </table>
      </section>

      {remaining > 0 && (
        <button
          type='button'
          onClick={showMoreRows}
          className='w-full py-3 text-sm font-semibold text-blue-600 bg-white border-t border-gray-200 hover:bg-gray-50 focus-visible-ring'
        >
          Show {Math.min(ROWS_PER_PAGE, remaining)} more
          <span className='ml-1.5 font-normal text-gray-500'>
            · {formatValue(shownRowCount)} of {formatValue(total)} shown
          </span>
        </button>
      )}

      <CandidateLeagueTopSpreadsAtLevelCapDownload />
    </>
  );
};

export default CandidateLeagueTopSpreadsAtLevelCap;
