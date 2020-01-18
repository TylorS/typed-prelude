import { Effect, get } from '@typed/effects'
import { Env } from '@typed/env'
import { fromJust, Just } from '@typed/maybe'
import { Channel } from './Channel'
import { HookEnvironment, InitialState } from './HookEnvironment'
import { useDepChange } from './useDepChange'
import { useMemo } from './useMemo'
import { WithHookEnvs } from './withHooks'

type UpdateChannel<A> = (value: A) => Effect<Env<never, any>, A, any>

export function* provideChannel<A>(
  channel: Channel<A>,
  initial: InitialState<A>,
): Generator<WithHookEnvs<never>, readonly [A, UpdateChannel<A>], HookEnvironment> {
  const { useChannel, provideChannel, useRef } = yield* get<HookEnvironment>()
  const [updateChannel, setUpdateChannel] = yield* useRef<UpdateChannel<A>>()
  const channelHasChanged = yield* useDepChange(channel)
  const currentValue = yield* useChannel(channel)

  if (channelHasChanged) {
    setUpdateChannel(yield* provideChannel(channel, initial))
  }

  const update = yield* useMemo(fromJust, [updateChannel.current as Just<UpdateChannel<A>>])

  return [currentValue, update] as const
}
