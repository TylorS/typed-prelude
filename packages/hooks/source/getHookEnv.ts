import { get } from '@typed/effects'
import { HookEffects, HookEnv, HookEnvironment } from './types'

export function* getHookEnv(): HookEffects<unknown, HookEnvironment> {
  const { hookEnvironment } = yield* get<HookEnv>()

  return hookEnvironment
}
