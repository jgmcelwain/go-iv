import React, { FunctionComponent, useMemo } from 'react';

import { getRankedSpreadColors } from '../utils/getRankColors';
import { formatPercent } from '../utils/formatPercent';

import { useSettings } from '../hooks/useSettings';
import { useCandidate } from '../hooks/useCandidate';
import { useLeague } from '../hooks/useLeague';
import { useRankedSpreads } from '../hooks/useRankedSpreads';

import { IV_FLOORS } from '../data/ivFloor';
import { LevelCap } from '../data/levelCap';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import { ViewListIcon } from '@heroicons/react/solid';

const CandidateLeagueRankedAtLevelCap: FunctionComponent<{
  levelCap: LevelCap;
}> = ({ levelCap }) => {
  const { league, setDisplayMode } = useLeague();
  const { candidate } = useCandidate();
  const { settings } = useSettings();
  const rankedSpreads = useRankedSpreads();

  const candidateAtLevel = useMemo(
    () =>
      rankedSpreads[levelCap.level].find(
        (spread) =>
          spread.ivs.atk === candidate.ivs.atk &&
          spread.ivs.def === candidate.ivs.def &&
          spread.ivs.sta === candidate.ivs.sta,
      ) ?? null,
    [rankedSpreads[levelCap.level], candidate.ivs],
  );

  const floor = useMemo(
    () => IV_FLOORS.find((ivFloor) => ivFloor.value === candidate.floor),
    [candidate.floor],
  );

  const colors = useMemo(() => getRankedSpreadColors(candidateAtLevel), [
    candidateAtLevel,
  ]);

  if (candidateAtLevel === null) return null;

  return (
    <tr
      onClick={() => setDisplayMode('top', levelCap)}
      className={`${colors.background} ${colors.text} cursor-pointer`}
    >
      {settings.outputData.rank && (
        <CandidateLeagueTableCells.Body>
          {candidateAtLevel.rank}
        </CandidateLeagueTableCells.Body>
      )}

      {settings.outputData.level && (
        <CandidateLeagueTableCells.Body>
          <>
            {candidateAtLevel.level}
            <span className='text-xs'> / {levelCap.level}</span>
          </>
        </CandidateLeagueTableCells.Body>
      )}

      {settings.outputData.cp && (
        <CandidateLeagueTableCells.Body>
          {candidateAtLevel.cp}
        </CandidateLeagueTableCells.Body>
      )}

      {settings.outputData.stats && (
        <>
          <CandidateLeagueTableCells.Body>
            <>
              {candidateAtLevel.stats.atk.value.toFixed(2)}

              {settings.outputData.percent && (
                <span className='block text-xs opacity-90'>
                  {formatPercent(candidateAtLevel.stats.atk.percentOfMax)}
                </span>
              )}
            </>
          </CandidateLeagueTableCells.Body>
          <CandidateLeagueTableCells.Body>
            <>
              {candidateAtLevel.stats.def.value.toFixed(2)}

              {settings.outputData.percent && (
                <span className='block text-xs opacity-90'>
                  {formatPercent(candidateAtLevel.stats.def.percentOfMax)}
                </span>
              )}
            </>
          </CandidateLeagueTableCells.Body>
          <CandidateLeagueTableCells.Body>
            <>
              {candidateAtLevel.stats.sta.value}

              {settings.outputData.percent && (
                <span className='block text-xs opacity-90'>
                  {formatPercent(candidateAtLevel.stats.sta.percentOfMax)}
                </span>
              )}
            </>
          </CandidateLeagueTableCells.Body>
        </>
      )}

      {settings.outputData.statProduct && (
        <CandidateLeagueTableCells.Body>
          <>
            <span title={`${candidateAtLevel.product.value}`}>
              {(candidateAtLevel.product.value / 1000).toFixed(2)}
            </span>

            {settings.outputData.percent && (
              <span className='block text-xs opacity-90'>
                {formatPercent(candidateAtLevel.product.percentOfMax)}
              </span>
            )}
          </>
        </CandidateLeagueTableCells.Body>
      )}

      <CandidateLeagueTableCells.Body right>
        <button
          onClick={() => setDisplayMode('top', levelCap)}
          className='focus-visible-ring p-0.5 rounded mr-2'
          title={`View top ${league.name} IV spreads for ${candidate.species.name}, Level ${levelCap.level}, ${floor.name}`}
        >
          <ViewListIcon className='w-4 h-4' />
        </button>
      </CandidateLeagueTableCells.Body>
    </tr>
  );
};

export default CandidateLeagueRankedAtLevelCap;
