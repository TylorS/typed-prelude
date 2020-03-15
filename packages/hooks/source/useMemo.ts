import { Effect, Effects } from '@typed/effects'
import { Fn } from '@typed/lambda'
import { HookEffects } from './HookEffects'
import { InitialState } from './HookEnvironment'
import { useDepChange } from './useDepChange'
import { useState } from './useState'

export function* useMemo<E, A extends readonly any[], B>(fn: Fn<A, B>, deps: A): HookEffects<E, B> {
  const [getValue, setValue] = yield* useState<unknown, B>(() => Effect.of(fn(...deps)))
  const depsUpdated = yield* useDepChange(deps, false)

  if (depsUpdated) {
    yield* setValue(() => fn(...deps))
  }

  return yield* getValue()
}

export function* useMemoEffect<E, A extends readonly any[], B>(
  fn: Fn<A, Effects<E, B>>,
  deps: A,
): HookEffects<E, B> {
  const [getValue, setValue] = yield* useState<E, B>((() => fn(...deps)) as InitialState<E, B>)
  const depsUpdated = yield* useDepChange(deps, false)

  if (depsUpdated) {
    const value = yield* fn(...deps)

    yield* setValue(() => value)
  }

  return yield* getValue()
}
