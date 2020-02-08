import { ArgsOf } from '@typed/lambda'
import { createSubscription, Subscription } from '@typed/subscription'
import { HistoryEnv } from './types'

export function wrapInSubscription<A>(
  historyEnv: HistoryEnv<A>,
): HistoryEnv<A> & { readonly subscription: Subscription<HistoryEnv<A>> } {
  const subscription = createSubscription<HistoryEnv<A>>()
  const history = wrapHistory(historyEnv, subscription)

  return {
    ...historyEnv,
    history,
    subscription,
  }
}

function wrapHistory(
  { history, location }: HistoryEnv,
  subscription: Subscription<HistoryEnv>,
): History {
  const pushState = (...args: ArgsOf<History['pushState']>) => {
    history.pushState(...args)
    onChange()
  }
  const replaceState = (...args: ArgsOf<History['replaceState']>) => {
    history.replaceState(...args)
    onChange()
  }
  const back = () => {
    history.back()
    onChange()
  }
  const forward = () => {
    history.forward()
    onChange()
  }
  const go = (amount: number) => {
    history.go(amount)
    onChange()
  }

  const updatedHistory = {
    pushState,
    replaceState,
    back,
    forward,
    go,
    get length() {
      return history.length
    },
    set scrollRestoration(mode: History['scrollRestoration']) {
      history.scrollRestoration = mode
    },
    get scrollRestoration() {
      return history.scrollRestoration
    },
    get state() {
      return history.state
    },
  }

  function onChange() {
    subscription.publish({ history: updatedHistory, location })
  }

  return updatedHistory
}
