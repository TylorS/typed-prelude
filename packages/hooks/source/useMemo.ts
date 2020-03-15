import { co, Effect, Effects, get, PureEffect, use } from '@typed/effects'
import { Fn } from '@typed/lambda'
import { HookEnv } from './HookEnvironment'
import { useDepChange } from './useDepChange'
import { useState } from './useState'

export const useMemo: <A extends readonly any[], B>(
  fn: Fn<A, B>,
  deps: A,
) => Effects<HookEnv, B> = co(function* useMemo<A extends readonly any[], B>(
  fn: Fn<A, B>,
  deps: A,
) {
  const [getValue, setValue] = yield* useState<B>(() => Effect.of(fn(...deps)))
  const depsUpdated = yield* useDepChange(deps, false)

  if (depsUpdated) {
    yield* setValue(() => fn(...deps))
  }

  return yield* getValue()
})

export const useMemoEffect: <A extends readonly any[], E, B>(
  fn: Fn<A, Effects<E, B>>,
  deps: A,
) => Effects<HookEnv & E, B> = co(function* useMemo<A extends readonly any[], E, B>(
  fn: Fn<A, Effects<E, B>>,
  deps: A,
) {
  const e = yield* get<E>()
  const [getValue, setValue] = yield* useState<B>(() => use(fn(...deps), e) as PureEffect<B>)
  const depsUpdated = yield* useDepChange(deps, false)

  if (depsUpdated) {
    const value = yield* fn(...deps)

    yield* setValue(() => value)
  }

  return yield* getValue()
})
