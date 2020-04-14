import { Arity1, memoize } from '@typed/lambda'
import { HookEffects } from './types'
import { useMemo } from './useMemo'

export function* useCallback<A, B>(
  fn: Arity1<A, B>,
  deps: ReadonlyArray<any>,
): HookEffects<unknown, Arity1<A, B>> {
  return yield* useMemo(_ => memoize(fn), deps)
}
