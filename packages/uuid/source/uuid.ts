import { co, Effect, get } from '@typed/effects'
import { Uuid, UuidEnv } from './types'
import { uuid4 } from './uuid4'

/** Create a random uuid */
export const uuid: () => Effect<UuidEnv, Uuid> = co(function* uuid() {
  const { randomUuidSeed } = yield* get<UuidEnv>()

  return uuid4(randomUuidSeed())
})
