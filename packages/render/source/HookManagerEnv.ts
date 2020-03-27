import { PureEffect } from '@typed/effects'
import { HookEffects, HookEnvironment, HooksManager } from '@typed/hooks'

export type HookManagerEnv = {
  readonly hooksManager: HooksManager
  readonly environments: WeakMap<object, HookEnvironment>
  readonly getEnvironmentByKey: (key: object) => HookEffects<unknown, HookEnvironment>
  readonly removeEnvironmentByKey: (key: object) => PureEffect<void>
}
