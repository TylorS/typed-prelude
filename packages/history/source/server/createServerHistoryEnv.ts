import { HistoryEnv } from '../types'
import { ServerHistory } from './ServerHistory'
import { ServerLocation } from './ServerLocation'

/**
 * Create A History Environment that works in browser and non-browser environments
 * @param href :: initial href to use
 */
export function createServerHistoryEnv<A>(href: string = '/'): HistoryEnv<A> {
  const serverLocation = new ServerLocation(href)
  const serverHistory = new ServerHistory(serverLocation)
  serverLocation.setHistory(serverHistory)

  return {
    location: serverLocation,
    history: serverHistory,
  }
}
