import { Env, withEnv } from '@typed/env'
import { Uuid, UuidEnv } from './types'
import { uuid4 } from './uuid4'

/** Create a random uuid */
export const uuid: Env<UuidEnv, Uuid> = withEnv<UuidEnv, Uuid>(({ randomUuidSeed }) =>
  uuid4(randomUuidSeed()),
)
