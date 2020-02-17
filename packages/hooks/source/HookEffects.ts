import { Effects } from '@typed/effects'
import { HookEnv } from './HookEnvironment'

export type HookEffects<A, B> = Effects<
  {
    readonly [K in keyof A | keyof HookEnv<A>]: K extends keyof A
      ? A[K]
      : K extends keyof HookEnv<A>
      ? HookEnv<A>[K]
      : never
  },
  B
>
