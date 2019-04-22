import { UuidEnv } from '../types'
import { BrowserGenerator } from './BrowserGenerator'
import { isBrowser } from './constants'
import { NodeGenerator } from './NodeGenerator'

/**
 * Create a random uuid seed. Compatible with evergreen browsers, ie11, and node.
 */
export const { randomUuidSeed }: UuidEnv = isBrowser ? new BrowserGenerator() : new NodeGenerator()
