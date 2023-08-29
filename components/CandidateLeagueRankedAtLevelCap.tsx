import React, { FC } from 'react';

import { getRankedSpreadColors } from '../utils/getRankColors';

import { xlCount } from '../lib/xlCount';
import { useSettings } from '../hooks/useSettings';
import { useCandidate } from '../hooks/useCandidate';
import { useLeague } from '../hooks/useLeague';
import { useRankedSpreads } from '../hooks/useRankedSpreads';
import { formatValue } from '../utils/formatValue';

import { IV_FLOORS } from '../data/ivFloor';
import { LevelCap } from '../data/levelCap';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueTableCellsPercentOfMax from './CandidateLeagueTableCellsPercentOfMax';
import { ViewListIcon } from '@heroicons/react/solid';

const CandidateLeagueRankedAtLevelCap: FC<{
  levelCap: LevelCap;
}> = ({ levelCap }) => {
  const { league, setInspectedLevelCap } = useLeague();
  const { candidate } = useCandidate();
  const { settings } = useSettings();
  const rankedSpreads = useRankedSpreads();

  const candidateAtLevel = rankedSpreads[levelCap.level].find(
    (spread) =>
      spread.ivs.atk === candidate.ivs.atk &&
      spread.ivs.def === candidate.ivs.def &&
      spread.ivs.sta === candidate.ivs.sta,
  );

  const floor = IV_FLOORS.find((ivFloor) => ivFloor.value === candidate.floor);
  if (floor === undefined) {
    throw new Error('No matching IV floor could be found.');
  }

  const colors = getRankedSpreadColors(
    candidateAtLevel,
    candidate.rankingMetric,
  );

  const viewAllSpreadButton = (
    <button
      onClick={() => setInspectedLevelCap(levelCap)}
      className='focus-visible-ring p-0.5 rounded mr-2'
      title={`View top ${league.name} IV spreads for ${candidate.species.name}, Level ${candidate.minimumLevel}-${levelCap.level}, ${floor.name}`}
    >
      <ViewListIcon className='w-4 h-4' />
    </button>
  );

  if (candidateAtLevel === undefined) {
    const columnCount = [
      settings.outputData.cp,
      settings.outputData.statProduct,
      settings.outputData.stats,
      settings.outputData.stats,
      settings.outputData.stats,
      settings.outputData.bulkProduct,
    ].filter(Boolean).length;

    return (
      <tr
        onClick={() => setInspectedLevelCap(levelCap)}
        className={`${colors.background} ${colors.text} cursor-pointer`}
      >
        {settings.outputData.rank && (
          <CandidateLeagueTableCells.Body>?</CandidateLeagueTableCells.Body>
        )}

        {settings.outputData.level && (
          <CandidateLeagueTableCells.Body>
            <>
              ?<span className='text-xs'> /{levelCap.level}</span>
            </>
          </CandidateLeagueTableCells.Body>
        )}

        <CandidateLeagueTableCells.Body colSpan={columnCount}>
          <p className='text-sm'>
            Could not find a ranked spread matching the candidate's IVs
          </p>
        </CandidateLeagueTableCells.Body>

        <CandidateLeagueTableCells.Body right>
          {viewAllSpreadButton}
        </CandidateLeagueTableCells.Body>
      </tr>
    );
  }

  return (
    <tr
      onClick={() => setInspectedLevelCap(levelCap)}
      className={`${colors.background} ${colors.text} cursor-pointer`}
    >
      {settings.outputData.rank && (
        <CandidateLeagueTableCells.Body>
          {candidateAtLevel.rank}
        </CandidateLeagueTableCells.Body>
      )}

      {settings.outputData.cp && (
        <CandidateLeagueTableCells.Body>
          {candidateAtLevel.cp}
        </CandidateLeagueTableCells.Body>
      )}

      {settings.outputData.level && (
        <CandidateLeagueTableCells.Body>
          <>
            {formatValue(
              candidateAtLevel.level,
              Math.floor(candidateAtLevel.level) === candidateAtLevel.level
                ? undefined
                : 1,
            )}
            <span className='text-xs'> /{levelCap.level}</span>
          </>
        </CandidateLeagueTableCells.Body>
      )}

      {settings.outputData.xlCandy && (
        <CandidateLeagueTableCells.Body>
          {xlCount(candidateAtLevel.level)}
        </CandidateLeagueTableCells.Body>
      )}

      {settings.outputData.statProduct && (
        <CandidateLeagueTableCells.Body>
          <>
            <span title={candidateAtLevel.product.value.toString()}>
              {formatValue(candidateAtLevel.product.value, 2)}
            </span>

            <CandidateLeagueTableCellsPercentOfMax
              value={candidateAtLevel.product.percentOfMax}
            />
          </>
        </CandidateLeagueTableCells.Body>
      )}

      {settings.outputData.stats && (
        <>
          <CandidateLeagueTableCells.Body>
            <span title={candidateAtLevel.stats.atk.value.toString()}>
              {formatValue(candidateAtLevel.stats.atk.value, 2)}
            </span>

            <CandidateLeagueTableCellsPercentOfMax
              value={candidateAtLevel.stats.atk.percentOfMax}
            />
          </CandidateLeagueTableCells.Body>
          <CandidateLeagueTableCells.Body>
            <span title={candidateAtLevel.stats.def.value.toString()}>
              {formatValue(candidateAtLevel.stats.def.value, 2)}
            </span>

            <CandidateLeagueTableCellsPercentOfMax
              value={candidateAtLevel.stats.def.percentOfMax}
            />
          </CandidateLeagueTableCells.Body>
          <CandidateLeagueTableCells.Body>
            <span>{formatValue(candidateAtLevel.stats.sta.value)}</span>

            <CandidateLeagueTableCellsPercentOfMax
              value={candidateAtLevel.stats.sta.percentOfMax}
            />
          </CandidateLeagueTableCells.Body>
        </>
      )}

      {settings.outputData.bulkProduct && (
        <CandidateLeagueTableCells.Body>
          <>
            <span title={candidateAtLevel.bulkProduct.value.toString()}>
              {formatValue(candidateAtLevel.bulkProduct.value, 2)}
            </span>

            <CandidateLeagueTableCellsPercentOfMax
              value={candidateAtLevel.bulkProduct.percentOfMax}
            />
          </>
        </CandidateLeagueTableCells.Body>
      )}

      <CandidateLeagueTableCells.Body right>
        {viewAllSpreadButton}
      </CandidateLeagueTableCells.Body>
    </tr>
  );
};

export default CandidateLeagueRankedAtLevelCap;
