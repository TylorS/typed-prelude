import { curry, Predicate } from '@typed/lambda'
import { Maybe, Nothing } from '@typed/maybe'
import { NoInfer } from '../NoInfer'

/**
 * Find the index of a value in an array-like starting from the end of the array-like.
 * @param predicate :: (a -> boolean)
 * @param list :: [a]
 * @returns :: Maybe a
 */
export const findLastIndex: {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<number>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<number>
} = curry(__findLastIndex) as {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<number>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<number>
}

function __findLastIndex<A>(predicate: Predicate<A>, list: ArrayLike<A>): Maybe<number> {
  for (let i = list.length - 1; i >= 0; --i) {
    if (predicate(list[i])) {
      return Maybe.of(i)
    }
  }

  return Nothing
}
