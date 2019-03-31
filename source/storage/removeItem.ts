import { withEnv } from '@typed/env'
import { StorageEnv } from './types'

export const removeItem = (key: string) =>
  withEnv<StorageEnv, void>(({ storage }) => storage.removeItem(key))
