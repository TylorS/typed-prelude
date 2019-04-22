import { withEnv } from '@typed/env'
import { StorageEnv } from './types'

/**
 * Clear storage
 */
export const clear = withEnv<StorageEnv, void>(({ storage }) => storage.clear())
