import { curry } from '../../lambda'

export const reduce: {
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B, list: A[]): B
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B): (list: A[]) => B
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B): {
    (seed: B, list: A[]): B
    (seed: B): (list: A[]) => B
  }
} = curry(
  <A, B>(fn: (accumulator: B, value: A, index: number, list: A[]) => B, seed: B, list: A[]): B =>
    list.reduce(fn, seed),
)
