import React, { FC, ReactChild } from 'react';
import { RankedSpread } from '../lib/generateRankedSpreads';
import { useLeague } from '../hooks/useLeague';
import { useCandidate, Candidate } from '../hooks/useCandidate';
import { useRankedSpreads } from '../hooks/useRankedSpreads';

import { getRankedSpreadColors } from '../utils/getRankColors';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueTopSpreadsAtLevelCapDownload from './CandidateLeagueTopSpreadsAtLevelCapDownload';
import { xlCount } from '../lib/xlCount';
import { formatValue } from '../utils/formatValue';

function useDisplayedSpreads() {
  const { inspectedLevelCap } = useLeague();
  const { candidate } = useCandidate();
  const rankedSpreads = useRankedSpreads();

  if (inspectedLevelCap === null) {
    return [];
  }

  const spreadsForLevel = rankedSpreads[inspectedLevelCap.level];

  const candidateSpread = spreadsForLevel.find(
    (rankedSpread) =>
      rankedSpread.ivs.atk === candidate.ivs.atk &&
      rankedSpread.ivs.def === candidate.ivs.def &&
      rankedSpread.ivs.sta === candidate.ivs.sta,
  );

  const spreads = [candidateSpread, ...spreadsForLevel.slice(0, 10)].filter(
    (spread): spread is RankedSpread => spread !== undefined,
  );

  return spreads.map((rankedSpread) => {
    const colors = getRankedSpreadColors(rankedSpread, candidate.rankingMetric);

    return { ...rankedSpread, colors };
  });
}

type Row = ReturnType<typeof useDisplayedSpreads>[0];
type Column = {
  label: string;
  value: (row: Row) => ReactChild;
  priority: number;
  widthClass?: string;
};

function useColumns(candidate: Candidate) {
  const { rankingMetric } = candidate;

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
      value: (row) => row.level,
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

const CandidateLeagueTopSpreadsAtLevelCap: FC = () => {
  const displayedSpreads = useDisplayedSpreads();
  const { candidate } = useCandidate();

  const columns = useColumns(candidate);

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
            {displayedSpreads.map((spread, i) => (
              <tr
                key={i}
                className={
                  i === 0 &&
                  spread.ivs.atk === candidate.ivs.atk &&
                  spread.ivs.def === candidate.ivs.def &&
                  spread.ivs.sta === candidate.ivs.sta
                    ? 'bg-gray-50 text-gray-700 border-b-4'
                    : `${spread.colors.background} ${spread.colors.text}`
                }
              >
                {columns.map((column) => (
                  <CandidateLeagueTableCells.Body key={column.label}>
                    {column.value(spread)}
                  </CandidateLeagueTableCells.Body>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <CandidateLeagueTopSpreadsAtLevelCapDownload />
    </>
  );
};

export default CandidateLeagueTopSpreadsAtLevelCap;
