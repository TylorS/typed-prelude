import { Maybe } from '@typed/maybe'

/**
 * Returns the head of a list
 * @param list :: [a]
 * @returns :: Maybe a
 */
export const head = <A>(list: ArrayLike<A>) => Maybe.of(list[0])
