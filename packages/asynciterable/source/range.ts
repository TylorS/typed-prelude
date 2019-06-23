import { curry } from '@typed/lambda'

/**
 * Inclusive range by 1
 */
export const range: {
  (from: number, to: number): AsyncIterable<number>
  (from: number): (to: number) => AsyncIterable<number>
} = curry((from: number, to: number) => __rangeBy(from, to, 1))

/**
 * Inclusive range by given increment
 */
export const rangeBy: {
  (from: number, to: number, by: number): AsyncIterable<number>
  (from: number, to: number): (by: number) => AsyncIterable<number>
  (from: number): {
    (to: number, by: number): AsyncIterable<number>
    (to: number): (by: number) => AsyncIterable<number>
  }
} = curry(__rangeBy)

async function* __rangeBy(from: number, to: number, by: number): AsyncIterable<number> {
  while (from <= to) {
    yield from
    from += by
  }
}
