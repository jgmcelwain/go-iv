import React, { FunctionComponent } from 'react';

import { LEVEL_CAPS } from '../data/levelCap';

import { useSettings } from '../hooks/useSettings';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueRankedAtLevelCap from './CandidateLeagueRankedAtLevelCap';

const CandidateLeagueRanks: FunctionComponent = () => {
  const { settings } = useSettings();

  return (
    <section className='w-full overflow-x-scroll'>
      <table className='w-full border-collapse table-auto'>
        <thead>
          <tr>
            {settings.outputData.rank && (
              <CandidateLeagueTableCells.Header>
                Rank
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.level && (
              <CandidateLeagueTableCells.Header>
                Level
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.cp && (
              <CandidateLeagueTableCells.Header>
                CP
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

            {settings.outputData.statProduct && (
              <CandidateLeagueTableCells.Header>
                Product
              </CandidateLeagueTableCells.Header>
            )}

            <CandidateLeagueTableCells.Header />
          </tr>
        </thead>

        <tbody>
          {LEVEL_CAPS.filter(
            (levelCap) => settings.levelCaps[levelCap.level] === true,
          ).map((levelCap) => (
            <CandidateLeagueRankedAtLevelCap
              key={levelCap.level}
              levelCap={levelCap}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CandidateLeagueRanks;
