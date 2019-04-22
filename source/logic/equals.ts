import { Arity1, curry } from '@typed/lambda'
import { equals as _equals } from '../common/equals'

/**
 * Check if two values have value-equality.
 * @param a :: a
 * @param b :: a
 * @returns :: boolean
 */
export const equals = curry(<A>(a: A, b: A) => _equals(a, b, [], [])) as Equals

export type Equals = {
  <A, B = A>(a: A, b: B): B extends A ? boolean : false
  <A>(a: A): <B = A>(b: B) => B extends A ? boolean : false
}

export const equalsBy: {
  <A, B>(by: Arity1<A, B>, a: A, b: A): boolean
  <A, B>(by: Arity1<A, B>, a: A): (b: A) => boolean
  <A, B>(by: Arity1<A, B>): {
    (a: A, b: A): boolean
    (a: A): (b: A) => boolean
  }
} = curry(<A, B>(by: Arity1<A, B>, a: A, b: A): boolean => equals(by(a), by(b)))
