import React, { FunctionComponent, useMemo } from 'react';

import { useLeague } from '../hooks/useLeague';
import { useSubject } from '../hooks/useSubject';
import { useLeagueSubjectRankedSpreads } from '../hooks/useLeagueSubjectRankedSpreads';

import { getRankedSpreadColors } from '../utils/getRankColors';

import * as LeagueSubjectTableCells from './LeagueSubjectTableCells';
import LeagueSubjectTopSpreadsForLevelDownload from './LeagueSubjectTopSpreadsForLevelDownload';

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
              <LeagueSubjectTableCells.Header>
                Rank
              </LeagueSubjectTableCells.Header>

              <LeagueSubjectTableCells.Header>
                IVs
              </LeagueSubjectTableCells.Header>

              <LeagueSubjectTableCells.Header>
                Level
              </LeagueSubjectTableCells.Header>

              <LeagueSubjectTableCells.Header>
                CP
              </LeagueSubjectTableCells.Header>

              <LeagueSubjectTableCells.Header>
                Atk
              </LeagueSubjectTableCells.Header>

              <LeagueSubjectTableCells.Header>
                Def
              </LeagueSubjectTableCells.Header>

              <LeagueSubjectTableCells.Header>
                Sta
              </LeagueSubjectTableCells.Header>

              <LeagueSubjectTableCells.Header>
                Product
              </LeagueSubjectTableCells.Header>

              <LeagueSubjectTableCells.Header>
                Product%
              </LeagueSubjectTableCells.Header>
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
                <LeagueSubjectTableCells.Body>
                  <>{spread.rank}</>
                </LeagueSubjectTableCells.Body>

                <LeagueSubjectTableCells.Body>
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
                </LeagueSubjectTableCells.Body>

                <LeagueSubjectTableCells.Body>
                  {spread.level}
                </LeagueSubjectTableCells.Body>

                <LeagueSubjectTableCells.Body>
                  {spread.cp}
                </LeagueSubjectTableCells.Body>

                <LeagueSubjectTableCells.Body>
                  {spread.stats.atk.toFixed(2)}
                </LeagueSubjectTableCells.Body>

                <LeagueSubjectTableCells.Body>
                  {spread.stats.def.toFixed(2)}
                </LeagueSubjectTableCells.Body>

                <LeagueSubjectTableCells.Body>
                  {spread.stats.sta}
                </LeagueSubjectTableCells.Body>

                <LeagueSubjectTableCells.Body>
                  <span title={`${spread.product}`}>
                    {(spread.product / 1000).toFixed(2)}
                  </span>
                </LeagueSubjectTableCells.Body>

                <LeagueSubjectTableCells.Body>
                  {(spread.percent.product * 100).toFixed(2)}%
                </LeagueSubjectTableCells.Body>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <LeagueSubjectTopSpreadsForLevelDownload />
    </>
  );
};

export default LeagueTopSpreadsForLevel;
