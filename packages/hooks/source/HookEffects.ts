import { Effect, Effects } from '@typed/effects'
import { CombineResources } from '@typed/env'
import { HookEnv } from './HookEnvironment'

export type HookEffect<A, B> = Effect<CombineResources<HookEnv, A>, B>
export type HookEffects<A, B> = Effects<CombineResources<HookEnv, A>, B>
