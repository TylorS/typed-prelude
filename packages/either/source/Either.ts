import { Left, LEFT } from './Left'
import { Right, RIGHT } from './Right'

/**
 * Either data structure. Extremely useful for handling errors or different
 * logic paths without the use of if-statements.
 * @name Either
 * @type
 */
export type Either<A, B> = Left<A> | Right<B>

export namespace Either {
  /**
   * Creates an Either<A, B> that is of type Right<B>
   * @name Either.of<A>(value: A): Either<B, A>
   */
  export const of: <A = unknown, B = unknown>(value: B) => Either<A, B> = Right.of
  /**
   * Creates an Either<A, B> that is of type Left<A>
   * @name Either.left<A>(value: A): Either<A, B>
   */
  export const left = Left.of as <A, B = unknown>(value: A) => Either<A, B>
}

/**
 * Returns true if an Either<A, B> is type Left<A>
 * @name isLeft<A, B>(either: Either<A, B>): Either is Left<A>
 */
export function isLeft<A, B>(either: Either<A, B>): either is Left<A> {
  return either.hasOwnProperty(LEFT)
}

/**
 * Returns true if an Either<A, B> is type Right<B>
 * @name isRight<A, B>(either: Either<A, B>): either is Right<B>
 */
export function isRight<A, B>(either: Either<A, B>): either is Right<B> {
  return either.hasOwnProperty(RIGHT)
}
