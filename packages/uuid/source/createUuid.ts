import { randomUuidSeed } from './randomUuidSeed'
import { Uuid } from './types'
import { uuid4 } from './uuid4'

export const createUuid = (): Uuid => uuid4(randomUuidSeed())
