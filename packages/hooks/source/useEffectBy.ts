import { combine, TimerEnv } from '@typed/effects'
import { getEnvironmentByKey } from './getEnvironmentByKey'
import { runWithHooks } from './runWithHooks'
import { ChannelEffects, HookEffects, HookEnv, HookEnvironment } from './types'
import { useMemo } from './useMemo'

export function* useEffectBy<A, B extends object, E, C>(
  values: ReadonlyArray<A>,
  identify: (a: A) => B,
  fn: (a: A, index: number) => HookEffects<E, C>,
): ChannelEffects<HookEnv & TimerEnv & E, ReadonlyArray<C>> {
  const previousValues = yield* useMemo(() => new WeakMap<HookEnvironment, C>(), [])

  return yield* manageValues(values, identify, fn, previousValues)
}

function* manageValues<A, B extends object, E, C>(
  values: ReadonlyArray<A>,
  identify: (a: A) => B,
  fn: (a: A, index: number) => HookEffects<E, C>,
  previousValues: WeakMap<HookEnvironment, C>,
) {
  return yield* combine(
    ...values.map((value, index) => manageValue(value, index, identify, fn, previousValues)),
  )
}

function* manageValue<A, B extends object, E, C>(
  value: A,
  index: number,
  identify: (a: A) => B,
  fn: (a: A, index: number) => HookEffects<E, C>,
  previousValues: WeakMap<HookEnvironment, C>,
) {
  const hookEnvironment = yield* getEnvironmentByKey(identify(value))
  const firstRun = !previousValues.has(hookEnvironment)
  const shouldRerunFn = firstRun || hookEnvironment.updated

  if (shouldRerunFn) {
    const c = yield* runWithHooks(fn(value, index), hookEnvironment)

    previousValues.set(hookEnvironment, c)
  }

  return previousValues.get(hookEnvironment)!
}
