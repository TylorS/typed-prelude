import { LazyEnv, Pure } from '@typed/env'
import { HookEnvironment } from './HookEnvironment'

export type WithHookEnvs<E> =
  | LazyEnv<HookEnvironment, HookEnvironment>
  | LazyEnv<E, any>
  | Pure<any>
