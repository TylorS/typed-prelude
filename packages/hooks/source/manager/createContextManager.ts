import { Disposable } from '@typed/disposable'
import { Timer } from '@typed/timer'
import { Channel } from '../Channel'
import { Hook, HooksContext } from '../types'
import { createAddContext } from './createAddContext'
import { createHooksContextState } from './createHooksContextState'
import { ManagerState } from './createManagerState'

export type ContextManager = ReturnType<typeof createContextManager>

export function createContextManager(state: ManagerState, defaultTimer: Timer) {
  const { parentContexts } = state
  const addContext = createAddContext(state)
  let currentContext: HooksContext | null = null

  function getCurrentContext(): HooksContext | null {
    return currentContext
  }

  function setCurrentContext(context: HooksContext, fnContext: any, fnArgs: any): Disposable {
    const previousContext = currentContext

    if (!parentContexts.get(context) && previousContext) {
      addContext(previousContext, context)
    }

    currentContext = context

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

  function reset() {
    currentContext = null
  }

  function createHooksContext(
    fn: (...args: any) => any,
    timer: Timer = defaultTimer,
  ): HooksContext {
    const state: HooksContext['state'] = createHooksContextState(fn)
    const hooks = new Map<number, Hook>()
    const channelValues = new Map<Channel, any>()
    const nextId = () => state.currentId++
    const resetId = () => (state.currentId = 0)
    const dispose = () => {
      hooks.forEach(x => x.dispose())
      hooks.clear()
      channelValues.clear()
    }
    const update = () =>
      state.shouldRerunHooks
        ? state.fn.apply(state.fnContext, state.fnArguments)
        : (state.hasBeenUpdated = true)

    return {
      state,
      timer,
      hooks,
      channelValues,
      update,
      dispose,
      nextId,
      resetId,
    }
  }

  function setParentContext(context: HooksContext) {
    addContext(getCurrentContext(), context)
  }

  return {
    createHooksContext,
    getCurrentContext,
    setCurrentContext,
    setParentContext,
    reset,
  } as const
}
