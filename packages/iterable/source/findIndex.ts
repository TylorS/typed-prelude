import { curry, Predicate } from '@typed/lambda'
import { Just, Maybe, Nothing } from '@typed/maybe'

export const findIndex: {
  <A>(predicate: Predicate<A>, iterable: Iterable<A>): Maybe<number>
  <A>(predicate: Predicate<A>): (iterable: Iterable<A>) => Maybe<number>
} = curry(__findIndex)

function __findIndex<A>(predicate: Predicate<A>, iterable: Iterable<A>): Maybe<number> {
  let i = 0

  for (const value of iterable) {
    if (predicate(value)) {
      return Just.of(i)
    }

    i++
  }

  return Nothing
}
