import React, { FunctionComponent } from 'react';

import { useRankedSpreads } from '../hooks/useRankedSpreads';
import { useLeague } from '../hooks/useLeague';
import { useSubject } from '../hooks/useSubject';

import { downloadFile } from '../utils/downloadFile';

const SubjectLeagueTopSpreadsAtLevelCapDownload: FunctionComponent = () => {
  const { subject } = useSubject();
  const { league, inspectedLevelCap } = useLeague();
  const rankedSpreads = useRankedSpreads();

  function exportToCSV() {
    const fileName = `${subject.species.id}-${league.cp}-${inspectedLevelCap.level}-${subject.floor}.csv`;

    const csvContent = rankedSpreads[inspectedLevelCap.level].reduce(
      (output, spread) =>
        output.concat(
          `\n${spread.rank},${spread.ivs.atk},${spread.ivs.def},${spread.ivs.sta},${spread.level},${spread.cp},${spread.stats.atk.value},${spread.stats.def.value},${spread.stats.sta.value},${spread.product.value}`,
        ),
      'Rank,Atk IV,Def IV,Sta IV,Level,CP,Attack,Defense,Stamina,Product',
    );

    downloadFile(fileName, 'text/csv', csvContent);
  }

  return (
    <div className='w-full py-2 flex justify-center items-center bg-white border-t border-gray-200'>
      <button
        onClick={exportToCSV}
        className='z-10 text-gray-700 hover:text-black focus-ring p-1 rounded-full sm:rounded flex justify-start items-center'
      >
        <span className='mr-2 text-xs font-semibold'>
          Export All {rankedSpreads[inspectedLevelCap.level].length} to CSV
        </span>

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
            d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
          />
        </svg>
      </button>
    </div>
  );
};

export default SubjectLeagueTopSpreadsAtLevelCapDownload;
