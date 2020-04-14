import { Effect } from '@typed/effects'
import { HookEffects, HookEnvironment, HooksManagerEnv } from './types'

export const getEnvironmentByKey = (key: object): HookEffects<HooksManagerEnv, HookEnvironment> =>
  Effect.withEnv(env => env.getEnvironmentByKey(key))
