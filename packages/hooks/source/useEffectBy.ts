import { Disposable } from '@typed/disposable/source'
import { combine, get, runEffects, TimerEnv } from '@typed/effects'
import { getEnvironmentByKey } from './getEnvironmentByKey'
import { runWithHooks } from './runWithHooks'
import { ChannelEffects, HookEffects, HookEnv, HookEnvironment } from './types'
import { useEffect } from './useEffect'
import { useMemo } from './useMemo'

export function* useEffectBy<A, B extends object, E, C>(
  values: ReadonlyArray<A>,
  identify: (a: A) => B,
  fn: (a: A, index: number, key: B) => HookEffects<E, C>,
): ChannelEffects<HookEnv & TimerEnv & E, ReadonlyArray<C>> {
  const currentValues = yield* useMemo(() => new Map<HookEnvironment, [object, C]>(), [])

  return yield* manageValues(values, identify, fn, currentValues)
}

function* manageValues<A, B extends object, E, C>(
  values: ReadonlyArray<A>,
  identify: (a: A) => B,
  fn: (a: A, index: number, key: B) => HookEffects<E, C>,
  currentValues: Map<HookEnvironment, [object, C]>,
): ChannelEffects<HookEnv & TimerEnv & E, ReadonlyArray<C>> {
  const { removeEnvironmentByKey } = yield* get()
  const updated = yield* combine(
    ...values.map((value, index) => manageValue(value, index, identify, fn, currentValues)),
  )
  const updatedHookEnvironments = yield* useMemo((u) => new Set(u.map(([, e]) => e)), [updated])
  const updatedValues = yield* useMemo((u) => u.map(([x]) => x), [updated])

  // Remove any old environments
  yield* useEffect(
    (envs, _) => {
      currentValues.forEach(([key], env) => {
        if (!envs.has(env)) {
          currentValues.delete(env)

          runEffects(removeEnvironmentByKey(key))
        }
      })

      return Disposable.None
    },
    [updatedHookEnvironments, updated] as const,
  )

  return updatedValues
}

function* manageValue<A, B extends object, E, C>(
  value: A,
  index: number,
  identify: (a: A) => B,
  fn: (a: A, index: number, key: B) => HookEffects<E, C>,
  currentValues: Map<HookEnvironment, [object, C]>,
): ChannelEffects<E & HookEnv, readonly [C, HookEnvironment, B]> {
  const key = identify(value)
  const hookEnvironment = yield* getEnvironmentByKey(key)
  const firstRun = !currentValues.has(hookEnvironment)
  const shouldRerunFn = firstRun || hookEnvironment.updated

  if (shouldRerunFn) {
    const c = yield* runWithHooks(fn(value, index, key), hookEnvironment)

    currentValues.set(hookEnvironment, [key, c])
  }

  const [k, currentValue] = currentValues.get(hookEnvironment)!

  return [currentValue, hookEnvironment, k as B] as const
}
