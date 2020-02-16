import { combineArray } from '@typed/env'
import { Effect, Effects } from './Effect'
import { runEffect } from './runEffect'

export function combine<E, A>(...effects: ReadonlyArray<Effects<E, A>>): Effects<E, readonly A[]> {
  return Effect.fromEnv(
    combineArray(
      Array as (...values: readonly A[]) => readonly A[],
      effects.map(eff => runEffect(eff)),
    ),
  )
}
