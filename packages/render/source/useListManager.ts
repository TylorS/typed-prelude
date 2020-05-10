import { TimerEnv } from '@typed/effects'
import {
  getHookEnv,
  HookEffects,
  HooksManagerEnv,
  useCallback,
  useEffectBy,
  UseRef,
} from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { Uuid } from '../../uuid/source'
import { PatchEnv } from './Patch'
import { useKeyManager } from './useKeyManager'

export type KeyOf<A, Key extends PropertyKey> = { readonly [K in Key]: A }

//
export function* useListManager<A, B extends PropertyKey, E, C, D>(
  list: ReadonlyArray<A>,
  identify: Arity1<A, B>,
  computation: (
    ref: UseRef<D>[0],
    setRef: UseRef<D>[1],
    value: A,
    index: number,
  ) => HookEffects<E, C>,
): HookEffects<E & TimerEnv & HooksManagerEnv & PatchEnv<D, C>, ReadonlyArray<C>> {
  const { id } = yield* getHookEnv()
  const getIdentifier = yield* useCallback((a: A) => ({ [identify(a)]: id } as KeyOf<Uuid, B>), [
    identify,
  ])

  return yield* useEffectBy(list, getIdentifier, (value, index, key) =>
    useKeyManager(key, (ref, setRef) => computation(ref, setRef, value, index)),
  )
}
