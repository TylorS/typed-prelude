import { Effect } from '@typed/effects'
import { ChannelEffects, HookEnv, HookEnvironment } from './types'

export const getEnvironmentByKey = (key: any): ChannelEffects<HookEnv, HookEnvironment> =>
  Effect.withEnv((env) => env.getEnvironmentByKey(key))
