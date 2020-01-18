import { Effect } from '@typed/effects'
import { Pure } from '@typed/env'
import { equals } from '@typed/logic'
import { Channel } from './Channel'
import { HookEnvironment } from './HookEnvironment'
import { HooksManager } from './HooksManager'

export function createHooksManager(): HooksManager {
  const updated = new Set<HookEnvironment>()
  const parentToChildren = new WeakMap<HookEnvironment, HookEnvironment[]>()
  const childToParent = new WeakMap<HookEnvironment, HookEnvironment>()
  const channelValues = new WeakMap<Channel<any>, WeakMap<HookEnvironment, any>>()

  function removeNodeFromParent(parent: HookEnvironment, node: HookEnvironment) {
    const children = parentToChildren.get(parent)!
    const index = children.findIndex(equals(node))

    if (index > -1) {
      children.splice(index, 1)
    }
  }

  function removeFromParent(node: HookEnvironment) {
    const parent = childToParent.get(node)

    if (parent) {
      removeNodeFromParent(parent, node)
    }
  }

  function getChannelValues<A>(channel: Channel<A>): WeakMap<HookEnvironment, A> {
    if (!channelValues.has(channel)) {
      channelValues.set(channel, new WeakMap())
    }

    return channelValues.get(channel)!
  }

  function* setParent(child: HookEnvironment, parent: HookEnvironment) {
    removeFromParent(child)

    childToParent.set(child, parent)

    if (!parentToChildren.has(parent)) {
      parentToChildren.set(parent, [])
    }

    const children = parentToChildren.get(parent)!

    if (!children.includes(child)) {
      children.push(child)
    }

    return
  }

  function* setChild(parent: HookEnvironment, child: HookEnvironment) {
    return yield* setParent(child, parent)
  }

  function* removeNode(node: HookEnvironment) {
    removeFromParent(node)

    const children = parentToChildren.get(node)

    if (children) {
      children.forEach(removeNode)
    }

    parentToChildren.delete(node)
  }

  function* updateChannel<A>(channel: Channel<A>, initial: A, node: HookEnvironment) {
    const values = yield Pure.fromIO(() => getChannelValues(channel))

    values.set(node, initial)

    return function*(value: A) {
      const values = getChannelValues(channel)
      const currentValue = values.get(node)

      if (!equals(currentValue, value)) {
        values.set(node, value)
        updated.add(node)
      }

      return value
    }
  }

  function* consumeChannel<A>(
    channel: Channel<A>,
    node: HookEnvironment,
  ): Effect<Pure<any>, A, any> {
    const values: WeakMap<HookEnvironment, A> = yield Pure.fromIO(() => getChannelValues(channel))

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
    if (hasBeenUpdated) {
      updated.add(node)
    } else {
      updated.delete(node)
    }
  }

  function hasBeenUpdated(environment: HookEnvironment) {
    return updated.has(environment)
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
