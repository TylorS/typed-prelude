import { TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, useCallback, useEffectBy } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'

export type KeyOf<A, Key extends PropertyKey> = { readonly [K in Key]: A }

export function* useListManager<A, B extends PropertyKey, E, C>(
  list: ReadonlyArray<A>,
  identify: Arity1<A, B>,
  computation: (value: A, index: number, key: KeyOf<A, B>) => HookEffects<E, C>,
): HookEffects<E & TimerEnv & HooksManagerEnv, ReadonlyArray<C>> {
  const getIdentifier = yield* useCallback((a: A) => ({ [identify(a)]: a } as KeyOf<A, B>), [
    identify,
  ])

  return yield* useEffectBy(list, getIdentifier, computation)
}
