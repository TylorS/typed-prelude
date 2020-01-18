import { Env, Pure } from '@typed/env'
import { HookEnvironment } from './HookEnvironment'

export type WithHookEnvs<E> = Env<HookEnvironment, HookEnvironment> | Pure<any> | Env<E, any>
