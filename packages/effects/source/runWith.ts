import { Env, handle, Handle } from '@typed/env'
import { Effect } from './Effect'
import { runEffect } from './runEffect'

export function* runWith<E, A, E1>(
  effect: Effect<E, A>,
  resources: E1,
): Generator<Handle<E1, Env<E, A>>, A, any> {
  return yield handle(resources, runEffect(effect))
}
