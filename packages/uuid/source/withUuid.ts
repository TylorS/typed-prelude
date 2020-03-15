import { co, Effect } from '@typed/effects'
import { Uuid, UuidEnv } from './types'
import { uuid } from './uuid'

export const withUuid: <A>(f: (uuid: Uuid) => A) => Effect<UuidEnv, A> = co(function* withUuid(f) {
  return f(yield* uuid())
})
