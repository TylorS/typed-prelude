import { createChannel, createManager, HooksManager } from '@typed/hooks'
import { createTimer } from '@typed/timer'
import { createChannelHooks } from '../hooks/createChannelHooks'

export const defaultHooksManager = createManager(createTimer())
export const HooksManagerChannel = createChannel<HooksManager>(defaultHooksManager)

export const [createUseHooksManager, createProvideHooksManager] = createChannelHooks(
  HooksManagerChannel,
)
