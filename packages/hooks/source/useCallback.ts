import { Effects } from '@typed/effects'
import { Arity1, memoize } from '@typed/lambda'
import { HookEnv } from './HookEnvironment'
import { useMemo } from './useMemo'

export function useCallback<A, B>(
  fn: Arity1<A, B>,
  deps: ReadonlyArray<any>,
): Effects<HookEnv, Arity1<A, B>> {
  return useMemo(_ => memoize(fn), deps)
}
