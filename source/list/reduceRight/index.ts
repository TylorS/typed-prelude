import { curry } from '../../lambda'

export const reduceRight: {
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B, list: A[]): B
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B): (list: A[]) => B
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B): {
    (seed: B, list: A[]): B
    (seed: B): (list: A[]) => B
  }
} = curry(
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B, list: A[]): B =>
    list.reduceRight(fn, seed),
)
