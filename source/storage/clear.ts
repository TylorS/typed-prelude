import { withEnv } from '@typed/env'
import { StorageEnv } from './types'

export const clear = withEnv<StorageEnv, void>(({ storage }) => storage.clear())
