import { useMemo } from 'react';

let count = 0;

export default function useUniqueId(prefix: string, separator = '::') {
  return useMemo(
    () => `${count++}${separator}${prefix}${separator}`,
    [prefix, separator],
  );
}
