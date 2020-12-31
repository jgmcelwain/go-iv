import React, { FunctionComponent, ReactChild } from 'react';
import { League, LEVEL_CAPS } from '../data/reference';

import LeagueRankingLevel from './LeagueRankingLevel';

const THeadCell: FunctionComponent<{
  children: ReactChild | string[];
}> = ({ children }) => (
  <th className='text-left bg-gray-100 py-2 px-3 first:pl-4'>
    <span className='text-gray-500 font-semibold tracking-wider uppercase font-title text-xs'>
      {children}
    </span>
  </th>
);

const LeagueSubjectRanking: FunctionComponent<{ league: League }> = ({
  league,
}) => {
  return (
    <table className='w-full border-collapse table-auto'>
      <thead>
        <tr>
          <THeadCell>Level</THeadCell>

          <THeadCell>Rank</THeadCell>

          <THeadCell>CP</THeadCell>

          <THeadCell>Atk / Def / Sta</THeadCell>

          <THeadCell>Product</THeadCell>
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
