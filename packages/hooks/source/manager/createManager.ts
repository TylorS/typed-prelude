import { Timer } from '@typed/timer'
import { CreateHook, CreateHookContext, HooksContext } from '../types'
import { createChannelManager } from './createChannelManager'
import { createContextManager } from './createContextManager'
import { createManagerState } from './createManagerState'
import { createWithHooks } from './createWithHooks'

export type HooksManager = ReturnType<typeof createManager>

export function createManager<A extends Timer>(defaultTimer: A) {
  const state = createManagerState()
  const contextManager = createContextManager(state, defaultTimer)
  const channelManager = createChannelManager(state)
  const withHooks = createWithHooks(contextManager)

  const { createHookContexts } = state
  const { getCurrentContext } = contextManager
  const { updateChannels, addChannelContext, consumeChannel } = channelManager

  function findOrCreateHookContext(hooksContext: HooksContext): CreateHookContext {
    if (createHookContexts.has(hooksContext)) {
      return createHookContexts.get(hooksContext)!
    }

    const createHookContext: CreateHookContext = {
      hasBeenUpdated: hooksContext.update,
      timer: hooksContext.timer,
      provide: (channel, value) => {
        hooksContext.channelValues.set(channel, value)

        updateChannels(channel, hooksContext)
      },
      consume: channel => {
        addChannelContext(channel, hooksContext)

        return consumeChannel(channel, hooksContext)
      },
    }

    createHookContexts.set(hooksContext, createHookContext)

    return createHookContext
  }

  function createHook<A extends readonly any[], B>(create: CreateHook<A, B>) {
    return function hook(...args: A): B {
      const context = getCurrentContext()

      if (!context) {
        throw new Error(`Cannot use hooks outside of a hooks context.`)
      }

      const { hooks, nextId } = context

      const id = nextId()
      let hook = hooks.get(id)

      if (!hook) {
        hook = create(findOrCreateHookContext(context), ...args)
        hooks.set(id, hook)
      }

      return hook.update(...args)
    }
  }

  return {
    state,
    contextManager,
    channelManager,
    findOrCreateHookContext,
    defaultTimer,
    createHook,
    withHooks,
  } as const
}
