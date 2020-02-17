import { Env, handle, Handle } from '@typed/env'
import { Effect, Effects } from './Effect'
import { runEffect } from './runEffect'

export function runWith<E, A, E1 extends Partial<E>>(
  effect: Effects<E, A>,
  resources: E1,
): Effects<Handle<E1, Env<E, A>>, A> {
  return Effect.fromEnv(handle(resources, runEffect(effect)))
}
