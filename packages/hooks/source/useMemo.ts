import { Fn } from '@typed/lambda'
import { HookEnvironment } from './HookEnvironment'
import { useDepChange } from './useDepChange'
import { useState } from './useState'
import { WithHookEnvs } from './withHooks'

export function* useMemo<A extends readonly any[], B>(
  fn: Fn<A, B>,
  deps: A,
): Generator<WithHookEnvs<never>, B, HookEnvironment> {
  const [getValue, setValue] = yield* useState(() => fn(...deps))
  const depsUpdated = yield* useDepChange(deps)

  if (depsUpdated) {
    yield* setValue(() => fn(...deps))
  }

  return getValue()
}
