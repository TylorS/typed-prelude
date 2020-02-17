import { Effect, Effects } from '@typed/effects'
import { Env, Pure } from '@typed/env'
import { equals } from '@typed/logic'
import { Channel } from './Channel'

export type ChannelManager<E, A extends object> = {
  readonly updateChannel: <B>(
    channel: Channel<E, B>,
    node: A,
  ) => Generator<Env<never, WeakMap<A, B>>, (value: B) => Effects<never, B>, unknown>
  readonly consumeChannel: <B>(channel: Channel<E, B>, node: A) => Effect<Env<never, any>, B, any>
}

// Keeps track of channel values and helps ensure those that need to be updated
// by channel values are marked as updated
export function createChannelManager<E, A extends object>(
  setUpdated: (node: A, updated: boolean) => Effects<never, void>,
  getAllDescendants: (
    providers: WeakSet<A>,
    consumers: WeakSet<A>,
    node: A,
  ) => Generator<A, void, any>,
  getParent: (node: A) => A | undefined,
): ChannelManager<E, A> {
  // WeakMap & WeakSet are used to requires GC to automatically clean things up for us
  // This is a tradeoff made for convenience
  const channelValues = new WeakMap<Channel<E, any>, WeakMap<A, any>>()
  const channelConsumers = new WeakMap<Channel<E, any>, WeakSet<A>>()
  const channelProviders = new WeakMap<Channel<E, any>, WeakSet<A>>()

  function getChannelValues<B>(channel: Channel<E, B>): WeakMap<A, B> {
    if (!channelValues.has(channel)) {
      channelValues.set(channel, new WeakMap())
    }

    return channelValues.get(channel)!
  }

  function getChannelConsumers<B>(channel: Channel<E, B>): WeakSet<A> {
    if (!channelConsumers.has(channel)) {
      channelConsumers.set(channel, new WeakSet())
    }

    return channelConsumers.get(channel)!
  }

  function getChannelProviders<B>(channel: Channel<E, B>): WeakSet<A> {
    if (!channelProviders.has(channel)) {
      channelProviders.set(channel, new WeakSet())
    }

    return channelProviders.get(channel)!
  }

  function* updateChannel<B>(channel: Channel<E, B>, node: A) {
    const initial = yield* channel.defaultValue()
    const values = getChannelValues(channel)
    const consumers = getChannelConsumers(channel)
    const providers = getChannelProviders(channel)

    values.set(node, initial)
    providers.add(node)

    return function*(value: B) {
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

  function* consumeChannel<B>(channel: Channel<E, B>, node: A): Effect<Pure<any>, B, any> {
    const values: WeakMap<A, B> = yield Pure.fromIO(() => getChannelValues(channel))
    const consumers = getChannelConsumers(channel)

    consumers.add(node)

    while (!values.has(node)) {
      const parent = getParent(node)

      if (!parent) {
        return yield* channel.defaultValue()
      }

      node = parent
    }

    return values.get(node)!
  }

  return { updateChannel, consumeChannel } as const
}
