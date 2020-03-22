import { createHookEnvironment, HookEnvironment, HooksManager } from '@typed/hooks'

export type HookManagerEnv = {
  readonly getEnvironmentByKey: (key: object) => HookEnvironment
  readonly removeEnvironmentByKey: (key: object) => void
}

export function createHookManagerEnv(hooksManager: HooksManager) {
  const environments = new WeakMap<object, HookEnvironment>()

  const getEnvironmentByKey = (key: object): HookEnvironment => {
    if (environments.has(key)) {
      return environments.get(key)!
    }

    const e = createHookEnvironment(hooksManager)

    environments.set(key, e)

    return e
  }

  const removeEnvironmentByKey = (key: object) => {
    environments.delete(key)
  }

  return { getEnvironmentByKey, removeEnvironmentByKey }
}
