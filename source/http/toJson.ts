import { Effect } from '@typed/effect'
import { tryCatch } from '@typed/either'
import { chain, Future } from '@typed/future'
import { Request } from './types'

export const toJson = <A extends {} = {}>(request: Request<A>): Future<Error, A> =>
  chain(
    ({ responseText }) => Effect.fromIO(() => tryCatch(() => JSON.parse(responseText))),
    request,
  )
