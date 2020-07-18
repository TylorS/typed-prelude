import { get, TimerEnv } from '@typed/effects'
import {
  ChannelEffects,
  getEnvironmentByKey,
  HookEffects,
  HookEnv,
  runWithHooks,
  useRef,
} from '@typed/hooks'
import { isNothing } from '@typed/maybe'
import { PatchEnv } from './Patch'
import { useRenderChannel } from './RenderChannel'
import { RenderRef } from './RenderRef'

/**
 * Used to manage a help manage re-rendering a patchable instance
 */
export function* useKeyManager<E, B, A>(
  key: object,
  render: (ref: RenderRef<B>) => HookEffects<E, A>,
  initial?: B | null,
): ChannelEffects<HookEnv & TimerEnv & PatchEnv<B, A> & E, A> {
  const env = yield* get()
  const [ref, setRef] = yield* useRef<unknown, B>()
  const hookEnvironment = yield* getEnvironmentByKey(key)
  const { id } = hookEnvironment
  const { setRenderable, setRendered, setRenderer, getRenderable } = yield* useRenderChannel<B, A>()
  const isFirstRun = isNothing(ref.current)

  if (isFirstRun) {
    setRef(initial)
    setRendered(id, { ref, setRef })
    setRenderer(id, [render, env])
  }

  if (isFirstRun || hookEnvironment.updated) {
    setRenderable(id, yield* runWithHooks(render({ ref, setRef }), hookEnvironment))
  }

  return getRenderable(id)
}
