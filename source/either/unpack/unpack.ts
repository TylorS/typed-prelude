import { Either, isLeft } from '../Either'

import { curry } from '../../lambda'
import { fromLeft } from '../Left'
import { fromRight } from '../Right'
import { Unpack } from './types'

/**
 * Extracts the value from an `Either` applying function `f` if the `Either<A, B>` is
 * `Left<A>` or function `g` if `Right<B>`.
 * @name unpack<A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>, either: Either<A, B>): C
 */
export const unpack: Unpack = curry(__unpack)

function __unpack<A, B, C>(f: (value: A) => C, g: (value: B) => C, either: Either<A, B>): C {
  return isLeft(either) ? f(fromLeft(either)) : g(fromRight(either))
}
