import { IO } from '../lambda'
import { Either } from './Either'

export function tryCatch<A, B = Error>(fn: IO<A>): Either<B, A> {
  try {
    return Either.of(fn())
  } catch (e) {
    return Either.left(e)
  }
}
