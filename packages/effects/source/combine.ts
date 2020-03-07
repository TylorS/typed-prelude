import { combineArray } from '@typed/env'
import { CombinedEffectResources, CombinedEffectValues, Effect } from './Effect'
import { runEffect } from './runEffect'

export function* combine<E extends ReadonlyArray<Effect<any, any>>>(
  ...effects: E
): Effect<CombinedEffectResources<E>, CombinedEffectValues<E>> {
  return yield* Effect.fromEnv(
    combineArray(
      (...values) => values as CombinedEffectValues<E>,
      effects.map(eff => runEffect(eff)),
    ),
  )
}
