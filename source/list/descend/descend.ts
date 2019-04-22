import { ComparableValues, ComparisonNumbers, curry } from '@typed/lambda'

/**
 * Sort a function in descending order given a comparison function.
 * @param f :: (a -> b)
 * @param a :: a
 * @param b :: a
 * @returns :: int
 */
export const descend = curry(function descend<A, B extends ComparableValues>(
  f: (a: A) => B,
  a: A,
  b: A,
): ComparisonNumbers {
  const aa = f(a)
  const bb = f(b)

  if (aa < bb) {
    return 1
  }

  if (aa > bb) {
    return -1
  }

  return 0
}) as {
  <A, B extends ComparableValues>(f: (a: A) => B, a: A, b: A): ComparisonNumbers
  <A, B extends ComparableValues>(f: (a: A) => B, a: A): (b: A) => ComparisonNumbers
  <A, B extends ComparableValues>(f: (a: A) => B): {
    (a: A, b: A): ComparisonNumbers
    (a: A): (b: A) => ComparisonNumbers
  }
}
