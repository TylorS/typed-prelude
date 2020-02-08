import { Effect } from '@typed/effects'
import { Env, withEnv } from '@typed/env'
import { Uuid, UuidEnv } from './types'
import { uuid4 } from './uuid4'

/** Create a random uuid */
export const uuid = (): Effect<Env<UuidEnv, Uuid>, Uuid, Uuid> =>
  Effect.fromEnv(
    withEnv<UuidEnv, Uuid>(({ randomUuidSeed }) => uuid4(randomUuidSeed())),
  )
