import { LazyEnv, Pure } from '@typed/env'
import { HookEnv } from './HookEnvironment'

export type WithHookEnvs<E> = LazyEnv<HookEnv, HookEnv> | LazyEnv<E, any> | Pure<any>
