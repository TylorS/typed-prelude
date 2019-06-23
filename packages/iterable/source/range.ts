import { curry } from '@typed/lambda'

/**
 * Inclusive range by 1
 */
export const range: {
  (from: number, to: number): Iterable<number>
  (from: number): (to: number) => Iterable<number>
} = curry((from: number, to: number) => __rangeBy(from, to, 1))

/**
 * Inclusive range by given increment
 */
export const rangeBy: {
  (from: number, to: number, by: number): Iterable<number>
  (from: number, to: number): (by: number) => Iterable<number>
  (from: number): {
    (to: number, by: number): Iterable<number>
    (to: number): (by: number) => Iterable<number>
  }
} = curry(__rangeBy)

function* __rangeBy(from: number, to: number, by: number): Iterable<number> {
  while (from <= to) {
    yield from
    from += by
  }
}
