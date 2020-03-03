import { combineArray } from '@typed/env'
import { Effect, EffectResources, EffectValue } from './Effect'
import { runEffect } from './runEffect'

export function* combine<E extends ReadonlyArray<Effect<any, any>>>(
  ...effects: E
): Effect<EffectResources<E[number]>, { readonly [K in keyof E]: EffectValue<E[K]> }> {
  return yield* Effect.fromEnv(
    combineArray(
      (...values) => values as any,
      effects.map(eff => runEffect(eff)),
    ),
  )
}
