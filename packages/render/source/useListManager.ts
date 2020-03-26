import { combine } from '@typed/effects'
import { HookEffects, useCallback } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { HookManagerEnv } from './HookManagerEnv'
import { useIdManager } from './useIdManager'

export function* useListManager<A, B extends keyof any, E, C>(
  list: ReadonlyArray<A>,
  identify: Arity1<A, B>,
  computation: (value: A) => HookEffects<E, C>,
): HookEffects<E & HookManagerEnv, ReadonlyArray<C>> {
  const getIdentifier = yield* useCallback(identify, [])
  const combined = combine(
    ...list.map(a => useIdManager(getIdentifier(a), computation(a))),
  ) as HookEffects<E & HookManagerEnv, ReadonlyArray<C>>

  return yield* combined
}
