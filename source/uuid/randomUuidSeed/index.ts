import { RandomNumberGenerator } from '../Uuid'
import { BrowserGenerator } from './BrowserGenerator'
import { isBrowser } from './constants'
import { NodeGenerator } from './NodeGenerator'

export const { randomUuidSeed }: RandomNumberGenerator = isBrowser
  ? new BrowserGenerator()
  : new NodeGenerator()
