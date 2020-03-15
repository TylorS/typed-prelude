import { co, Computation, Env } from '@typed/effects'
import { Channel } from './Channel'
import { getHookEnv } from './getHookEnv'
import { HookEnv, InitialState, UseChannel } from './HookEnvironment'

export const useChannel: <E, A>(
  channel: Channel<E, A>,
  initial?: InitialState<A>,
) => Computation<Env<HookEnv, any> | Env<E, any>, UseChannel<E, A>, any> = co(function* useChannel<
  E,
  A
>(channel: Channel<E, A>, initial?: InitialState<A>) {
  const { useChannel } = yield* getHookEnv()

  return yield* useChannel(channel, initial)
})
