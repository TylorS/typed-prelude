import { Env, Pure } from '@typed/env'
import { HookEnv } from './HookEnvironment'

export type HookEffect<A, B> = Generator<Env<HookEnv, any> | Env<A, any>, B, any>
export type HookEffects<A, B> = Generator<Env<HookEnv, any> | Env<A, any> | Pure<any>, B, any>
