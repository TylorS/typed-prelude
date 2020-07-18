import { TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, useEffectBy, useMemo } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { PatchEnv } from './Patch'
import { RenderRef } from './RenderRef'
import { useKeyManager } from './useKeyManager'

export type KeyOf<A, Key extends PropertyKey> = { readonly [K in Key]: A }

/**
 * Manages a list of items component contexts
 */
export function* useListManager<A, B extends PropertyKey, E, C, D>(
  list: ReadonlyArray<A>,
  identify: Arity1<A, B>,
  computation: (ref: RenderRef<D>, value: A, index: number) => HookEffects<E, C>,
): HookEffects<E & TimerEnv & HooksManagerEnv & PatchEnv<D, C>, ReadonlyArray<C>> {
  return yield* useEffectBy(list, identify, function* (value, index, key) {
    const computationKey = yield* useMemo((k) => [k], [key])
    const computed = yield* useKeyManager(computationKey, (ref) => computation(ref, value, index))

    return computed
  })
}
