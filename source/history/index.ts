export * from './createHistoryEnv'
export * from './parseQueries'
export * from './pushState'
export * from './replaceState'
export * from './types'

export * from '../common/addQueryParameters'
export * from '../common/pathJoin'

import { isBrowser } from '../common/executionEnvironment'
import { createHistoryEnv } from './createHistoryEnv'

// ALLOW Overriding Default HREF via node environment variables
const DEFAULT_HREF: string | undefined = !isBrowser ? process.env.TYPED_HISTORY_HREF : undefined

export const { history, location } = createHistoryEnv(DEFAULT_HREF)
