import React, { FunctionComponent, ReactChild } from 'react';
import { League, LEVEL_CAPS } from '../data/reference';

import LeagueRankingLevel from './LeagueRankingLevel';

const THeadCell: FunctionComponent<{
  children: ReactChild | string[];
  canHide?: boolean;
}> = ({ children, canHide }) => (
  <th
    className={`text-left bg-gray-100 border-b border-gray-200 p-3 first:pl-4 text-gray-500 font-semibold tracking-wider uppercase font-title text-xs ${
      canHide === true && 'hidden sm:table-cell'
    }`}
  >
    <span>{children}</span>
  </th>
);

const LeagueSubjectRanking: FunctionComponent<{ league: League }> = ({
  league,
}) => {
  return (
    <table className='w-full border-collapse table-auto'>
      <thead>
        <tr>
          <THeadCell>Cap</THeadCell>

          <THeadCell>Rank</THeadCell>

          <THeadCell>CP</THeadCell>

          <THeadCell canHide={true}>Level</THeadCell>

          <THeadCell>Atk / Def / Sta</THeadCell>

          <THeadCell canHide={true}>Product</THeadCell>
        </tr>
      </thead>

      <tbody>
        {LEVEL_CAPS.map((levelCap) => (
          <LeagueRankingLevel
            key={levelCap}
            maxLevel={levelCap}
            maxCP={league.cp}
          />
        ))}
      </tbody>
    </table>
  );
};

export default LeagueSubjectRanking;
