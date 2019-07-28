import { Disposable } from '@typed/disposable'
import { createTimer } from '@typed/timer'
import { CreateHookContext, HooksContext } from './types'

const createHookContexts = new WeakMap<HooksContext, CreateHookContext>()
const parentContext = new WeakMap<HooksContext, HooksContext | null>()
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

function addContext(parent: HooksContext | null, child: HooksContext) {
  if (parent !== parentContext.get(child)) {
    parentContext.set(child, parent)
  }
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
    provide: (context, value) => hooksContext.contexts.set(context, value),
  }

  createHookContexts.set(hooksContext, createHookContext)

  return createHookContext
}
