import { curry } from '@typed/lambda'

export const reduceRight = curry(
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B, list: A[]): B =>
    list.reduceRight(fn, seed),
) as {
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B, list: A[]): B
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B): (list: A[]) => B
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B): {
    (seed: B, list: A[]): B
    (seed: B): (list: A[]) => B
  }
}
