import React, { FunctionComponent, useContext } from 'react';
import { League, LEVEL_CAPS } from '../data/reference';

import { Context as SettingsContext } from './SettingsContext';

import * as LeagueTableCells from './LeagueTableCells';
import LeagueSubjectAtLevel from './LeagueSubjectAtLevel';

const LeagueSubject: FunctionComponent<{ league: League }> = ({ league }) => {
  const { settings } = useContext(SettingsContext);

  return (
    <table className='w-full border-collapse table-auto'>
      <thead>
        <tr>
          {settings.outputData.level && (
            <LeagueTableCells.Header>Level</LeagueTableCells.Header>
          )}

          {settings.outputData.rank && (
            <LeagueTableCells.Header>Rank</LeagueTableCells.Header>
          )}

          {settings.outputData.cp && (
            <LeagueTableCells.Header>CP</LeagueTableCells.Header>
          )}

          {settings.outputData.stats && (
            <LeagueTableCells.Header>Atk / Def / Sta</LeagueTableCells.Header>
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
          <LeagueSubjectAtLevel
            key={levelCap.level}
            levelCap={levelCap}
            league={league}
          />
        ))}
      </tbody>
    </table>
  );
};

export default LeagueSubject;
