import {
  ChannelEffects,
  getEnvironmentByKey,
  HookEffects,
  HookEnv,
  runWithHooks,
  useRef,
} from '@typed/hooks'
import { fromJust, Just, isNothing } from '@typed/maybe'
import { TimerEnv } from '@typed/effects'

// TODO: How can we use this to manage re-rendering?
export function* useKeyManager<E, B>(
  key: object,
  effect: HookEffects<E, B>,
): ChannelEffects<HookEnv & E, B> {
  const hookEnvironment = yield* getEnvironmentByKey(key)
  const [ref, setRef] = yield* useRef<unknown, B>()

  if (isNothing(ref.current) || hookEnvironment.updated) {
    setRef(yield* runWithHooks(effect, hookEnvironment))
  }

  return fromJust<B>(ref.current as Just<B>)
}
