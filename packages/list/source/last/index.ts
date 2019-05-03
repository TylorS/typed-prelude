import { Maybe, Nothing } from '@typed/maybe'

/**
 * Returns the last value in a given list
 * @param list :: [a]
 * @returns :: Maybe a
 */
export const last = <A>(list: ArrayLike<A>): Maybe<A> =>
  list.length === 0 ? Nothing : Maybe.of(list[list.length - 1])
