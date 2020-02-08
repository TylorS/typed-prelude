import { HistoryEnv } from './types'

/**
 * Create a HistoryEnv for the browser.
 */
export function createHistoryEnv<A = null>(): HistoryEnv<A> {
  return { location, history }
}
