import { co, Effects } from '@typed/effects'
import { Channel } from './Channel'
import { getHookEnv } from './getHookEnv'
import { HookEnv, InitialState, UseChannel } from './HookEnvironment'

export const useChannel: <E, A>(
  channel: Channel<E, A>,
  initial?: InitialState<A>,
) => Effects<HookEnv & E, UseChannel<E, A>> = co(function* useChannel<E, A>(
  channel: Channel<E, A>,
  initial?: InitialState<A>,
) {
  const { useChannel } = yield* getHookEnv()

  return yield* useChannel(channel, initial)
})
