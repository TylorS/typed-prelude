import { Env, map } from '@typed/env'
import { Uuid, UuidEnv } from './types'
import { uuid } from './uuid'

export function withUuid<A>(f: (uuid: Uuid) => A): Env<UuidEnv, A> {
  return map(f, uuid)
}
