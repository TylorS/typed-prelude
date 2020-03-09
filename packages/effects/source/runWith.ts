import { Env, handle, Handle, Resources } from '@typed/env'
import { Effect, Effects } from './Effect'
import { runEffect } from './runEffect'

export function* runWith<E, A, E1>(
  effect: Effect<E, A>,
  resources: E1,
): Effects<E1 extends E ? never : Resources<Handle<E1, Env<E, A>>>, A> {
  return yield handle(resources, runEffect(effect))
}
