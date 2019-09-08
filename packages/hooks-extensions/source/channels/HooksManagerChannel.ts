import { createChannel, createManager, HooksManager } from '@typed/hooks'
import { createChannelHooks } from '../hooks/createChannelHooks'

export const defaultHooksManager = createManager()
export const HooksManagerChannel = createChannel<HooksManager>(defaultHooksManager)

export const [createUseHooksManager, createProvideHooksManager] = createChannelHooks(
  HooksManagerChannel,
)
