import { Disposable } from '@typed/disposable'
import { createTimer } from '@typed/timer'
import { Channel, CreateHookContext, HooksContext } from './types'

const createHookContexts = new WeakMap<HooksContext, CreateHookContext>()
const parentContexts = new WeakMap<HooksContext, HooksContext | null>()
const childContexts = new WeakMap<HooksContext, Set<HooksContext>>()
const channelContexts = new WeakMap<Channel, Set<HooksContext>>()

let currentContext: HooksContext | null = null

export const defaultTimer = createTimer()

export function getCurrentContext(): HooksContext | null {
  return currentContext
}

export function setCurrentContext(context: HooksContext, fnContext: any, fnArgs: any): Disposable {
  const previousContext = currentContext

  currentContext = context

  addContext(previousContext, currentContext)

  const { state, resetId } = context

  state.hasBeenUpdated = true
  state.fnContext = fnContext
  state.fnArguments = fnArgs

  const dispose = () => {
    resetId()
    state.shouldRerunHooks = true
    currentContext = previousContext
  }

  return { dispose }
}

export function reset() {
  currentContext = null
}

export function findOrCreateHookContext(hooksContext: HooksContext): CreateHookContext {
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

function addContext(parent: HooksContext | null, child: HooksContext) {
  if (parent !== parentContexts.get(child)) {
    parentContexts.set(child, parent)
  }

  if (parent) {
    const children = childContexts.get(parent) || new Set<HooksContext>()

    children.add(child)
    childContexts.set(parent, children)
  }
}

function updateChannels(channel: Channel, context: HooksContext) {
  const contextsOfChannel = channelContexts.get(channel)

  if (!contextsOfChannel) {
    return
  }

  walkChildren(context, x => {
    if (contextsOfChannel.has(x)) {
      x.update()
    }
  })
}

// Breadth-first tree search
function walkChildren(context: HooksContext, fn: (context: HooksContext) => void) {
  const children = childContexts.get(context)

  if (children) {
    children.forEach(x => (fn(x), walkChildren(x, fn)))
  }
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
