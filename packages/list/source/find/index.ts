import { curry, Predicate } from '@typed/lambda'
import { map, Maybe } from '@typed/maybe'
import { findIndex } from '../findIndex'
import { NoInfer } from '../NoInfer'

/**
 * Search for a value in a list given a predicate.
 * @param predicate :: (a -> boolean)
 * @param list :: [a]
 * @returns :: Maybe a
 */
export const find: {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<A>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<A>
} = curry(
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<A> =>
    map((index: number) => list[index], findIndex(predicate, list)),
) as {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<A>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<A>
}
