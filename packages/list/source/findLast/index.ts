import { curry, Predicate } from '@typed/lambda'
import { Maybe, Nothing } from '@typed/maybe'
import { NoInfer } from '../NoInfer'

/**
 * Find a value in an array-like starting from the end of the array-like
 * @param predicate :: (a -> boolean)
 * @param list :: [a]
 * @returns :: Maybe a
 */
export const findLast: {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<A>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<A>
} = curry(__findLast) as {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<A>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<A>
}

function __findLast<A>(predicate: Predicate<A>, list: ArrayLike<A>): Maybe<A> {
  for (let i = list.length - 1; i >= 0; --i) {
    const value = list[i]
    if (predicate(value)) {
      return Maybe.of(value)
    }
  }

  return Nothing
}
