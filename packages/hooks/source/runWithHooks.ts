import { runEffect } from '@typed/effects'
import { Env, handle, Pure } from '@typed/env'
import { HookEffects } from './HookEffects'
import { HookEnvironment } from './HookEnvironment'

export function* runWithHooks<E, A>(
  effect: HookEffects<E, A>,
  hookEnv: HookEnvironment,
): Generator<Env<E, A> | Pure<A>, A, A> {
  return yield handle(hookEnv, runEffect(effect))
}
