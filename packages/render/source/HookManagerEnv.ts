import { PureEffect } from '@typed/effects'
import { HookEffect, HookEnvironment, HooksManager } from '@typed/hooks'

export type HookManagerEnv = {
  readonly hooksManager: HooksManager
  readonly environments: WeakMap<object, HookEnvironment>
  readonly getEnvironmentByKey: (key: object) => HookEffect<unknown, HookEnvironment>
  readonly removeEnvironmentByKey: (key: object) => PureEffect<void>
}
