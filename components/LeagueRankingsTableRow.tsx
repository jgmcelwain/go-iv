import React, {
  FunctionComponent,
  ReactChild,
  useContext,
  useMemo,
} from 'react';

import { Context as SubjectContext } from './SubjectContext';
import { Context as SettingsContext } from './SettingsContext';
import { generateRankedSpreads } from '../lib/generateRankedSpreads';
import { LeagueCPCap, LevelCapNumber } from '../data/reference';
import { SubjectActionTypes } from '../hooks/useSubject';

const TableBodyCell: FunctionComponent<{
  children?: ReactChild | string[];
}> = ({ children }) => (
  <td className='border-t border-gray-200 px-3 py-4 first:pl-4'>
    {children && (
      <span className='text-xs sm:text-sm flex items-center whitespace-nowrap'>
        {children}
      </span>
    )}
  </td>
);

const LeagueRankingsTableRow: FunctionComponent<{
  maxCP: LeagueCPCap;
  maxLevel: LevelCapNumber;
}> = ({ maxCP, maxLevel }) => {
  const { subject, dispatch } = useContext(SubjectContext);
  const { settings } = useContext(SettingsContext);

  const rankedSpreads = useMemo(
    () =>
      generateRankedSpreads(subject.species, subject.floor, maxCP, maxLevel),
    [subject.species, subject.floor],
  );

  const result = useMemo(
    () =>
      rankedSpreads.find(
        (spread) =>
          spread.ivs.atk === subject.ivs.atk &&
          spread.ivs.def === subject.ivs.def &&
          spread.ivs.sta === subject.ivs.sta,
      ),
    [rankedSpreads, subject.ivs],
  );

  const bg = useMemo(() => {
    if (result === null) return '';

    if (result.percent === 1) {
      return 'bg-purple-50 text-purple-600';
    } else if (result.percent >= 0.98) {
      return 'bg-green-50 text-green-600';
    } else if (result.percent >= 0.95) {
      return 'bg-yellow-50 text-yellow-600';
    } else if (result.percent >= 0.9) {
      return 'bg-orange-50 text-orange-600';
    } else {
      return 'bg-red-50 text-red-600';
    }
  }, [result]);

  if (subject === null) return null;

  return (
    <tr className={bg}>
      {settings.outputData.level && (
        <TableBodyCell>
          <>
            {result.level} / {maxLevel}
          </>
        </TableBodyCell>
      )}

      {settings.outputData.rank && <TableBodyCell>{result.rank}</TableBodyCell>}

      {settings.outputData.cp && <TableBodyCell>{result.cp}</TableBodyCell>}

      {settings.outputData.stats && (
        <TableBodyCell>
          <>
            {result.stats.atk.toFixed(2)}
            <span className='transform scale-75 inline-block mx-1 font-semibold'>
              {' '}
              /{' '}
            </span>
            {result.stats.def.toFixed(2)}
            <span className='transform scale-75 inline-block mx-1 font-semibold'>
              {' '}
              /{' '}
            </span>
            {result.stats.sta}
          </>
        </TableBodyCell>
      )}

      {settings.outputData.statProduct && (
        <TableBodyCell>
          <span title={`${result.product}`}>
            {(result.product / 1000).toFixed(2)}
          </span>
        </TableBodyCell>
      )}

      {settings.outputData.statProductPercent && (
        <TableBodyCell>{(result.percent * 100).toFixed(2)}%</TableBodyCell>
      )}

      {settings.outputData.maximizeButton && (
        <TableBodyCell>
          <button
            onClick={() =>
              dispatch({
                type: SubjectActionTypes.IVs,
                payload: rankedSpreads[0].ivs,
              })
            }
            className='focus:ring-2 ring-blue-600 focus:outline-none rounded-full'
            title={`Maximize for L${maxLevel} @ ${maxCP}CP`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z'
              />
            </svg>
          </button>
        </TableBodyCell>
      )}
    </tr>
  );
};

export default LeagueRankingsTableRow;
