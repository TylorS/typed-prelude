import {
  createHookEnvironment,
  getHookEnv,
  HookEffect,
  HookEnvironment,
  HooksManager,
} from '@typed/hooks'
import { HookManagerEnv } from './HookManagerEnv'

export function createHookManagerEnv(hooksManager: HooksManager): HookManagerEnv {
  const environments = new WeakMap<object, HookEnvironment>()

  function* getEnvironmentByKey(key: object): HookEffect<unknown, HookEnvironment> {
    const parent = yield* getHookEnv()

    if (environments.has(key)) {
      return environments.get(key)!
    }

    const newEnvironment = createHookEnvironment(hooksManager)

    environments.set(key, newEnvironment)

    yield* hooksManager.setParent(newEnvironment, parent)

    return newEnvironment
  }

  function* removeEnvironmentByKey(key: object) {
    const environment = environments.get(key)

    if (environment) {
      environments.delete(key)

      yield* hooksManager.removeNode(environment)
    }
  }

  return {
    hooksManager,
    environments,
    getEnvironmentByKey,
    removeEnvironmentByKey,
  } as const
}
