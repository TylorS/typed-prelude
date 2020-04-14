import { HookEffects, HooksManagerEnv, HookEnvironment } from './types'
import { Disposable, disposeAll } from '@typed/disposable'
import { TimerEnv, get, runEffects, combine } from '@typed/effects'
import { useMemo } from './useMemo'
import { getEnvironmentByKey } from './getEnvironmentByKey'
import { useEffect } from './useEffect'
import { equals } from '@typed/logic'

export function* useEffectBy<E, A extends object>(
  fn: (a: A, index: number) => HookEffects<E, unknown>,
  values: ReadonlyArray<A>,
): HookEffects<TimerEnv & HooksManagerEnv & E, Disposable> {
  const env = yield* get()
  const previousValues = yield* useMemo(() => new Map<HookEnvironment, A>(), [])
  const previousDisposables = yield* useMemo(() => new Map<HookEnvironment, Disposable>(), [])
  const effectDisposable = yield* useEffect(
    (...values) =>
      runEffects(manageValues(fn, env, previousValues, previousDisposables, values), env),
    values,
  )

  return yield* useMemo((...disposables) => disposeAll(disposables), [
    effectDisposable,
    ...previousDisposables.values(),
  ])
}

function* manageValues<E, A extends object>(
  fn: (a: A, index: number) => HookEffects<E, any>,
  env: E,
  previousValues: Map<HookEnvironment, A>,
  previousDisposables: Map<HookEnvironment, Disposable>,
  values: ReadonlyArray<A>,
) {
  yield* combine(
    ...values.map((value, index) =>
      manageValue(fn, env, previousValues, previousDisposables, value, index),
    ),
  )
}

function* manageValue<E, A extends object>(
  fn: (a: A, index: number) => HookEffects<E, any>,
  env: E,
  previousValues: Map<HookEnvironment, A>,
  previousDisposables: Map<HookEnvironment, Disposable>,
  value: A,
  index: number,
) {
  const hookEnvironment = yield* getEnvironmentByKey(value)

  if (previousValues.has(hookEnvironment) && equals(previousValues.get(hookEnvironment)!, value)) {
    return
  }

  const previousDisposable = previousDisposables.get(hookEnvironment)

  if (previousDisposable) {
    previousDisposable.dispose()
  }

  const disposable = runEffects(fn(value, index), { ...env, hookEnvironment })

  previousDisposables.set(hookEnvironment, disposable)
}
