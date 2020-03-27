import { Effects } from '@typed/effects'
import { HookEnv } from './HookEnvironment'

export interface HookEffects<A, B> extends Effects<HookEnv & A, B> {}
