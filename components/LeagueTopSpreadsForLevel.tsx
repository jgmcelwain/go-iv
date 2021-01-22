import React, { FunctionComponent, useMemo } from 'react';

import { useLeague } from '../hooks/useLeague';
import { useSubject } from '../hooks/useSubject';
import { useLeagueSubjectRankedSpreads } from '../hooks/useLeagueSubjectRankedSpreads';

import { getRankedSpreadColors } from '../utils/getRankColors';

import * as LeagueTableCells from './LeagueTableCells';
import LeagueTopSpreadsForLevelDownload from './LeagueTopSpreadsForLevelDownload';

const LeagueTopSpreadsForLevel: FunctionComponent = () => {
  const { inspectedLevelCap } = useLeague();
  const { subject } = useSubject();
  const leagueSubjectRankedSpreads = useLeagueSubjectRankedSpreads();

  const displayedSpreads = useMemo(() => {
    const spreadsForLevel = leagueSubjectRankedSpreads[inspectedLevelCap.level];

    const subjectSpread = spreadsForLevel.find(
      (rankedSpread) =>
        rankedSpread.ivs.atk === subject.ivs.atk &&
        rankedSpread.ivs.def === subject.ivs.def &&
        rankedSpread.ivs.sta === subject.ivs.sta,
    );

    return [subjectSpread, ...spreadsForLevel.slice(0, 10)].map(
      (rankedSpread) => {
        const colors = getRankedSpreadColors(rankedSpread);

        return { ...rankedSpread, colors };
      },
    );
  }, [leagueSubjectRankedSpreads, inspectedLevelCap.level, subject.ivs]);

  return (
    <>
      <div className='w-full overflow-x-scroll'>
        <table className='w-full border-collapse table-auto'>
          <thead>
            <tr>
              <LeagueTableCells.Header>Rank</LeagueTableCells.Header>

              <LeagueTableCells.Header>IVs</LeagueTableCells.Header>

              <LeagueTableCells.Header>Level</LeagueTableCells.Header>

              <LeagueTableCells.Header>CP</LeagueTableCells.Header>

              <LeagueTableCells.Header>Atk</LeagueTableCells.Header>

              <LeagueTableCells.Header>Def</LeagueTableCells.Header>

              <LeagueTableCells.Header>Sta</LeagueTableCells.Header>

              <LeagueTableCells.Header>Product</LeagueTableCells.Header>

              <LeagueTableCells.Header>Product%</LeagueTableCells.Header>
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
                <LeagueTableCells.Body>
                  <>{spread.rank}</>
                </LeagueTableCells.Body>

                <LeagueTableCells.Body>
                  <>
                    {spread.ivs.atk}
                    <span className='transform scale-75 inline-block mx-1 font-semibold'>
                      {' '}
                      /{' '}
                    </span>
                    {spread.ivs.def}
                    <span className='transform scale-75 inline-block mx-1 font-semibold'>
                      {' '}
                      /{' '}
                    </span>
                    {spread.ivs.sta}
                  </>
                </LeagueTableCells.Body>

                <LeagueTableCells.Body>{spread.level}</LeagueTableCells.Body>

                <LeagueTableCells.Body>{spread.cp}</LeagueTableCells.Body>

                <LeagueTableCells.Body>
                  {spread.stats.atk.toFixed(2)}
                </LeagueTableCells.Body>

                <LeagueTableCells.Body>
                  {spread.stats.def.toFixed(2)}
                </LeagueTableCells.Body>

                <LeagueTableCells.Body>
                  {spread.stats.sta}
                </LeagueTableCells.Body>

                <LeagueTableCells.Body>
                  <span title={`${spread.product}`}>
                    {(spread.product / 1000).toFixed(2)}
                  </span>
                </LeagueTableCells.Body>

                <LeagueTableCells.Body>
                  {(spread.percent * 100).toFixed(2)}%
                </LeagueTableCells.Body>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <LeagueTopSpreadsForLevelDownload />
    </>
  );
};

export default LeagueTopSpreadsForLevel;
