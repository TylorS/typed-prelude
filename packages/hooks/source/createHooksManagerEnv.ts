import { HookEffects, HooksManagerEnv, HookEnvironment } from './types'
import { getHookEnv } from './getHookEnv'
import { createHookEnvironment } from './createHookEnvironment'
import { UuidEnv } from '@typed/uuid'
import { createHooksManager } from './createHooksManager'

export function createHooksManagerEnv(uuidEnv: UuidEnv): HooksManagerEnv {
  const hooksManager = createHooksManager(uuidEnv)
  const environments = new WeakMap<object, HookEnvironment>()

  function* getEnvironmentByKey(key: object): HookEffects<unknown, HookEnvironment> {
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
