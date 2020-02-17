import { get } from '@typed/effects'
import { HookEffects } from './HookEffects'
import { HookEnv, HookEnvironment } from './HookEnvironment'

export function* getHookEnv<E>(): HookEffects<never, HookEnvironment<E>> {
  const { hookEnvironment } = yield* get<HookEnv<E>>()

  return hookEnvironment
}
