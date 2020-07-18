import { get, runEffects, TimerEnv } from '@typed/effects'
import {
  ChannelEffects,
  getEnvironmentByKey,
  HookEffects,
  HookEnv,
  removeEnvironmentByKey,
  runWithHooks,
  useEffectOnce,
  useRef,
} from '@typed/hooks'
import { isNothing } from '@typed/maybe'
import { PatchEnv } from './Patch'
import { useRenderChannel } from './RenderChannel'
import { RenderRef } from './RenderRef'

/**
 * Used to manage a help manage re-rendering a patchable instance
 */
export function* useKeyManager<E, A, B>(
  key: any,
  render: (ref: RenderRef<A>) => HookEffects<E, B>,
  initial?: A | null,
): ChannelEffects<HookEnv & TimerEnv & PatchEnv<A, B> & E, B> {
  const env = yield* get()
  const [ref, setRef] = yield* useRef<unknown, A>()
  const hookEnvironment = yield* getEnvironmentByKey(key)
  const { id } = hookEnvironment
  const {
    setRenderable,
    setRendered,
    getRendered,
    setRenderer,
    getRenderable,
  } = yield* useRenderChannel<A, B>()
  const isFirstRun = isNothing(ref.current)

  yield* useEffectOnce(() => ({ dispose: () => runEffects(removeEnvironmentByKey(key), env) }))

  if (isFirstRun) {
    setRef(initial)
    setRendered(id, { ref, setRef })
    setRenderer(id, [render, env])
  }

  if (isFirstRun || hookEnvironment.updated) {
    setRenderable(id, yield* runWithHooks(render(getRendered(id)), hookEnvironment))
  }

  return getRenderable(id)
}
