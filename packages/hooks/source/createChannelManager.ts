import { Effect } from '@typed/effects'
import { Env, Pure } from '@typed/env'
import { equals } from '@typed/logic'
import { Channel } from './Channel'

// Keeps track of channel values and helps ensure those that need to be updated
// by channel values are marked as updated
export function createChannelManager<A extends object>(
  setUpdated: (node: A, updated: boolean) => Effect<Pure<any>, void, any>,
  getAllDescendants: (
    providers: WeakSet<A>,
    consumers: WeakSet<A>,
    node: A,
  ) => Generator<A, void, any>,
  getParent: (node: A) => A | undefined,
): {
  readonly updateChannel: <B>(
    channel: Channel<B>,
    initial: B,
    node: A,
  ) => Generator<
    Env<never, WeakMap<A, B>>,
    (value: B) => Generator<Env<never, any>, B, any>,
    unknown
  >
  readonly consumeChannel: <B>(channel: Channel<B>, node: A) => Effect<Env<never, any>, B, any>
} {
  // WeakMap & WeakSet are used to allow GC to automatically clean things up for us
  const channelValues = new WeakMap<Channel<any>, WeakMap<A, any>>()
  const channelConsumers = new WeakMap<Channel<any>, WeakSet<A>>()
  const channelProviders = new WeakMap<Channel<any>, WeakSet<A>>()

  function getChannelValues<B>(channel: Channel<B>): WeakMap<A, B> {
    if (!channelValues.has(channel)) {
      channelValues.set(channel, new WeakMap())
    }

    return channelValues.get(channel)!
  }

  function getChannelConsumers<B>(channel: Channel<B>): WeakSet<A> {
    if (!channelConsumers.has(channel)) {
      channelConsumers.set(channel, new WeakSet())
    }

    return channelConsumers.get(channel)!
  }

  function getChannelProviders<B>(channel: Channel<B>): WeakSet<A> {
    if (!channelProviders.has(channel)) {
      channelProviders.set(channel, new WeakSet())
    }

    return channelProviders.get(channel)!
  }

  function* updateChannel<B>(channel: Channel<B>, initial: B, node: A) {
    const values = yield Pure.fromIO(() => getChannelValues(channel))
    const consumers = getChannelConsumers(channel)
    const providers = getChannelProviders(channel)

    values.set(node, initial)
    providers.add(node)

    return function*(value: B) {
      const values = getChannelValues(channel)
      const currentValue = values.get(node)

      if (!equals(currentValue, value)) {
        values.set(node, value)
        yield* setUpdated(node, true)

        for (const child of getAllDescendants(providers, consumers, node)) {
          yield* setUpdated(child, true)
        }
      }

      return value
    }
  }

  function* consumeChannel<B>(channel: Channel<B>, node: A): Effect<Pure<any>, B, any> {
    const values: WeakMap<A, B> = yield Pure.fromIO(() => getChannelValues(channel))
    const consumers = getChannelConsumers(channel)

    consumers.add(node)

    while (!values.has(node)) {
      const parent = getParent(node)

      if (!parent) {
        return channel.defaultValue
      }

      node = parent
    }

    return values.get(node)!
  }

  return { updateChannel, consumeChannel } as const
}
