import React, {
  FunctionComponent,
  ReactChild,
  useContext,
  useMemo,
} from 'react';

import { SubjectContext } from './SubjectContext';
import { rankCalculator } from '../lib/rankCalculator';
import { LeagueCPCap, PowerUpLevelCap } from '../data/reference';

const TBodyCell: FunctionComponent<{
  children: ReactChild | string[];
  canHide?: boolean;
}> = ({ children, canHide }) => (
  <td
    className={`border-t border-gray-200  ${
      canHide === true && 'hidden sm:table-cell'
    } px-3 py-4 first:pl-4 `}
  >
    <span className='text-xs flex items-center'>{children}</span>
  </td>
);

const LeagueSubjectRankingLevel: FunctionComponent<{
  maxCP: LeagueCPCap;
  maxLevel: PowerUpLevelCap;
}> = ({ maxCP, maxLevel }) => {
  const { subject } = useContext(SubjectContext);

  const result = useMemo(() => rankCalculator(subject, maxCP, maxLevel), [
    subject,
  ]);

  const bg = useMemo(() => {
    if (result.subject === null) return '';

    if (result.subject.percent === 1) {
      return 'bg-purple-50 text-purple-600';
    } else if (result.subject.percent >= 0.98) {
      return 'bg-green-50 text-green-600';
    } else if (result.subject.percent >= 0.95) {
      return 'bg-yellow-50 text-yellow-600';
    } else if (result.subject.percent >= 0.9) {
      return 'bg-orange-50 text-orange-600';
    } else {
      return 'bg-red-50 text-red-600';
    }
  }, [subject]);

  if (subject === null) return null;

  return (
    <tr className={bg}>
      <TBodyCell>{maxLevel}</TBodyCell>

      <TBodyCell>{result.subject.rank}</TBodyCell>

      <TBodyCell>{result.subject.cp}</TBodyCell>

      <TBodyCell canHide={true}>{result.subject.level}</TBodyCell>

      <TBodyCell>
        <>
          {result.subject.stats.atk.toFixed(2)}
          <span className='transform scale-75 inline-block mx-1 font-semibold'>
            {' '}
            /{' '}
          </span>
          {result.subject.stats.def.toFixed(2)}
          <span className='transform scale-75 inline-block mx-1 font-semibold'>
            {' '}
            /{' '}
          </span>
          {result.subject.stats.sta}
        </>
      </TBodyCell>

      <TBodyCell canHide={true}>
        {(result.subject.percent * 100).toFixed(2)}%
      </TBodyCell>
    </tr>
  );
};

export default LeagueSubjectRankingLevel;
