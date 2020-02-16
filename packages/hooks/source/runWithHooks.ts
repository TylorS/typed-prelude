import { runEffect } from '@typed/effects'
import { Env, handle, Pure } from '@typed/env'
import { HookEffects } from './HookEffects'
import { HookEnvironment } from './HookEnvironment'
import { withHooks } from './withHooks'

export function* runWithHooks<E, A>(
  effect: HookEffects<E, A>,
  hookEnvironment: HookEnvironment,
): Generator<Env<E, A> | Pure<A>, A, A> {
  return yield handle({ hookEnvironment }, runEffect(withHooks(() => effect)()))
}
