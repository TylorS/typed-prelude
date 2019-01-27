import { curry } from '@typed/lambda'

export const reduce = curry(
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B, list: A[]): B =>
    list.reduce(fn, seed),
) as {
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B, list: A[]): B
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B): (list: A[]) => B
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B): {
    (seed: B, list: A[]): B
    (seed: B): (list: A[]) => B
  }
}
