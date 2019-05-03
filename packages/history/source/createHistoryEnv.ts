import { isBrowser } from '@typed/common'
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
