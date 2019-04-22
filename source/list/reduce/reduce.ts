import { curry } from '@typed/lambda'

/**
 * Reduce over a list of values.
 * @param f :: (b -> a -> b)
 * @param seed :: b
 * @param list :: [a]
 * @returns :: b
 */
export const reduce = curry(
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B, list: ReadonlyArray<A>): B =>
    list.reduce(fn, seed),
) as {
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B, list: ReadonlyArray<A>): B
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B): (list: ReadonlyArray<A>) => B
  <A, B>(fn: (accumulator: B, value: A, index: number) => B): {
    (seed: B, list: ReadonlyArray<A>): B
    (seed: B): (list: ReadonlyArray<A>) => B
  }
}
