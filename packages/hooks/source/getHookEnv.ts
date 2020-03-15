import { EmptyObject } from '@typed/common'
import { get } from '@typed/effects'
import { HookEffect } from './HookEffects'
import { HookEnv, HookEnvironment } from './HookEnvironment'

export function* getHookEnv(): HookEffect<EmptyObject, HookEnvironment> {
  const { hookEnvironment } = yield* get<HookEnv>()

  return hookEnvironment
}
