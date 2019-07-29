import { Fn } from '@typed/lambda'
import { useMemo } from './useMemo'

export const useCallback = <A extends readonly any[], B>(
  fn: Fn<A, B>,
  deps: ReadonlyArray<any> = [],
) => useMemo<readonly any[], Fn<A, B>>(() => fn, deps)
