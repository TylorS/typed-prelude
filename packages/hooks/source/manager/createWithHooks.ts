import { Fn } from '@typed/lambda'
import { Timer } from '@typed/timer'
import { HooksContext } from '../types'
import { ContextManager } from './createContextManager'

export type WithHooksOptions = {
  timer?: Timer
  context?: HooksContext
}

export function createWithHooks({
  createHooksContext,
  setCurrentContext,
  setParentContext,
}: ContextManager) {
  return function withHooks<A extends any[], B>(
    fn: Fn<A, B>,
    { timer, context }: WithHooksOptions = {},
  ): Fn<A, B> & { readonly context: HooksContext } {
    const hooksContext = context || createHooksContext(wrappedInHooks, timer)

    setParentContext(hooksContext)

    wrappedInHooks.context = hooksContext

    return wrappedInHooks

    function wrappedInHooks(this: any, ...args: A): B {
      const { state, resetId } = hooksContext
      const { dispose } = setCurrentContext(hooksContext, this, args)

      while (state.hasBeenUpdated) {
        resetId()
        state.hasBeenUpdated = state.shouldRerunHooks = false
        state.returnValue = fn.apply(this, args)
      }

      dispose()

      return state.returnValue
    }
  }
}
