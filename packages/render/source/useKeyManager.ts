import { Disposable, onDisposed } from '@typed/disposable'
import { get, runEffects, TimerEnv } from '@typed/effects'
import {
  ChannelEffects,
  getEnvironmentByKey,
  HookEffects,
  HookEnv,
  runWithHooks,
  useMemo,
  useRef,
  UseRef,
} from '@typed/hooks'
import { fromJust, isJust, isNothing, Just } from '@typed/maybe'
import { patch, PatchEnv } from './Patch'
import { useHookEnvUpdated } from './useHookEnvUpdated'

/**
 * Used to manage a help manage re-rendering a patchable instance
 */
export function* useKeyManager<E, B, C>(
  key: object,
  render: (ref: UseRef<C>) => HookEffects<E, B>,
  initial?: C | null,
): ChannelEffects<HookEnv & TimerEnv & PatchEnv<C, B> & E, B> {
  const env = yield* get()
  const hookEnvironment = yield* getEnvironmentByKey(key)
  const [renderable, setRenderable] = yield* useRef<unknown, B>()
  const isFirstRun = isNothing(renderable.current)
  const renderedRef = yield* useRef<unknown, C>()
  const [rendered, setRendered] = renderedRef
  const applyUpdate = yield* useMemo(
    (_) =>
      // Allows for an effect to re-render itself
      function* (): ChannelEffects<HookEnv & TimerEnv & E & PatchEnv<C, B>, void> {
        if (isJust(rendered.current)) {
          const updated = yield* runWithHooks(render(renderedRef), hookEnvironment)

          setRenderable(updated)
          setRendered(yield* patch(fromJust(rendered.current), updated))
        }
      },
    [rendered, hookEnvironment],
  )

  if (isFirstRun) {
    setRendered(initial)
  }

  if (isFirstRun) {
    setRenderable(yield* runWithHooks(render(renderedRef), hookEnvironment))
  }

  yield* useHookEnvUpdated(hookEnvironment, () => {
    const disposable = Disposable.lazy()
    const { dispose } = hookEnvironment.addDisposable(disposable)

    disposable.addDisposable(
      runEffects(applyUpdate(), env, () => {
        disposable.dispose()
        dispose()

        return Disposable.None
      }),
    )

    return onDisposed(dispose, disposable)
  })

  return fromJust(renderable.current as Just<B>)
}
