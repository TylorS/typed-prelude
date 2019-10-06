import { Channel } from '@typed/hooks'
import { id } from '@typed/lambda'
import { withUseProvider } from './withProvideChannel'
import { withUseChannel } from './withUseChannel'

export function createChannelHooks<A>(channel: Channel<A>) {
  return [withUseChannel(id, channel), withUseProvider(channel)] as const
}
