import { Arity1, memoize } from '@typed/lambda'
import { HookEnvironment } from './HookEnvironment'
import { useMemo } from './useMemo'
import { WithHookEnvs } from './withHooks'

export function* useCallback<A, B>(
  fn: Arity1<A, B>,
  deps: ReadonlyArray<any>,
): Generator<WithHookEnvs<never>, Arity1<A, B>, HookEnvironment> {
  return yield* useMemo(_ => memoize(fn), deps)
}
