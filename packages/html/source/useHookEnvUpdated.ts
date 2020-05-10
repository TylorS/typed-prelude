import { Disposable } from '@typed/disposable'
import { get } from '@typed/effects'
import { HookEnvironment, HookEnvironmentEventType, HooksManagerEnv, useMemo } from '@typed/hooks'

/**
 * Listen for updated events regarding a particular hook environment.
 */
export function* useHookEnvUpdated(env: HookEnvironment, onUpdated: () => Disposable) {
  const { hooksManager } = yield* get<HooksManagerEnv>()

  return yield* useMemo(
    (events) =>
      events.subscribe((event) => {
        switch (event[0]) {
          case HookEnvironmentEventType.Updated: {
            const { hookEnvironment, updated } = event[1]
            const isUpdatedEnvironment = env.id === hookEnvironment.id && updated
            const itWouldBeFasterToLetAParentRender = hooksManager.hasUpdatedParents(env)

            if (isUpdatedEnvironment && !itWouldBeFasterToLetAParentRender) {
              return onUpdated()
            }

            return Disposable.None
          }
        }

        return Disposable.None
      }),
    [hooksManager.hookEvents],
  )
}
