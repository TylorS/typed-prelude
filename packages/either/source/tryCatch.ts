import { IO } from '@typed/lambda'
import { Either } from './Either'

/**
 * Wrap a function that could fail in an Either
 * @param fn
 */
export function tryCatch<A, B = Error>(fn: IO<A>): Either<B, A> {
  try {
    return Either.of(fn())
  } catch (e) {
    return Either.left(e)
  }
}
