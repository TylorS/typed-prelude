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
import { isUndefined } from '@typed/logic'
import { fromJust, isJust, isNothing, Just, Maybe, race } from '@typed/maybe'
import { patch, PatchEnv } from './Patch'
import { useHookEnvUpdated } from './useHookEnvUpdated'

/**
 * If not initial value is used the "previous" value can only
 * reliably
 */
export function useKeyManager<E, B>(
  key: object,
  render: (ref: UseRef<B>) => HookEffects<E, B>,
): ChannelEffects<HookEnv & TimerEnv & PatchEnv<B, B> & E, B>

export function useKeyManager<E, B, C>(
  key: object,
  render: (ref: UseRef<C>) => HookEffects<E, B>,
  initial: C,
): ChannelEffects<HookEnv & TimerEnv & PatchEnv<C, B> & E, B>

/**
 * Used to manage a help manage re-rendering a patchable instance
 */
export function* useKeyManager<E, B, C>(
  key: object,
  render: (ref: UseRef<C>) => HookEffects<E, B>,
  initial?: C,
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
        const updated = yield* runWithHooks(render(renderedRef), hookEnvironment)

        setRenderable(updated)
        setRendered(
          yield* patch(
            fromJust(race(rendered.current, renderable.current as Maybe<C>) as Just<C>),
            updated,
          ),
        )
      },
    [rendered, hookEnvironment],
  )

  if (isFirstRun && !isUndefined(initial)) {
    setRendered(initial)
  }

  if (isFirstRun) {
    const renderable = yield* runWithHooks(render(renderedRef), hookEnvironment)

    setRenderable(renderable)

    if (isJust(rendered.current)) {
      setRendered(yield* patch(fromJust(rendered.current), renderable))
    }
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
