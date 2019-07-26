import { Disposable } from '@typed/disposable'
import { createTimer } from '@typed/timer'
import { HooksContext } from './types'

let currentContext: HooksContext | null = null

export const defaultTimer = createTimer()

export function getCurrentContext(): HooksContext | null {
  return currentContext
}

export function setCurrentContext(
  context: HooksContext | null,
  fnContext: any,
  fnArgs: any,
): Disposable {
  const previousContext = currentContext

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

export function reset() {
  currentContext = null
}
