import { isBrowser } from '@typed/env'
import { BrowserGenerator, NodeGenerator } from '@typed/uuid'

export const uuidEnv = isBrowser ? new BrowserGenerator() : new NodeGenerator()
