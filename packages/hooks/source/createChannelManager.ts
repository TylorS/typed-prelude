import { Effect, PureEffect } from '@typed/effects'
import { Pure } from '@typed/env'
import { equals } from '@typed/logic'
import { Channel } from './Channel'
import { InitialState } from './HookEnvironment'

export type ChannelManager<A extends object> = {
  readonly updateChannel: <E, B>(
    channel: Channel<E, B>,
    node: A,
    initialState?: InitialState<E, B>,
  ) => Effect<E, (value: B) => PureEffect<B>>
  readonly consumeChannel: <E, B>(channel: Channel<E, B>, node: A) => Effect<E, B>
}

// Keeps track of channel values and helps ensure those that need to be updated
// by channel values are marked as updated
export function createChannelManager<A extends object>(
  setUpdated: (node: A, updated: boolean) => PureEffect<void>,
  getAllDescendants: (
    providers: WeakSet<A>,
    consumers: WeakSet<A>,
    node: A,
  ) => Generator<A, void, any>,
  getParent: (node: A) => A | undefined,
): ChannelManager<A> {
  // WeakMap & WeakSet are used to requires GC to automatically clean things up for us
  // This is a tradeoff made for convenience
  const channelValues = new WeakMap<Channel<any, any>, WeakMap<A, any>>()
  const channelConsumers = new WeakMap<Channel<any, any>, WeakSet<A>>()
  const channelProviders = new WeakMap<Channel<any, any>, WeakSet<A>>()

  function getChannelValues<E, B>(channel: Channel<E, B>): WeakMap<A, B> {
    if (!channelValues.has(channel)) {
      channelValues.set(channel, new WeakMap())
    }

    return channelValues.get(channel)!
  }

  function getChannelConsumers<E, B>(channel: Channel<E, B>): WeakSet<A> {
    if (!channelConsumers.has(channel)) {
      channelConsumers.set(channel, new WeakSet())
    }

    return channelConsumers.get(channel)!
  }

  function getChannelProviders<E, B>(channel: Channel<E, B>): WeakSet<A> {
    if (!channelProviders.has(channel)) {
      channelProviders.set(channel, new WeakSet())
    }

    return channelProviders.get(channel)!
  }

  function* updateChannel<E, B>(
    channel: Channel<E, B>,
    node: A,
    initialState?: InitialState<E, B>,
  ) {
    const values = getChannelValues(channel)
    const consumers = getChannelConsumers(channel)
    const providers = getChannelProviders(channel)

    if (initialState) {
      values.set(node, yield* initialState())
    }

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

  function* consumeChannel<E, B>(channel: Channel<E, B>, node: A): Effect<E, B> {
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
