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
import { PatchEnv } from '@typed/render'
import { EnvOf, VNode } from './domain'
import { useHtmlChannel } from './HtmlChannel'

/**
 * Used to manage a help manage re-rendering a patchable instance
 */
export function* useKeyManager<E, A extends VNode>(
  key: object,
  render: () => HookEffects<E, A>,
): ChannelEffects<HookEnv & TimerEnv & PatchEnv<VNode, VNode> & E & EnvOf<A>, A> {
  const env = yield* get()
  const hookEnvironment = yield* getEnvironmentByKey(key)
  const { setRenderable, getRenderable, setRenderer } = yield* useHtmlChannel()
  const isFirstRun = yield* useFirstRun()

  if (isFirstRun) {
    setRenderer(hookEnvironment.id, [render, env])
  }

  if (isFirstRun) {
    setRenderable(hookEnvironment.id, yield* runWithHooks(render(), hookEnvironment))
  }

  return getRenderable(hookEnvironment.id) as A
}

function* useFirstRun() {
  const [ref, setRef] = yield* useRef<unknown, boolean>()

  if (isNothing(ref.current)) {
    setRef(false)

    return true
  }

  return false
}
