import { tryCatch } from '@typed/either'
import { Env, map } from '@typed/env'
import { chain, RemoteData } from '@typed/remote-data'
import { HttpEnv, HttpRequest } from './types'

export const toJson = <A = unknown, E extends HttpEnv = HttpEnv>(
  request: HttpRequest<A, E>,
): Env<E, RemoteData<Error, A>> =>
  map(
    chain(({ responseText }) => RemoteData.fromEither(tryCatch<A>(() => JSON.parse(responseText)))),
    request,
  )
