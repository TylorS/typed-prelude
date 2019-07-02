export * from './createHistoryEnv'
export * from './parseQueries'
export * from './pushState'
export * from './replaceState'
export * from './scopeHistoryEnv'
export * from './types'

export { addQueryParameters } from '@typed/common'
import { createHistoryEnv } from './createHistoryEnv'

// ALLOW Overriding Default HREF via node environment variables
const DEFAULT_HREF: string = process.env.TYPED_HISTORY_HREF || '/'

export const { history, location } = createHistoryEnv(DEFAULT_HREF)
