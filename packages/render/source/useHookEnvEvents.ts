import { Disposable, onDisposed } from '@typed/disposable'
import { get } from '@typed/effects'
import {
  HookEnvironment,
  HookEnvironmentEventType,
  HooksManagerEnv,
  InitialState,
  useEffect,
  useMemo,
  useRef,
} from '@typed/hooks'
import { withDefault } from '@typed/maybe/source'

/**
 * Listen for updated events regarding a particular hook environment.
 */
export function* useHookEnvUpdated(env: HookEnvironment, onUpdated: () => Disposable) {
  const [currentlyUpdating, setCurrentlyUpdated] = yield* useRef(InitialState.of(false))
  const [shouldBeUpdated, setShouldBeUpdated] = yield* useRef(InitialState.of(false))
  const { hooksManager } = yield* get<HooksManagerEnv>()

  const isUpdating = () => withDefault(false, currentlyUpdating.current)

  yield* useEffect(
    (_) => {
      const shouldRunEffect = withDefault(false, shouldBeUpdated.current)

      if (!shouldRunEffect) {
        return Disposable.None
      }

      return onDisposed(() => setCurrentlyUpdated(false), onUpdated())
    },
    [shouldBeUpdated],
  )

  return yield* useMemo(
    (_) =>
      hooksManager.hookEvents.subscribe((event) => {
        switch (event[0]) {
          case HookEnvironmentEventType.Updated: {
            const { hookEnvironment, updated } = event[1]
            const isUpdatedEnvironment = env.id === hookEnvironment.id && updated
            const itWouldBeFasterToLetAParentRender = hooksManager.hasUpdatedParents(env)

            if (isUpdatedEnvironment && !itWouldBeFasterToLetAParentRender && !isUpdating()) {
              // Currently built to only allow for 1 update to be occurring at a time
              // Since a render _should_ z
              return onDisposed(() => setCurrentlyUpdated(false), onUpdated())
            }

            if (isUpdatedEnvironment && !itWouldBeFasterToLetAParentRender) {
              setShouldBeUpdated(true)
            }
          }
        }

        return Disposable.None
      }),
    [hooksManager.hookEvents],
  )
}
