import { Disposable } from '@typed/disposable'
import { get, TimerEnv } from '@typed/effects'
import {
  ChannelEffects,
  HookEnv,
  HookEnvironment,
  HookEnvironmentEventType,
  useEffect,
} from '@typed/hooks'

/**
 * Listen for updated events regarding a particular hook environment.
 */
export function* useHookEnvUpdated(
  env: HookEnvironment,
  onUpdated: () => Disposable,
): ChannelEffects<HookEnv & TimerEnv, Disposable> {
  const { hooksManager } = yield* get()

  return yield* useEffect(
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
