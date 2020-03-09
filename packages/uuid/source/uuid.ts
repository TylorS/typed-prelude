import { Effect, get } from '@typed/effects'
import { Uuid, UuidEnv } from './types'
import { uuid4 } from './uuid4'

/** Create a random uuid */
export function* uuid(): Effect<UuidEnv, Uuid> {
  const { randomUuidSeed } = yield* get<UuidEnv>()

  return uuid4(randomUuidSeed())
}
