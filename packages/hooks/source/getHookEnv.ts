import { get } from '@typed/effects'
import { HookEffects } from './HookEffects'
import { HookEnv, HookEnvironment } from './HookEnvironment'

export function* getHookEnv(): HookEffects<never, HookEnvironment> {
  const { hookEnvironment } = yield* get<HookEnv>()

  return hookEnvironment
}
