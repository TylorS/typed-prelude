import { createChannelManager } from './createChannelManager'
import { createTreeManager } from './createTreeManager'
import { createUpdateManager } from './createUpdateManager'
import { HookEnvironment } from './HookEnvironment'
import { HooksManager } from './HooksManager'

// A HooksManager keeps track of the hierarchy of a number of HookEnvironments.
// This is how @typed/hooks allows for providing and consuming values via its Channel API.
export function createHooksManager(): HooksManager {
  const { setUpdated, hasBeenUpdated } = createUpdateManager<HookEnvironment>()
  const { setParent, setChild, removeNode, getAllDescendants, getParent } = createTreeManager<
    HookEnvironment
  >()
  const { updateChannel, consumeChannel } = createChannelManager(
    setUpdated,
    getAllDescendants,
    getParent,
  )

  return {
    // Control hierarchy
    setParent,
    setChild,
    removeNode,

    // Control Channels
    updateChannel,
    consumeChannel,

    // Control if has been marked as updated
    setUpdated,
    hasBeenUpdated,
  }
}
