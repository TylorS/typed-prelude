import { Env, withEnv } from '@typed/env'
import { StorageEnv } from './types'

/**
 * Clear storage
 */
export const clear: Env<StorageEnv, void> = withEnv<StorageEnv, void>(({ storage }) =>
  storage.clear(),
)
