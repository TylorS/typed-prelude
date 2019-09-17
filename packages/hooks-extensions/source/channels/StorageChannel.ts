import { Channel, createChannel } from '@typed/hooks'
import { serverStorage } from '@typed/storage'
import { withUseProvider } from '../hooks/withProvideChannel'

export const StorageChannel: Channel<Storage> = createChannel(serverStorage())

export const createProvideStorage = withUseProvider(StorageChannel)
