import React, { FunctionComponent, useMemo } from 'react';

import { useLeague } from '../hooks/useLeague';
import { useCandidate } from '../hooks/useCandidate';
import { useRankedSpreads } from '../hooks/useRankedSpreads';

import { getRankedSpreadColors } from '../utils/getRankColors';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueTableCellShadowStat from './CandidateLeagueTableCellShadowStat';
import CandidateLeagueTopSpreadsAtLevelCapDownload from './CandidateLeagueTopSpreadsAtLevelCapDownload';

const CandidateLeagueTopSpreadsAtLevelCap: FunctionComponent = () => {
  const { inspectedLevelCap } = useLeague();
  const { candidate } = useCandidate();
  const rankedSpreads = useRankedSpreads();

  const displayedSpreads = useMemo(() => {
    const spreadsForLevel = rankedSpreads[inspectedLevelCap.level];

    const candidateSpread = spreadsForLevel.find(
      (rankedSpread) =>
        rankedSpread.ivs.atk === candidate.ivs.atk &&
        rankedSpread.ivs.def === candidate.ivs.def &&
        rankedSpread.ivs.sta === candidate.ivs.sta,
    );

    return [candidateSpread, ...spreadsForLevel.slice(0, 10)].map(
      (rankedSpread) => {
        const colors = getRankedSpreadColors(rankedSpread);

        return { ...rankedSpread, colors };
      },
    );
  }, [rankedSpreads, inspectedLevelCap.level, candidate.ivs]);

  return (
    <>
      <section className='w-full overflow-x-scroll'>
        <table className='w-full border-collapse table-auto'>
          <thead>
            <tr>
              <CandidateLeagueTableCells.Header>
                Rank
              </CandidateLeagueTableCells.Header>

              <CandidateLeagueTableCells.Header>
                IVs
              </CandidateLeagueTableCells.Header>

              <CandidateLeagueTableCells.Header>
                Level
              </CandidateLeagueTableCells.Header>

              <CandidateLeagueTableCells.Header>
                CP
              </CandidateLeagueTableCells.Header>

              <CandidateLeagueTableCells.Header>
                Atk
              </CandidateLeagueTableCells.Header>

              <CandidateLeagueTableCells.Header>
                Def
              </CandidateLeagueTableCells.Header>

              <CandidateLeagueTableCells.Header>
                Sta
              </CandidateLeagueTableCells.Header>

              <CandidateLeagueTableCells.Header>
                Product
              </CandidateLeagueTableCells.Header>

              <CandidateLeagueTableCells.Header>
                Product%
              </CandidateLeagueTableCells.Header>
            </tr>
          </thead>

          <tbody>
            {displayedSpreads.map((spread, i) => (
              <tr
                key={i}
                className={
                  i === 0
                    ? 'bg-gray-50 text-gray-700 border-b-4'
                    : `${spread.colors.background} ${spread.colors.text}`
                }
              >
                <CandidateLeagueTableCells.Body>
                  <>{spread.rank}</>
                </CandidateLeagueTableCells.Body>

                <CandidateLeagueTableCells.Body>
                  <>
                    {spread.ivs.atk}
                    <span className='inline-block mx-1 font-semibold transform scale-75'>
                      {' '}
                      /{' '}
                    </span>
                    {spread.ivs.def}
                    <span className='inline-block mx-1 font-semibold transform scale-75'>
                      {' '}
                      /{' '}
                    </span>
                    {spread.ivs.sta}
                  </>
                </CandidateLeagueTableCells.Body>

                <CandidateLeagueTableCells.Body>
                  {spread.level}
                </CandidateLeagueTableCells.Body>

                <CandidateLeagueTableCells.Body>
                  {spread.cp}
                </CandidateLeagueTableCells.Body>

                <CandidateLeagueTableCells.Body>
                  <CandidateLeagueTableCellShadowStat
                    value={spread.stats.atk.value}
                    stat='atk'
                    shadow={candidate.shadow}
                  />
                </CandidateLeagueTableCells.Body>

                <CandidateLeagueTableCells.Body>
                  <CandidateLeagueTableCellShadowStat
                    value={spread.stats.def.value}
                    stat='def'
                    shadow={candidate.shadow}
                  />
                </CandidateLeagueTableCells.Body>

                <CandidateLeagueTableCells.Body>
                  {spread.stats.sta.value}
                </CandidateLeagueTableCells.Body>

                <CandidateLeagueTableCells.Body>
                  <span title={`${spread.product}`}>
                    {(spread.product.value / 1000).toFixed(2)}
                  </span>
                </CandidateLeagueTableCells.Body>

                <CandidateLeagueTableCells.Body>
                  {(spread.product.percentOfMax * 100).toFixed(2)}%
                </CandidateLeagueTableCells.Body>
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
