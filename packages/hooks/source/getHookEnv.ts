import { Effect, op, resumeNow } from '@typed/effects'
import { HookEnv, HookEnvironment } from './HookEnvironment'

export const getHookEnv = (): Effect<HookEnv, HookEnvironment> =>
  op<HookEnv, HookEnvironment>(c => resumeNow(c.hookEnvironment))
