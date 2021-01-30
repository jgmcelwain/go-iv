import React, { FunctionComponent } from 'react';
import { LEVEL_CAPS } from '../data/reference';

import { useSettings } from '../hooks/useSettings';

import * as LeagueSubjectTableCells from './LeagueSubjectTableCells';
import LeagueSubjectRankedAtLevel from './LeagueSubjectRankedAtLevel';

const LeagueSubject: FunctionComponent = () => {
  const { settings } = useSettings();

  return (
    <div className='w-full overflow-x-scroll'>
      <table className='w-full border-collapse table-auto'>
        <thead>
          <tr>
            {settings.outputData.rank && (
              <LeagueSubjectTableCells.Header>
                Rank
              </LeagueSubjectTableCells.Header>
            )}

            {settings.outputData.level && (
              <LeagueSubjectTableCells.Header>
                Level
              </LeagueSubjectTableCells.Header>
            )}

            {settings.outputData.cp && (
              <LeagueSubjectTableCells.Header>
                CP
              </LeagueSubjectTableCells.Header>
            )}

            {settings.outputData.stats && (
              <>
                <LeagueSubjectTableCells.Header>
                  Atk
                </LeagueSubjectTableCells.Header>
                <LeagueSubjectTableCells.Header>
                  Def
                </LeagueSubjectTableCells.Header>
                <LeagueSubjectTableCells.Header>
                  Sta
                </LeagueSubjectTableCells.Header>
              </>
            )}

            {settings.outputData.statProduct && (
              <LeagueSubjectTableCells.Header>
                Product
              </LeagueSubjectTableCells.Header>
            )}

            <LeagueSubjectTableCells.Header />
          </tr>
        </thead>

        <tbody>
          {LEVEL_CAPS.filter(
            (levelCap) => settings.levelCaps[levelCap.level] === true,
          ).map((levelCap) => (
            <LeagueSubjectRankedAtLevel
              key={levelCap.level}
              levelCap={levelCap}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueSubject;
