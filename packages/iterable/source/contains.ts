import { curry } from '@typed/lambda'
import { equals } from '@typed/logic'

export const contains: {
  <A>(value: A, iterable: Iterable<A>): boolean
  <A>(value: A): (iterable: Iterable<A>) => boolean
} = curry(__contains)

function __contains<A>(value: A, iterable: Iterable<A>): boolean {
  for (const x of iterable) {
    if (equals(x, value)) {
      return true
    }
  }

  return false
}
