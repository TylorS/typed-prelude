import { get } from '@typed/effects'
import { HookEnv } from './HookEnvironment'

export function* getHookEnv() {
  const { hookEnvironment } = yield* get<HookEnv>()

  return hookEnvironment
}
