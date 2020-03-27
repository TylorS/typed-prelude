import { get } from '@typed/effects'
import { HookEffects } from './HookEffects'
import { HookEnv, HookEnvironment } from './HookEnvironment'

export function* getHookEnv(): HookEffects<unknown, HookEnvironment> {
  const { hookEnvironment } = yield* get<HookEnv>()

  return hookEnvironment
}
