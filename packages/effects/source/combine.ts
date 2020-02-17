import { combineArray } from '@typed/env'
import { Effect, Effects, EffectValue } from './Effect'
import { runEffect } from './runEffect'

export function* combine<E extends ReadonlyArray<Effects<any, any>>>(
  ...effects: E
): Effects<E, { readonly [K in keyof E]: EffectValue<E[K]> }> {
  return yield* Effect.fromEnv(
    combineArray(
      (...values) => values as any,
      effects.map(eff => runEffect(eff)),
    ),
  )
}
