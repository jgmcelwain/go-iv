import React, { FC } from 'react';

import {
  LEVEL_CAPS,
  MEGA_LEVEL_CAP_BASE,
  MegaLevelCapNumber,
  SettableLevelCapNumber,
} from '../data/levelCap';

import { useLeague } from '../hooks/useLeague';
import { useSettings } from '../hooks/useSettings';
import { useCandidate } from '../hooks/useCandidate';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueRankedAtLevelCap from './CandidateLeagueRankedAtLevelCap';

const CandidateLeagueRanked: FC = () => {
  const { league } = useLeague();
  const { candidate } = useCandidate();
  const { settings } = useSettings();

  return (
    <section className='w-full overflow-x-scroll'>
      <table className='w-full border-collapse table-fixed'>
        <thead>
          <tr>
            {settings.outputData.rank && (
              <CandidateLeagueTableCells.Header widthClass='w-16'>
                Rank
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.cp && (
              <CandidateLeagueTableCells.Header widthClass='w-16'>
                CP
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.level && (
              <CandidateLeagueTableCells.Header>
                Level
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.xlCandy && (
              <CandidateLeagueTableCells.Header widthClass='w-16'>
                XL
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.statProduct && (
              <CandidateLeagueTableCells.Header widthClass='w-28'>
                Stat Prod
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.stats && (
              <>
                <CandidateLeagueTableCells.Header>
                  Atk
                </CandidateLeagueTableCells.Header>
                <CandidateLeagueTableCells.Header>
                  Def
                </CandidateLeagueTableCells.Header>
                <CandidateLeagueTableCells.Header>
                  Sta
                </CandidateLeagueTableCells.Header>
              </>
            )}

            {settings.outputData.bulkProduct && (
              <CandidateLeagueTableCells.Header widthClass='w-28'>
                Bulk Prod
              </CandidateLeagueTableCells.Header>
            )}

            <CandidateLeagueTableCells.Header />
          </tr>
        </thead>

        <tbody>
          {LEVEL_CAPS.filter((levelCap) => {
            if (levelCap.level in MEGA_LEVEL_CAP_BASE) {
              const baseCap =
                MEGA_LEVEL_CAP_BASE[levelCap.level as MegaLevelCapNumber];
              return (
                settings.showMegaLevelCaps &&
                league.cp === 10000 &&
                candidate.species.name.startsWith('Mega ') &&
                settings.levelCaps[baseCap] === true
              );
            }
            return (
              settings.levelCaps[levelCap.level as SettableLevelCapNumber] ===
              true
            );
          }).map((levelCap) => (
            <CandidateLeagueRankedAtLevelCap
              key={`${candidate.species.id}_${levelCap.level}`}
              levelCap={levelCap}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CandidateLeagueRanked;
