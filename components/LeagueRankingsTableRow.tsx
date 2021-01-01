import React, {
  FunctionComponent,
  ReactChild,
  useContext,
  useMemo,
} from 'react';

import { Context as SubjectContext } from './SubjectContext';
import { Context as SettingsContext } from './SettingsContext';
import { rankCalculator } from '../lib/rankCalculator';
import { LeagueCPCap, LevelCapNumber } from '../data/reference';

const TableBodyCell: FunctionComponent<{
  children: ReactChild | string[];
}> = ({ children }) => (
  <td className='border-t border-gray-200 px-3 py-4 first:pl-4'>
    <span className='text-xs sm:text-sm flex items-center whitespace-nowrap'>
      {children}
    </span>
  </td>
);

const LeagueRankingsTableRow: FunctionComponent<{
  maxCP: LeagueCPCap;
  maxLevel: LevelCapNumber;
}> = ({ maxCP, maxLevel }) => {
  const { subject } = useContext(SubjectContext);
  const { settings } = useContext(SettingsContext);

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
      {settings.outputData.level && (
        <TableBodyCell>
          <>
            {result.subject.level} / {maxLevel}
          </>
        </TableBodyCell>
      )}

      {settings.outputData.rank && (
        <TableBodyCell>{result.subject.rank}</TableBodyCell>
      )}

      {settings.outputData.cp && (
        <TableBodyCell>{result.subject.cp}</TableBodyCell>
      )}

      {settings.outputData.stats && (
        <TableBodyCell>
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
        </TableBodyCell>
      )}

      {settings.outputData.statProduct && (
        <TableBodyCell>
          <span title={`${result.subject.product}`}>
            {Math.floor(result.subject.product).toLocaleString()}
          </span>
        </TableBodyCell>
      )}

      {settings.outputData.statProductPercent && (
        <TableBodyCell>
          {(result.subject.percent * 100).toFixed(2)}%
        </TableBodyCell>
      )}
    </tr>
  );
};

export default LeagueRankingsTableRow;
