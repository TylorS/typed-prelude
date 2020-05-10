import { UuidEnv } from '@typed/uuid'
import { createHookEnvironment } from './createHookEnvironment'
import { createHooksManager } from './createHooksManager'
import { getHookEnv } from './getHookEnv'
import { HookEffects, HookEnvironment, HookEnvironmentEventType, HooksManagerEnv } from './types'

export function createHooksManagerEnv(uuidEnv: UuidEnv): HooksManagerEnv {
  const hooksManager = createHooksManager(uuidEnv)
  const environments = new WeakMap<object, HookEnvironment>()
  const environmentToKey = new WeakMap<HookEnvironment, object>()

  const { hookEvents } = hooksManager

  function* getEnvironmentByKey(key: object): HookEffects<unknown, HookEnvironment> {
    const parent = yield* getHookEnv()

    if (environments.has(key)) {
      return environments.get(key)!
    }

    const created = createHookEnvironment(hooksManager)

    environments.set(key, created)
    environmentToKey.set(created, key)

    hookEvents.publish([HookEnvironmentEventType.Created, { created, parent }])

    return created
  }

  function* removeEnvironmentByKey(key: object) {
    const environment = environments.get(key)

    if (environment) {
      environmentToKey.delete(environment)
      environments.delete(key)

      hookEvents.publish([HookEnvironmentEventType.Removed, environment])
    }
  }

  return {
    hooksManager,
    environments,
    getEnvironmentByKey,
    removeEnvironmentByKey,
  } as const
}
