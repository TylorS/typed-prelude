import { ComparableValues, ComparisonNumbers, curry } from '../../lambda'

export const ascend = curry(function ascend<A, B extends ComparableValues>(
  f: (a: A) => B,
  a: A,
  b: A,
): ComparisonNumbers {
  const aa = f(a)
  const bb = f(b)

  if (aa < bb) {
    return -1
  }

  if (aa > bb) {
    return 1
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
