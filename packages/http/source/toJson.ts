import { chain, Either, tryCatch } from '@typed/either'
import { HttpResponse } from './types'

export function toJson<A = unknown>(response: Either<Error, HttpResponse<A>>): Either<Error, A> {
  return chain(
    ({ responseText }) => tryCatch<A>(() => JSON.parse(responseText)),
    response,
  )
}
