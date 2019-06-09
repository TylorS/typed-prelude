import { isBrowser } from '@typed/common'
import { ArgsOf } from '@typed/lambda'
import { createSubscription, Subscription } from '@typed/subscription'
import { ServerHistory, ServerLocation } from './server'
import { HistoryEnv } from './types'

/**
 * Create A History Environment that works in browser and non-browser environments
 * @param href :: string Fallback for when in non-browser environment
 */
export function createHistoryEnv<A = null>(href: string = '/'): HistoryEnv<A> {
  if (isBrowser) {
    return { location, history }
  }

  const serverLocation = new ServerLocation(href)
  const serverHistory = new ServerHistory(serverLocation)
  serverLocation.setHistory(serverHistory)

  return {
    location: serverLocation,
    history: serverHistory,
  }
}

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

  return history
}
