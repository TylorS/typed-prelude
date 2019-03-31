import { curry } from '@typed/lambda'

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
