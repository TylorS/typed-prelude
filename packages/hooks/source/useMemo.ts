import { Fn } from '@typed/lambda'
import { HookEffects } from './HookEffects'
import { useDepChange } from './useDepChange'
import { useState } from './useState'

export function* useMemo<A extends readonly any[], B>(
  fn: Fn<A, B>,
  deps: A,
): HookEffects<never, B> {
  const [getValue, setValue] = yield* useState(() => fn(...deps))
  const depsUpdated = yield* useDepChange(deps)

  if (depsUpdated) {
    yield* setValue(() => fn(...deps))
  }

  return yield* getValue()
}
