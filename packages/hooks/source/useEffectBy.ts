import { combine, get, TimerEnv } from '@typed/effects'
import { getEnvironmentByKey } from './getEnvironmentByKey'
import { runWithHooks } from './runWithHooks'
import { ChannelEffects, HookEffects, HookEnv, HookEnvironment } from './types'
import { useMemo } from './useMemo'

export function* useEffectBy<A, B, E, C>(
  values: ReadonlyArray<A>,
  identify: (a: A) => B,
  fn: (a: A, index: number, key: B) => HookEffects<E, C>,
): ChannelEffects<HookEnv & TimerEnv & E, ReadonlyArray<C>> {
  const currentValues = yield* useMemo(() => new Map<HookEnvironment, [B, C]>(), [])

  return yield* manageValues(values, identify, fn, currentValues)
}

function* manageValues<A, B, E, C>(
  values: ReadonlyArray<A>,
  identify: (a: A) => B,
  fn: (a: A, index: number, key: B) => HookEffects<E, C>,
  currentValues: Map<HookEnvironment, [B, C]>,
): ChannelEffects<HookEnv & TimerEnv & E, ReadonlyArray<C>> {
  const { removeEnvironmentByKey } = yield* get()
  const updated = yield* combine(
    ...values.map((value, index) => manageValue(value, index, identify, fn, currentValues)),
  )
  const updatedHookEnvironments = yield* useMemo((u) => new Set(u.map(([, e]) => e)), [updated])
  const updatedValues = yield* useMemo((u) => u.map(([x]) => x), [updated])

  // Remove any old environments
  for (const [env, [key]] of currentValues) {
    if (!updatedHookEnvironments.has(env)) {
      currentValues.delete(env)

      yield* removeEnvironmentByKey(key)
    }
  }

  return updatedValues
}

function* manageValue<A, B, E, C>(
  value: A,
  index: number,
  identify: (a: A) => B,
  fn: (a: A, index: number, key: B) => HookEffects<E, C>,
  currentValues: Map<HookEnvironment, [B, C]>,
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

  return yield* useMemo((...args) => args, [currentValue, hookEnvironment, k] as const)
}
