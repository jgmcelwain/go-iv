import React, { FunctionComponent, ReactChild, useContext } from 'react';
import { League, LEVEL_CAPS } from '../data/reference';

import LeagueRankingsTableRow from './LeagueRankingsTableRow';
import { Context as SettingsContext } from './SettingsContext';

const TableHeaderCell: FunctionComponent<{
  children?: ReactChild | string[];
}> = ({ children }) => (
  <th className='text-left bg-gray-100 py-2 px-3 first:pl-4'>
    {children && (
      <span className='text-gray-500 font-semibold tracking-wider uppercase font-title text-xs'>
        {children}
      </span>
    )}
  </th>
);

const LeagueRankingsTable: FunctionComponent<{ league: League }> = ({
  league,
}) => {
  const { settings } = useContext(SettingsContext);

  return (
    <table className='w-full border-collapse table-auto'>
      <thead>
        <tr>
          {settings.outputData.level && (
            <TableHeaderCell>Level</TableHeaderCell>
          )}

          {settings.outputData.rank && <TableHeaderCell>Rank</TableHeaderCell>}

          {settings.outputData.cp && <TableHeaderCell>CP</TableHeaderCell>}

          {settings.outputData.stats && (
            <TableHeaderCell>Atk / Def / Sta</TableHeaderCell>
          )}

          {settings.outputData.statProduct && (
            <TableHeaderCell>Product</TableHeaderCell>
          )}

          {settings.outputData.statProductPercent && (
            <TableHeaderCell>Product%</TableHeaderCell>
          )}

          {settings.outputData.maximizeButton && <TableHeaderCell />}
        </tr>
      </thead>

      <tbody>
        {LEVEL_CAPS.filter(
          (levelCap) => settings.levelCaps[levelCap.level] === true,
        ).map((levelCap) => (
          <LeagueRankingsTableRow
            key={levelCap.level}
            maxLevel={levelCap.level}
            maxCP={league.cp}
          />
        ))}
      </tbody>
    </table>
  );
};

export default LeagueRankingsTable;
