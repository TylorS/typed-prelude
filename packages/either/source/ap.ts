import { curry } from '@typed/lambda'
import { chain } from './chain'
import { Either } from './Either'
import { map } from './map'

/**
 * Applies the function contains in an `Either` to the value contained in a
 * second `Either`.
 * @name ap<A, B, C>(fn: Either<A, (value: B) => C>, value: Either<A, B>): Either<A, C>
 */
export const ap = curry(__ap) as {
  <A, B, C>(fn: Either<A, (value: B) => C>, value: Either<A, B>): Either<A, C>
  <A, B, C>(fn: Either<A, (value: B) => C>): (value: Either<A, B>) => Either<A, C>
}

function __ap<A, B, C>(fn: Either<A, (value: B) => C>, value: Either<A, B>): Either<A, C> {
  return chain((f) => map(f, value), fn)
}
