import { Channel, HooksContext } from '../types'
import { ManagerState } from './createManagerState'

export type ChannelManager = ReturnType<typeof createChannelManager>

export function createChannelManager({
  channelContexts,
  childContexts,
  parentContexts,
}: ManagerState) {
  function updateChannels(channel: Channel, context: HooksContext) {
    const contextsOfChannel = channelContexts.get(channel)

    if (!contextsOfChannel) {
      return
    }

    walkChildren(context, childContexts, x => {
      if (contextsOfChannel.has(x)) {
        x.update()
      }
    })
  }

  function addChannelContext(channel: Channel, context: HooksContext) {
    const contexts = channelContexts.get(channel) || new Set()

    contexts.add(context)
    channelContexts.set(channel, contexts)
  }

  function consumeChannel<A>(channel: Channel<A>, context: HooksContext): A {
    if (context.channelValues.has(channel)) {
      return context.channelValues.get(channel)!
    }

    const parentContext = parentContexts.get(context)

    return parentContext ? consumeChannel(channel, parentContext) : channel.defaultValue
  }

  return { updateChannels, addChannelContext, consumeChannel } as const
}

function walkChildren(
  context: HooksContext,
  childContexts: ManagerState['childContexts'],
  fn: (context: HooksContext) => void,
) {
  const children = childContexts.get(context)

  if (children) {
    children.forEach(x => (fn(x), walkChildren(x, childContexts, fn)))
  }
}
