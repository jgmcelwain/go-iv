import React, { FunctionComponent } from 'react';
import { LEVEL_CAPS } from '../data/reference';

import { useSettings } from '../hooks/useSettings';

import * as LeagueTableCells from './LeagueTableCells';
import LeagueSubjectAtLevel from './LeagueSubjectAtLevel';

const LeagueSubject: FunctionComponent = () => {
  const { settings } = useSettings();

  return (
    <div className='w-full overflow-x-scroll'>
      <table className='w-full border-collapse table-auto'>
        <thead>
          <tr>
            {settings.outputData.rank && (
              <LeagueTableCells.Header>Rank</LeagueTableCells.Header>
            )}

            {settings.outputData.level && (
              <LeagueTableCells.Header>Level</LeagueTableCells.Header>
            )}

            {settings.outputData.cp && (
              <LeagueTableCells.Header>CP</LeagueTableCells.Header>
            )}

            {settings.outputData.stats && (
              <>
                <LeagueTableCells.Header>Atk</LeagueTableCells.Header>
                <LeagueTableCells.Header>Def</LeagueTableCells.Header>
                <LeagueTableCells.Header>Sta</LeagueTableCells.Header>
              </>
            )}

            {settings.outputData.statProduct && (
              <LeagueTableCells.Header>Product</LeagueTableCells.Header>
            )}

            {settings.outputData.statProductPercent && (
              <LeagueTableCells.Header>Product%</LeagueTableCells.Header>
            )}

            <LeagueTableCells.Header />
          </tr>
        </thead>

        <tbody>
          {LEVEL_CAPS.filter(
            (levelCap) => settings.levelCaps[levelCap.level] === true,
          ).map((levelCap) => (
            <LeagueSubjectAtLevel key={levelCap.level} levelCap={levelCap} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueSubject;
