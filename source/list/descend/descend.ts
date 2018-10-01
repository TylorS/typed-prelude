import { ComparisonNumbers, curry } from '../../lambda'

export const descend: {
  <A, B>(f: (a: A) => B, a: A, b: A): ComparisonNumbers
  <A, B>(f: (a: A) => B, a: A): (b: A) => ComparisonNumbers
  <A, B>(f: (a: A) => B): {
    (a: A, b: A): ComparisonNumbers
    (a: A): (b: A) => ComparisonNumbers
  }
} = curry(function descend<A, B>(f: (a: A) => B, a: A, b: A): ComparisonNumbers {
  const aa = f(a)
  const bb = f(b)

  if (aa < bb) {
    return 1
  }

  if (aa > bb) {
    return -1
  }

  return 0
})
