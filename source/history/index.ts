export * from './historyResources'
export * from './parseQueries'
export * from './pushState'
export * from './replaceState'
export * from './types'

export * from '../common/addQueryParameters'
export * from '../common/pathJoin'

import { isBrowser } from '../common/executionEnvironment'
import { historyResources } from './historyResources'

// ALLOW Overriding Default HREF via node environment variables
const DEFAULT_HREF: string | undefined = !isBrowser ? process.env.TYPED_HISTORY_HREF : undefined

export const { history, location } = historyResources(DEFAULT_HREF)
