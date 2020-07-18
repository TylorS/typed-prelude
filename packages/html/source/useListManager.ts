import { TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, useEffectBy, useMemo } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { PatchEnv } from '@typed/render'
import { VNode } from './domain'
import { useKeyManager } from './useKeyManager'

export type KeyOf<A, Key extends PropertyKey> = { readonly [K in Key]: A }

export function* useListManager<A, B, E>(
  list: ReadonlyArray<A>,
  identify: Arity1<A, B>,
  computation: (value: A, index: number) => HookEffects<E, VNode>,
): HookEffects<E & TimerEnv & HooksManagerEnv & PatchEnv<VNode, VNode>, ReadonlyArray<VNode>> {
  return yield* useEffectBy(list, identify, function* (
    value,
    index,
    key,
  ): HookEffects<E & TimerEnv & HooksManagerEnv & PatchEnv<VNode, VNode>, VNode> {
    const computationKey = yield* useMemo((k) => [k], [key])
    const vNode = yield* useKeyManager(computationKey, () => computation(value, index))

    return vNode
  })
}
