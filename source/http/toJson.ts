import { chain as chainEither, Either, tryCatch } from '@typed/either'
import { Env, map } from '@typed/env'
import { Loadable, map as mapLoadable } from '@typed/loadable'
import { HttpEnv, HttpRequest } from './types'

export const toJson = <A>(request: HttpRequest): Env<HttpEnv, Loadable<Either<Error, A>>> =>
  map(
    mapLoadable(chainEither(({ responseText }) => tryCatch(() => JSON.parse(responseText)))),
    request,
  )
