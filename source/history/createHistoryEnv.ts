import { isBrowser } from '@typed/common/executionEnvironment'
import { ServerHistory, ServerLocation } from './server'
import { HistoryEnv } from './types'

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
