import { curry, Predicate } from '@typed/lambda'
import { Maybe, Nothing } from '@typed/maybe'
import { NoInfer } from '../NoInfer'

/**
 * Find the index of a value in an array like
 * @param predicate :: (a -> boolean)
 * @param list :: [a]
 * @returns :: Maybe number
 */
export const findIndex: {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<number>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<number>
} = curry(
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<number> => {
    for (let i = 0; i < list.length; ++i) {
      if (predicate(list[i])) {
        return Maybe.of(i)
      }
    }

    return Nothing
  },
) as {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<number>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<number>
}
