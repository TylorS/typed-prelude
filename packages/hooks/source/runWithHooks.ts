import { Effect, runEffect } from '@typed/effects'
import { Env, handle, Pure } from '@typed/env'
import { HookEnvironment } from './HookEnvironment'
import { WithHookEnvs } from './WithHookEnvs'

export function* runWithHooks<E, A, B>(
  effect: Effect<WithHookEnvs<E>, A, B>,
  hookEnv: HookEnvironment,
): Generator<Env<E, A> | Pure<A>, A, A> {
  return yield handle(hookEnv, runEffect(effect))
}
