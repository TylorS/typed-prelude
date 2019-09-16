import { curry, Predicate } from '@typed/lambda'
import { Just, Maybe, Nothing } from '@typed/maybe'

export const find: {
  <A>(predicate: Predicate<A>, iterable: Iterable<A>): Maybe<A>
  <A>(predicate: Predicate<A>): (iterable: Iterable<A>) => Maybe<A>
} = curry(__find)

function __find<A>(predicate: Predicate<A>, iterable: Iterable<A>): Maybe<A> {
  for (const value of iterable) {
    if (predicate(value)) {
      return Just.of(value)
    }
  }

  return Nothing
}
