import React, { FC, useMemo } from 'react';

import { getRankedSpreadColors } from '../utils/getRankColors';

import { useSettings } from '../hooks/useSettings';
import { useCandidate } from '../hooks/useCandidate';
import { useLeague } from '../hooks/useLeague';
import { useRankedSpreads } from '../hooks/useRankedSpreads';

import { IV_FLOORS } from '../data/ivFloor';
import { LevelCap } from '../data/levelCap';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueTableCellsPercentOfMax from './CandidateLeagueTableCellsPercentOfMax';
import CandidateLeagueTableCellShadowStat from './CandidateLeagueTableCellShadowStat';
import { ViewListIcon } from '@heroicons/react/solid';

const CandidateLeagueRankedAtLevelCap: FC<{
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

  const colors = useMemo(
    () => getRankedSpreadColors(candidateAtLevel, candidate.rankingMetric),
    [candidateAtLevel],
  );

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
              <CandidateLeagueTableCellShadowStat
                value={candidateAtLevel.stats.atk.value}
                stat='atk'
                shadow={candidate.shadow}
              />

              <CandidateLeagueTableCellsPercentOfMax
                value={candidateAtLevel.stats.atk.percentOfMax}
              />
            </>
          </CandidateLeagueTableCells.Body>
          <CandidateLeagueTableCells.Body>
            <>
              <CandidateLeagueTableCellShadowStat
                value={candidateAtLevel.stats.def.value}
                stat='def'
                shadow={candidate.shadow}
              />

              <CandidateLeagueTableCellsPercentOfMax
                value={candidateAtLevel.stats.def.percentOfMax}
              />
            </>
          </CandidateLeagueTableCells.Body>
          <CandidateLeagueTableCells.Body>
            <>
              <span className='block'>{candidateAtLevel.stats.sta.value}</span>

              <CandidateLeagueTableCellsPercentOfMax
                value={candidateAtLevel.stats.sta.percentOfMax}
              />
            </>
          </CandidateLeagueTableCells.Body>
        </>
      )}

      {settings.outputData.statProduct && (
        <CandidateLeagueTableCells.Body>
          <>
            <span>{(candidateAtLevel.product.value / 1000).toFixed(2)}</span>

            <CandidateLeagueTableCellsPercentOfMax
              value={candidateAtLevel.product.percentOfMax}
            />
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
