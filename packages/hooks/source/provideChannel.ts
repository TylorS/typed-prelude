import { fromJust, Just } from '@typed/maybe'
import { Channel } from './Channel'
import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { InitialState } from './HookEnvironment'
import { useDepChange } from './useDepChange'
import { useMemo } from './useMemo'

type UpdateChannel<A> = (value: A) => HookEffects<never, A>

export function* provideChannel<A>(
  channel: Channel<A>,
  initial: InitialState<A> = () => channel.defaultValue,
): HookEffects<never, readonly [A, UpdateChannel<A>]> {
  const { useChannel, provideChannel, useRef } = yield* getHookEnv()
  const [updateChannel, setUpdateChannel] = yield* useRef<UpdateChannel<A>>()
  const channelHasChanged = yield* useDepChange(channel)
  const currentValue = yield* useChannel(channel)

  if (channelHasChanged) {
    setUpdateChannel(yield* provideChannel(channel, initial))
  }

  const update = yield* useMemo(fromJust, [updateChannel.current as Just<UpdateChannel<A>>])

  return [currentValue, update] as const
}
