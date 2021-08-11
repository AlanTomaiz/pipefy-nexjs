import { useMemo } from 'react';
import { EntryId } from './types';

let count = 0;

export default function useUniqueId(
  prefix: string,
  separator = '-',
): EntryId | string {
  return useMemo(() => `${count++}${separator}${prefix}`, [prefix, separator]);
}
