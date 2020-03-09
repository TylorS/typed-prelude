import { get } from '@typed/effects'
import { HookEffect } from './HookEffects'
import { HookEnv, HookEnvironment } from './HookEnvironment'

export function* getHookEnv(): HookEffect<never, HookEnvironment> {
  const { hookEnvironment } = yield* get<HookEnv>()

  return hookEnvironment
}
