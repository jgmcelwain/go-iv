import React, { FC } from 'react';

import { useRankedSpreads } from '../hooks/useRankedSpreads';
import { useLeague } from '../hooks/useLeague';
import { useCandidate } from '../hooks/useCandidate';

import { downloadFile } from '../utils/downloadFile';
import { DownloadIcon } from '@heroicons/react/solid';
import { xlCount } from '../lib/xlCount';

const CandidateLeagueTopSpreadsAtLevelCapDownload: FC = () => {
  const { candidate } = useCandidate();
  const { league, inspectedLevelCap } = useLeague();
  const rankedSpreads = useRankedSpreads();

  if (inspectedLevelCap === null) {
    throw new Error('A level cap must be inspected to export');
  }

  function exportToCSV() {
    if (inspectedLevelCap === null) {
      throw new Error('A level cap must be inspected to export');
    }

    const fileName = `${candidate.species.id}-${league.cp}-${inspectedLevelCap.level}-${candidate.floor}-${candidate.rankingMetric}.csv`;

    const csvContent = rankedSpreads[inspectedLevelCap.level].reduce(
      (output, spread) =>
        output.concat(
          `\n${spread.rank},${spread.ivs.atk},${spread.ivs.def},${
            spread.ivs.sta
          },${spread.level},${spread.cp},${xlCount(spread.level)},${
            spread.stats.atk.value
          },${spread.stats.def.value},${spread.stats.sta.value},${
            spread.product.value
          },${spread.bulkProduct.value}`,
        ),
      'Rank,Atk IV,Def IV,Sta IV,Level,CP,XL,Attack,Defense,Stamina,Stat Product,Bulk Product',
    );

    downloadFile(fileName, 'text/csv', csvContent);
  }

  return (
    <footer className='flex items-center justify-center w-full py-2 bg-white border-t border-gray-200'>
      <button
        onClick={exportToCSV}
        className='flex items-center justify-start p-1 text-gray-700 rounded-full hover:text-black focus-visible-ring sm:rounded'
      >
        <span className='mr-2 text-xs font-semibold'>
          Export All {rankedSpreads[inspectedLevelCap.level].length} to CSV
        </span>

        <DownloadIcon className='w-4 h-4' />
      </button>
    </footer>
  );
};

export default CandidateLeagueTopSpreadsAtLevelCapDownload;
