import { Effect, runEffect } from '@typed/effects'
import { Env, handle, Handle } from '@typed/env'
import { OrToAnd } from '@typed/lambda'
import { HookEnvironment } from './HookEnvironment'
import { WithHookEnvs } from './withHooks'

export function* runWithHooks<E, A>(
  effect: Effect<WithHookEnvs<E>, A, any>,
  hookEnv: HookEnvironment,
): Generator<Handle<HookEnvironment, Env<OrToAnd<HookEnvironment | E>, A>>, A, any> {
  const env: Handle<HookEnvironment, Env<OrToAnd<HookEnvironment | E>, A>> = handle(
    hookEnv,
    runEffect(effect),
  )

  return yield env
}
