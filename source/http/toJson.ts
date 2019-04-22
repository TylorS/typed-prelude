import { tryCatch } from '@typed/either'
import { Env, map } from '@typed/env'
import { chain, Loadable } from '@typed/loadable'
import { HttpEnv, HttpRequest } from './types'

export const toJson = <A>(request: HttpRequest): Env<HttpEnv, Loadable<Error, A>> =>
  map(
    loadable => chain(({ responseText }) => tryCatch(() => JSON.parse(responseText)), loadable),
    request,
  )
