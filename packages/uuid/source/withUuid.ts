import { Effect } from '@typed/effects'
import { Env } from '@typed/env'
import { Uuid, UuidEnv } from './types'
import { uuid } from './uuid'

export function* withUuid<A>(f: (uuid: Uuid) => A): Effect<Env<UuidEnv, Uuid>, A, Uuid> {
  return f(yield* uuid())
}
