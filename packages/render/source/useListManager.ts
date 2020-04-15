import { TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, useCallback, useEffectBy } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'

export function* useListManager<A, B extends keyof any, E, C>(
  list: ReadonlyArray<A>,
  identify: Arity1<A, B>,
  computation: (value: A) => HookEffects<E, C>,
): HookEffects<E & TimerEnv & HooksManagerEnv, ReadonlyArray<C>> {
  const getIdentifier = yield* useCallback((a: A) => ({ [identify(a)]: true }), [identify])

  return yield* useEffectBy(list, getIdentifier, computation)
}
