import { chain as chainEither, Either, tryCatch } from '@typed/either'
import { Env, map } from '@typed/env'
import { Loadable, map as mapLoadable } from '@typed/loadable'
import { HttpEnv, HttpRequest } from './types'

export const toJson = <A = unknown, E extends HttpEnv = HttpEnv>(
  request: HttpRequest<A, E>,
): Env<E, Loadable<Either<Error, A>>> =>
  map(
    mapLoadable(chainEither(({ responseText }) => tryCatch(() => JSON.parse(responseText)))),
    request,
  )
