import { Effects } from '@typed/effects'
import { Uuid, UuidEnv } from './types'
import { uuid } from './uuid'

export function* withUuid<A>(f: (uuid: Uuid) => A): Effects<UuidEnv, A> {
  return f(yield* uuid())
}
