import { Effect } from '@typed/effects'
import { Uuid, UuidEnv } from './types'
import { uuid } from './uuid'

export function* withUuid<A>(f: (uuid: Uuid) => A): Effect<UuidEnv, A> {
  return f(yield* uuid())
}
