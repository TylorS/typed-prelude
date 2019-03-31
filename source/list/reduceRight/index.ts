import { curry } from '@typed/lambda'

export const reduceRight = curry(
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B, list: ReadonlyArray<A>): B =>
    list.reduceRight(fn, seed),
) as {
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B, list: ReadonlyArray<A>): B
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B): (list: ReadonlyArray<A>) => B
  <A, B>(fn: (accumulator: B, value: A, index: number) => B): {
    (seed: B, list: ReadonlyArray<A>): B
    (seed: B): (list: ReadonlyArray<A>) => B
  }
}
