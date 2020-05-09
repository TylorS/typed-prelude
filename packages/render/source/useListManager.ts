import { TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, useCallback, useEffectBy, UseRef } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { PatchEnv } from './Patch'
import { useKeyManager } from './useKeyManager'

export type KeyOf<A, Key extends PropertyKey> = { readonly [K in Key]: A }

//
export function* useListManager<A, B extends PropertyKey, E, C>(
  list: ReadonlyArray<A>,
  identify: Arity1<A, B>,
  computation: (ref: UseRef<C>, value: A, index: number) => HookEffects<E, C>,
): HookEffects<E & TimerEnv & HooksManagerEnv & PatchEnv<C, C>, ReadonlyArray<C>> {
  const getIdentifier = yield* useCallback((a: A) => ({ [identify(a)]: a } as KeyOf<A, B>), [
    identify,
  ])

  return yield* useEffectBy(list, getIdentifier, (value, index, key) =>
    useKeyManager(key, (ref) => computation(ref, value, index)),
  )
}
