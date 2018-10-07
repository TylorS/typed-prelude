import { Effect } from '../effect'
import { tryCatch } from '../either'
import { chain, Future } from '../future'
import { Request } from './types'

export const toJson = <A extends {} = {}>(request: Request<A>): Future<Error, A> =>
  chain(
    ({ responseText }) => Effect.fromIO(() => tryCatch(() => JSON.parse(responseText))),
    request,
  )
