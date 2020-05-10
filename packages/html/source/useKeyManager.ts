import { get, runEffects, TimerEnv } from '@typed/effects'
import {
  ChannelEffects,
  getEnvironmentByKey,
  HookEffects,
  HookEnv,
  InitialState,
  runWithHooks,
  useMemo,
  useRef,
} from '@typed/hooks'
import { fromJust, isJust, isNothing, Just, withDefault } from '@typed/maybe'
import { patch, PatchEnv } from '@typed/render'
import { EnvOf, VNode } from './domain'
import { useHookEnvUpdated } from './useHookEnvUpdated'

/**
 * Used to manage a help manage re-rendering a patchable instance
 */
export function* useKeyManager<E, A extends VNode>(
  key: object,
  render: () => HookEffects<E, A>,
): ChannelEffects<HookEnv & TimerEnv & PatchEnv<VNode, A> & E & EnvOf<A>, A> {
  const env = yield* get()
  const hookEnvironment = yield* getEnvironmentByKey(key)
  const [currentlyUpdating, setCurrentlyUpdating] = yield* useRef(InitialState.of(false))
  const [shouldBeUpdated, setShouldBeUpdated] = yield* useRef(InitialState.of(false))
  const checkIsUpdating = yield* useMemo(
    () => () => withDefault(false, currentlyUpdating.current),
    [],
  )
  const checkShouldBeUpdated = yield* useMemo(
    () => () => withDefault(false, shouldBeUpdated.current),
    [],
  )
  const [rendered, setRendered] = yield* useRef<unknown, A>()
  const isFirstRun = isNothing(rendered.current)
  const applyUpdate = yield* useMemo(
    (_) =>
      // Allows for an effect to re-render itself
      function* runPatch(): ChannelEffects<HookEnv & TimerEnv & E & PatchEnv<A, VNode>, void> {
        if (isJust(rendered.current) && !checkIsUpdating()) {
          setCurrentlyUpdating(true)

          setRendered(
            yield* patch(
              fromJust(rendered.current),
              yield* runWithHooks(render(), hookEnvironment),
            ),
          )

          setCurrentlyUpdating(false)

          // If updates occurred while we already committed to rendering, run again
          if (checkShouldBeUpdated()) {
            setShouldBeUpdated(false)

            // as long as it's hasn't become more efficient for a parent component to re-render
            if (!env.hooksManager.hasUpdatedParents(hookEnvironment)) {
              yield* runPatch()
            }
          }

          return
        }

        // If we're currently committed to rendering, ensure we know to run it again after completion
        if (isJust(rendered.current)) {
          setShouldBeUpdated(true)
        }
      },
    [
      rendered,
      checkIsUpdating,
      setCurrentlyUpdating,
      setRendered,
      render,
      checkShouldBeUpdated,
      hookEnvironment,
    ],
  )

  if (isFirstRun || hookEnvironment.updated) {
    setRendered(yield* runWithHooks(render(), hookEnvironment))
  }

  yield* useHookEnvUpdated(hookEnvironment, () => runEffects(applyUpdate(), env))

  return fromJust(rendered.current as Just<A>)
}
