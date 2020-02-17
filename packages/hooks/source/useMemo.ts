import { Effect, Effects } from '@typed/effects'
import { Pure } from '@typed/env'
import { Fn } from '@typed/lambda'
import { isIterable } from '@typed/logic'
import { HookEffects } from './HookEffects'
import { useDepChange } from './useDepChange'
import { useState } from './useState'

export function* useMemo<A extends readonly any[], B>(
  fn: Fn<A, B | Effects<never, B>>,
  deps: A,
): HookEffects<never, B> {
  const [getValue, setValue] = yield* useState<B>(() => getEffectValue(fn(...deps)))
  const depsUpdated = yield* useDepChange(deps, false)

  if (depsUpdated) {
    const updatedValue = yield* getEffectValue(fn(...deps))

    yield* setValue(() => updatedValue)
  }

  return yield* getValue()
}

function* getEffectValue<A>(value: A | Effects<never, A>): Effects<never, A> {
  if (isIterable(value)) {
    return yield* value
  }

  return yield* Effect.fromEnv(Pure.of(value as A))
}
