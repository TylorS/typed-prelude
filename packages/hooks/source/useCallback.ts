import { Arity1, memoize } from '@typed/lambda'
import { useMemo } from './useMemo'

export function* useCallback<A, B>(fn: Arity1<A, B>, deps: ReadonlyArray<any>) {
  return yield* useMemo(_ => memoize(fn), deps)
}
