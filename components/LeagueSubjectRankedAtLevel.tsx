import React, { FunctionComponent, useMemo } from 'react';

import { getRankedSpreadColors } from '../utils/getRankColors';
import { formatPercent } from '../utils/formatPercent';

import { useSettings } from '../hooks/useSettings';
import { useSubject } from '../hooks/useSubject';
import { useLeague } from '../hooks/useLeague';
import { useLeagueSubjectRankedSpreads } from '../hooks/useLeagueSubjectRankedSpreads';

import { IV_FLOORS, LevelCap } from '../data/reference';

import * as LeagueSubjectTableCells from './LeagueSubjectTableCells';

const LeagueSubjectAtLevel: FunctionComponent<{ levelCap: LevelCap }> = ({
  levelCap,
}) => {
  const { league, setDisplayMode } = useLeague();
  const { subject } = useSubject();
  const { settings } = useSettings();
  const leagueSubjectRankedSpreads = useLeagueSubjectRankedSpreads();

  const subjectAtLevel = useMemo(
    () =>
      leagueSubjectRankedSpreads[levelCap.level].find(
        (spread) =>
          spread.ivs.atk === subject.ivs.atk &&
          spread.ivs.def === subject.ivs.def &&
          spread.ivs.sta === subject.ivs.sta,
      ) ?? null,
    [leagueSubjectRankedSpreads[levelCap.level], subject.ivs],
  );

  const floor = useMemo(
    () => IV_FLOORS.find((ivFloor) => ivFloor.value === subject.floor),
    [subject.floor],
  );

  const colors = useMemo(() => getRankedSpreadColors(subjectAtLevel), [
    subjectAtLevel,
  ]);

  if (subjectAtLevel === null) return null;

  return (
    <tr className={`${colors.background} ${colors.text}`}>
      {settings.outputData.rank && (
        <LeagueSubjectTableCells.Body>
          {subjectAtLevel.rank}
        </LeagueSubjectTableCells.Body>
      )}

      {settings.outputData.level && (
        <LeagueSubjectTableCells.Body>
          <>
            {subjectAtLevel.level}
            <span className='text-xs'> / {levelCap.level}</span>
          </>
        </LeagueSubjectTableCells.Body>
      )}

      {settings.outputData.cp && (
        <LeagueSubjectTableCells.Body>
          {subjectAtLevel.cp}
        </LeagueSubjectTableCells.Body>
      )}

      {settings.outputData.stats && (
        <>
          <LeagueSubjectTableCells.Body>
            <>
              {subjectAtLevel.stats.atk.value.toFixed(2)}

              {settings.outputData.percent && (
                <span className='block text-xs opacity-70'>
                  {formatPercent(subjectAtLevel.stats.atk.percentOfMax)}
                </span>
              )}
            </>
          </LeagueSubjectTableCells.Body>
          <LeagueSubjectTableCells.Body>
            <>
              {subjectAtLevel.stats.def.value.toFixed(2)}

              {settings.outputData.percent && (
                <span className='block text-xs opacity-70'>
                  {formatPercent(subjectAtLevel.stats.def.percentOfMax)}
                </span>
              )}
            </>
          </LeagueSubjectTableCells.Body>
          <LeagueSubjectTableCells.Body>
            <>
              {subjectAtLevel.stats.sta.value}

              {settings.outputData.percent && (
                <span className='block text-xs opacity-70'>
                  {formatPercent(subjectAtLevel.stats.sta.percentOfMax)}
                </span>
              )}
            </>
          </LeagueSubjectTableCells.Body>
        </>
      )}

      {settings.outputData.statProduct && (
        <LeagueSubjectTableCells.Body>
          <>
            <span title={`${subjectAtLevel.product}`}>
              {(subjectAtLevel.product.value / 1000).toFixed(2)}
            </span>

            {settings.outputData.percent && (
              <span className='block text-xs opacity-70'>
                {formatPercent(subjectAtLevel.product.percentOfMax)}
              </span>
            )}
          </>
        </LeagueSubjectTableCells.Body>
      )}

      <LeagueSubjectTableCells.Body right>
        <button
          onClick={() => setDisplayMode('top', levelCap)}
          className='focus:ring-2 p-0.5 ring-blue-600 focus:outline-none rounded mr-2'
          title={`View top ${league.name} IV spreads for ${subject.species.name}, Level ${levelCap.level}, ${floor.name}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 10h16M4 14h16M4 18h16'
            />
          </svg>
        </button>
      </LeagueSubjectTableCells.Body>
    </tr>
  );
};

export default LeagueSubjectAtLevel;
