import { PureEffect } from '@typed/effects'
import { Arity1 } from '@typed/lambda'
import { equals } from '@typed/logic'
import { Channel } from './Channel'
import { ChannelEffects, UseChannelState, UseChannelStateOptions } from './types'

export type ChannelManager<A extends object> = {
  readonly useChannelState: <E, B, C = B>(
    options: UseChannelStateOptions<E, B, C>,
    node: A,
  ) => ChannelEffects<E, UseChannelState<E, B, C>>
}

// Keeps track of channel values and helps ensure those that need to be updated
// by channel values are marked as updated
export function createChannelManager<A extends object>(
  setUpdated: (node: A, updated: boolean) => PureEffect<void>,
  getAllDescendants: (
    providers: WeakSet<A>,
    consumers: WeakMap<A, any>,
    node: A,
  ) => Generator<A, void, any>,
  getParent: (node: A) => A | undefined,
): ChannelManager<A> {
  // WeakMap & WeakSet are used to requires GC to automatically clean things up for us
  // This is a tradeoff made for convenience
  const channelValues = new WeakMap<Channel<any, any>, WeakMap<A, any>>()
  const channelConsumers = new WeakMap<
    Channel<any, any>,
    WeakMap<A, Arity1<any, any> | undefined>
  >()
  const channelProviders = new WeakMap<Channel<any, any>, WeakSet<A>>()

  function getChannelValues<E, B>(channel: Channel<E, B>): WeakMap<A, B> {
    if (!channelValues.has(channel)) {
      channelValues.set(channel, new WeakMap())
    }

    return channelValues.get(channel)!
  }

  function getChannelConsumers<E, B>(
    channel: Channel<E, B>,
  ): WeakMap<A, Arity1<any, any> | undefined> {
    if (!channelConsumers.has(channel)) {
      channelConsumers.set(channel, new WeakMap())
    }

    return channelConsumers.get(channel)!
  }

  function getChannelProviders<E, B>(channel: Channel<E, B>): WeakSet<A> {
    if (!channelProviders.has(channel)) {
      channelProviders.set(channel, new WeakSet())
    }

    return channelProviders.get(channel)!
  }

  // Traverse up the tree to the first provider or the top of the tree.
  // If this is the top of the tree, use the provided node.
  function findProvider(node: A, providers: WeakSet<A>): A {
    let lastParent: A | undefined
    let parent = getParent(node)

    while (parent && !providers.has(parent)) {
      lastParent = parent
      parent = getParent(parent)
    }

    return lastParent ?? node
  }

  function* consumeChannel<E, B>(channel: Channel<E, B>, node: A): ChannelEffects<E, B> {
    const values: WeakMap<A, B> = getChannelValues(channel)
    let provider = node

    while (!values.has(provider)) {
      const parent = getParent(provider)

      if (!parent) {
        const b = yield* channel.defaultValue()

        values.set(node, b)

        getChannelProviders(channel).add(node)

        return b
      }

      provider = parent
    }

    return values.get(provider)!
  }

  function* useChannelState<E, B, C = B>(
    options: UseChannelStateOptions<E, B, C>,
    node: A,
  ): ChannelEffects<E, UseChannelState<E, B, C>> {
    const { channel, selector, initialState } = options
    const values = getChannelValues(channel)
    const consumers = getChannelConsumers(channel)
    const providers = getChannelProviders(channel)
    const isProvider = selector ? false : !!initialState

    if (isProvider && !values.has(node) && initialState) {
      values.set(node, yield* initialState())
    }

    if (isProvider) {
      providers.add(node)
    }

    consumers.set(node, selector)

    function* getValue(): ChannelEffects<E, C> {
      const currentValue = yield* consumeChannel(channel, node)

      return selector ? selector(currentValue) : (currentValue as any)
    }

    function* updateValue(updateValue: Arity1<B, B>): ChannelEffects<E, C> {
      const currentValue = yield* consumeChannel(channel, node)
      const updatedValue = updateValue(currentValue)

      if (!equals(currentValue, updatedValue)) {
        const provider = findProvider(node, providers)

        values.set(provider, updatedValue)

        yield* setUpdated(provider, true)

        for (const child of getAllDescendants(providers, consumers, provider)) {
          const selector = consumers.get(child)!

          const childUpdated = selector
            ? !equals(selector(currentValue), selector(updatedValue))
            : true

          if (childUpdated) {
            yield* setUpdated(child, childUpdated)
          }
        }
      }

      return yield* getValue()
    }

    return [getValue, updateValue] as const
  }

  return { useChannelState } as const
}
