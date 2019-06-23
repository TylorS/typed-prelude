import { curry } from '@typed/lambda'

export const forEach: {
  <A>(fn: (value: A) => void, iterable: Iterable<A>): void
  <A>(fn: (value: A) => void): (iterable: Iterable<A>) => void
} = curry(__forEach)

export function __forEach<A>(fn: (value: A) => void, iterable: Iterable<A>): void {
  for (const x of iterable) {
    fn(x)
  }
}
