import React, { FunctionComponent } from 'react';
import { LEVEL_CAPS } from '../data/reference';

import { useSettings } from '../hooks/useSettings';

import * as SubjectLeagueTableCells from './SubjectLeagueTableCells';
import SubjectLeagueRankedAtLevelCap from './SubjectLeagueRankedAtLevelCap';

const SubjectLeagueRanks: FunctionComponent = () => {
  const { settings } = useSettings();

  return (
    <div className='w-full overflow-x-scroll'>
      <table className='w-full border-collapse table-auto'>
        <thead>
          <tr>
            {settings.outputData.rank && (
              <SubjectLeagueTableCells.Header>
                Rank
              </SubjectLeagueTableCells.Header>
            )}

            {settings.outputData.level && (
              <SubjectLeagueTableCells.Header>
                Level
              </SubjectLeagueTableCells.Header>
            )}

            {settings.outputData.cp && (
              <SubjectLeagueTableCells.Header>
                CP
              </SubjectLeagueTableCells.Header>
            )}

            {settings.outputData.stats && (
              <>
                <SubjectLeagueTableCells.Header>
                  Atk
                </SubjectLeagueTableCells.Header>
                <SubjectLeagueTableCells.Header>
                  Def
                </SubjectLeagueTableCells.Header>
                <SubjectLeagueTableCells.Header>
                  Sta
                </SubjectLeagueTableCells.Header>
              </>
            )}

            {settings.outputData.statProduct && (
              <SubjectLeagueTableCells.Header>
                Product
              </SubjectLeagueTableCells.Header>
            )}

            <SubjectLeagueTableCells.Header />
          </tr>
        </thead>

        <tbody>
          {LEVEL_CAPS.filter(
            (levelCap) => settings.levelCaps[levelCap.level] === true,
          ).map((levelCap) => (
            <SubjectLeagueRankedAtLevelCap
              key={levelCap.level}
              levelCap={levelCap}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectLeagueRanks;
