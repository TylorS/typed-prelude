import { Effects } from '@typed/effects'
import { HookEnv } from './HookEnvironment'

export type HookEffects<A, B> = Effects<HookEnv<A> & A, B>
