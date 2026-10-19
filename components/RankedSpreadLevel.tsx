import React from 'react';
import { RankedSpread } from '../lib/generateRankedSpreads';
import { formatValue } from '../utils/formatValue';

export function RankedSpreadLevel({ level }: Pick<RankedSpread, 'level'>) {
  return <>{formatValue(level, Number.isInteger(level) ? undefined : 1)}</>;
}
