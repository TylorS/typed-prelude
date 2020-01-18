import { Effect } from '@typed/effects'
import { Pure } from '@typed/env'
import { equals } from '@typed/logic'
import { Channel } from './Channel'
import { HookEnvironment } from './HookEnvironment'
import { HooksManager } from './HooksManager'

export function createHooksManager(): HooksManager {
  const updated = new Set<HookEnvironment>()
  const parentToChildren = new WeakMap<HookEnvironment, Set<HookEnvironment>>()
  const childToParent = new WeakMap<HookEnvironment, HookEnvironment>()
  const channelValues = new WeakMap<Channel<any>, WeakMap<HookEnvironment, any>>()
  const channelConsumers = new WeakMap<Channel<any>, WeakSet<HookEnvironment>>()
  const channelProviders = new WeakMap<Channel<any>, WeakSet<HookEnvironment>>()

  function removeNodeFromParent(parent: HookEnvironment, node: HookEnvironment) {
    const children = parentToChildren.get(parent)

    if (children) {
      children.delete(node)
    }
  }

  function removeFromParent(node: HookEnvironment) {
    const parent = childToParent.get(node)

    if (parent) {
      removeNodeFromParent(parent, node)
    }

    childToParent.delete(node)
  }

  function getChannelValues<A>(channel: Channel<A>): WeakMap<HookEnvironment, A> {
    if (!channelValues.has(channel)) {
      channelValues.set(channel, new WeakMap())
    }

    return channelValues.get(channel)!
  }

  function getChannelConsumers<A>(channel: Channel<A>): WeakSet<HookEnvironment> {
    if (!channelConsumers.has(channel)) {
      channelConsumers.set(channel, new WeakSet())
    }

    return channelConsumers.get(channel)!
  }

  function getChannelProviders<A>(channel: Channel<A>): WeakSet<HookEnvironment> {
    if (!channelProviders.has(channel)) {
      channelProviders.set(channel, new WeakSet())
    }

    return channelProviders.get(channel)!
  }

  function* setParent(child: HookEnvironment, parent: HookEnvironment) {
    yield Pure.fromIO(() => removeFromParent(child))

    childToParent.set(child, parent)

    if (!parentToChildren.has(parent)) {
      parentToChildren.set(parent, new Set())
    }

    const children = parentToChildren.get(parent)!

    if (!children.has(child)) {
      children.add(child)
    }

    return
  }

  function* setChild(parent: HookEnvironment, child: HookEnvironment) {
    return yield* setParent(child, parent)
  }

  function* removeNode(node: HookEnvironment) {
    yield Pure.fromIO(() => removeFromParent(node))

    const children = parentToChildren.get(node)

    if (children) {
      children.forEach(removeNode)
    }

    parentToChildren.delete(node)
  }

  function* getAllDescendants(
    providers: WeakSet<HookEnvironment>,
    consumers: WeakSet<HookEnvironment>,
    node: HookEnvironment,
  ): Generator<HookEnvironment, void, any> {
    const children = parentToChildren.get(node)

    if (children) {
      for (const child of children) {
        if (!providers.has(child)) {
          if (consumers.has(child)) {
            yield child
          }

          yield* getAllDescendants(providers, consumers, child)
        }
      }
    }
  }

  function* updateChannel<A>(channel: Channel<A>, initial: A, node: HookEnvironment) {
    const values = yield Pure.fromIO(() => getChannelValues(channel))
    const consumers = getChannelConsumers(channel)
    const providers = getChannelProviders(channel)

    values.set(node, initial)
    providers.add(node)

    return function*(value: A) {
      const values = getChannelValues(channel)
      const currentValue = values.get(node)

      if (!equals(currentValue, value)) {
        values.set(node, value)
        updated.add(node)

        for (const child of getAllDescendants(providers, consumers, node)) {
          updated.add(child)
        }
      }

      return value
    }
  }

  function* consumeChannel<A>(
    channel: Channel<A>,
    node: HookEnvironment,
  ): Effect<Pure<any>, A, any> {
    const values: WeakMap<HookEnvironment, A> = yield Pure.fromIO(() => getChannelValues(channel))
    const consumers = getChannelConsumers(channel)

    consumers.add(node)

    while (!values.has(node)) {
      const parent = childToParent.get(node)

      if (!parent) {
        return channel.defaultValue
      }

      node = parent
    }

    return values.get(node)!
  }

  function* setUpdated(node: HookEnvironment, hasBeenUpdated: boolean) {
    hasBeenUpdated ? updated.add(node) : updated.delete(node)
  }

  function hasBeenUpdated(node: HookEnvironment) {
    return updated.has(node)
  }

  return {
    setParent,
    setChild,
    removeNode,
    updateChannel,
    consumeChannel,
    hasBeenUpdated,
    setUpdated,
  }
}
