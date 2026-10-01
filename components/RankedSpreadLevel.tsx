import React from 'react';
import { RankedSpread } from '../lib/generateRankedSpreads';
import { formatValue } from '../utils/formatValue';

export function RankedSpreadLevel({
  level,
  levelReduced,
}: Pick<RankedSpread, 'level' | 'levelReduced'>) {
  const formattedLevel = formatValue(
    level,
    Number.isInteger(level) ? undefined : 1,
  );
  return levelReduced ? (
    <abbr
      title='Levels are rounded down to the nearest integer when an form change occurs during a battle'
      className='cursor-help underline decoration-dotted underline-offset-2'
    >
      {formattedLevel}*
    </abbr>
  ) : (
    <>{formattedLevel}</>
  );
}
