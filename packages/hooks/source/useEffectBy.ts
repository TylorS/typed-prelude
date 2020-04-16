import { combine } from '@typed/effects'
import { getEnvironmentByKey } from './getEnvironmentByKey'
import { runWithHooks } from './runWithHooks'
import { ChannelEffects, HookEffects, HookEnv, HookEnvironment } from './types'
import { useMemo } from './useMemo'

export function* useEffectBy<A, B extends object, E, C>(
  values: ReadonlyArray<A>,
  identify: (a: A) => B,
  fn: (a: A, index: number, key: B) => HookEffects<E, C>,
): ChannelEffects<HookEnv & E, ReadonlyArray<C>> {
  const currentValues = yield* useMemo(() => new WeakMap<HookEnvironment, C>(), [])

  return yield* manageValues(values, identify, fn, currentValues)
}

function* manageValues<A, B extends object, E, C>(
  values: ReadonlyArray<A>,
  identify: (a: A) => B,
  fn: (a: A, index: number, key: B) => HookEffects<E, C>,
  currentValues: WeakMap<HookEnvironment, C>,
) {
  return yield* combine(
    ...values.map((value, index) => manageValue(value, index, identify, fn, currentValues)),
  )
}

function* manageValue<A, B extends object, E, C>(
  value: A,
  index: number,
  identify: (a: A) => B,
  fn: (a: A, index: number, key: B) => HookEffects<E, C>,
  currentValues: WeakMap<HookEnvironment, C>,
) {
  const key = identify(value)
  const hookEnvironment = yield* getEnvironmentByKey(key)
  const firstRun = !currentValues.has(hookEnvironment)
  const shouldRerunFn = firstRun || hookEnvironment.updated

  if (shouldRerunFn) {
    currentValues.set(hookEnvironment, yield* runWithHooks(fn(value, index, key), hookEnvironment))
  }

  return currentValues.get(hookEnvironment)!
}
