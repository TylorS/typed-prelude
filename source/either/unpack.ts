import { Either, isLeft } from './Either'

import { Arity1, curry } from '@typed/lambda'
import { fromLeft } from './Left'
import { fromRight } from './Right'

/**
 * Extracts the value from an `Either` applying function `f` if the `Either<A, B>` is
 * `Left<A>` or function `g` if `Right<B>`.
 * @name unpack<A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>, either: Either<A, B>): C
 */
export const unpack = curry(__unpack) as {
  <A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>, either: Either<A, B>): C
  <A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>): (either: Either<A, B>) => C
  <A, B, C>(f: Arity1<A, C>): UnpackArity2A<A, B, C>
  <A, C>(f: Arity1<A, C>): UnpackArity2B<A, C>
}

export type UnpackArity2A<A, B, C> = {
  (g: Arity1<B, C>, either: Either<A, B>): C
  (g: Arity1<B, C>): (either: Either<A, B>) => C
}

export type UnpackArity2B<A, C> = {
  <B>(g: Arity1<B, C>, either: Either<A, B>): C
  <B>(g: Arity1<B, C>): (either: Either<A, B>) => C
}

function __unpack<A, B, C>(f: (value: A) => C, g: (value: B) => C, either: Either<A, B>): C {
  return isLeft(either) ? f(fromLeft(either)) : g(fromRight(either))
}
