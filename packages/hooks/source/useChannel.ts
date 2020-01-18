import { get } from '@typed/effects'
import { Channel } from './Channel'
import { HookEnvironment } from './HookEnvironment'

export function* useChannel<A>(channel: Channel<A>) {
  const { useChannel } = yield* get<HookEnvironment>()

  return yield* useChannel(channel)
}
