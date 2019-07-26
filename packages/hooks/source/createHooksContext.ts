import { Timer } from '@typed/timer'
import { defaultTimer } from './manager'
import { Hook, HooksContext } from './types'

export function createHooksContext(
  fn: (...args: any) => any,
  timer: Timer = defaultTimer,
): HooksContext {
  const state: HooksContext['state'] = createFnContext(fn)
  const hooks = new Map<number, Hook>()
  const nextId = () => state.currentId++
  const resetId = () => (state.currentId = 0)
  const dispose = () => {
    hooks.forEach(x => x.dispose())
    hooks.clear()
  }
  const update = () =>
    state.shouldRerunHooks
      ? state.fn.apply(state.fnContext, state.fnArguments)
      : (state.hasBeenUpdated = true)

  return {
    state,
    timer,
    hooks,
    update,
    dispose,
    nextId,
    resetId,
  }
}

const createFnContext = (fn: (...args: any) => any) => ({
  hasBeenUpdated: true,
  shouldRerunHooks: true,
  fn,
  fnArguments: [],
  fnContext: null,
  returnValue: null,
  currentId: 0,
})
