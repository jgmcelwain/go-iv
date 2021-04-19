import React, { FunctionComponent, useMemo } from 'react';

import { useLeague } from '../hooks/useLeague';
import { useSubject } from '../hooks/useSubject';
import { useRankedSpreads } from '../hooks/useRankedSpreads';

import { getRankedSpreadColors } from '../utils/getRankColors';

import * as SubjectLeagueTableCells from './SubjectLeagueTableCells';
import SubjectLeagueTopSpreadsAtLevelCapDownload from './SubjectLeagueTopSpreadsAtLevelCapDownload';

const SubjectLeagueTopSpreadsAtLevelCap: FunctionComponent = () => {
  const { inspectedLevelCap } = useLeague();
  const { subject } = useSubject();
  const rankedSpreads = useRankedSpreads();

  const displayedSpreads = useMemo(() => {
    const spreadsForLevel = rankedSpreads[inspectedLevelCap.level];

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
  }, [rankedSpreads, inspectedLevelCap.level, subject.ivs]);

  return (
    <>
      <div className='w-full overflow-x-scroll'>
        <table className='w-full border-collapse table-auto'>
          <thead>
            <tr>
              <SubjectLeagueTableCells.Header>
                Rank
              </SubjectLeagueTableCells.Header>

              <SubjectLeagueTableCells.Header>
                IVs
              </SubjectLeagueTableCells.Header>

              <SubjectLeagueTableCells.Header>
                Level
              </SubjectLeagueTableCells.Header>

              <SubjectLeagueTableCells.Header>
                CP
              </SubjectLeagueTableCells.Header>

              <SubjectLeagueTableCells.Header>
                Atk
              </SubjectLeagueTableCells.Header>

              <SubjectLeagueTableCells.Header>
                Def
              </SubjectLeagueTableCells.Header>

              <SubjectLeagueTableCells.Header>
                Sta
              </SubjectLeagueTableCells.Header>

              <SubjectLeagueTableCells.Header>
                Product
              </SubjectLeagueTableCells.Header>

              <SubjectLeagueTableCells.Header>
                Product%
              </SubjectLeagueTableCells.Header>
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
                <SubjectLeagueTableCells.Body>
                  <>{spread.rank}</>
                </SubjectLeagueTableCells.Body>

                <SubjectLeagueTableCells.Body>
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
                </SubjectLeagueTableCells.Body>

                <SubjectLeagueTableCells.Body>
                  {spread.level}
                </SubjectLeagueTableCells.Body>

                <SubjectLeagueTableCells.Body>
                  {spread.cp}
                </SubjectLeagueTableCells.Body>

                <SubjectLeagueTableCells.Body>
                  {spread.stats.atk.value.toFixed(2)}
                </SubjectLeagueTableCells.Body>

                <SubjectLeagueTableCells.Body>
                  {spread.stats.def.value.toFixed(2)}
                </SubjectLeagueTableCells.Body>

                <SubjectLeagueTableCells.Body>
                  {spread.stats.sta.value}
                </SubjectLeagueTableCells.Body>

                <SubjectLeagueTableCells.Body>
                  <span title={`${spread.product}`}>
                    {(spread.product.value / 1000).toFixed(2)}
                  </span>
                </SubjectLeagueTableCells.Body>

                <SubjectLeagueTableCells.Body>
                  {(spread.product.percentOfMax * 100).toFixed(2)}%
                </SubjectLeagueTableCells.Body>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SubjectLeagueTopSpreadsAtLevelCapDownload />
    </>
  );
};

export default SubjectLeagueTopSpreadsAtLevelCap;
