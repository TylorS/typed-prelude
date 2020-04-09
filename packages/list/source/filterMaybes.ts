import { curry, Predicate2 } from '@typed/lambda'
import { fromJust, isJust, isNothing, Maybe } from '@typed/maybe'

/**
 * Flatten a list of maybes into a list of values.
 * @param :: [Maybe a]
 * @returns :: [a]
 */
export const filterMaybes = <A>(list: ReadonlyArray<Maybe<A>>): A[] =>
  list.filter(isJust).map(fromJust)

/**
 * Filter a list using a maybe value. Returns the list unchanged if maybe is Nothing.
 * @param predicate :: (a -> b -> boolean)
 * @param maybe :: Maybe a
 * @param list :: [b]
 * @returns :: [b]
 */
export const maybeFilter: {
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>, list: ReadonlyArray<B>): B[]
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>): (list: ReadonlyArray<B>) => B[]
  <A, B>(predicate: Predicate2<A, B>): {
    (maybe: Maybe<A>, list: ReadonlyArray<B>): B[]
    (maybe: Maybe<A>): (list: ReadonlyArray<B>) => B[]
  }
} = curry(<A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>, list: ReadonlyArray<B>): B[] => {
  if (isNothing(maybe)) {
    return list.slice()
  }

  const a = fromJust(maybe)

  return list.filter((b) => predicate(a, b))
}) as {
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>, list: ReadonlyArray<B>): B[]
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>): (list: ReadonlyArray<B>) => B[]
  <A, B>(predicate: Predicate2<A, B>): {
    (maybe: Maybe<A>, list: ReadonlyArray<B>): B[]
    (maybe: Maybe<A>): (list: ReadonlyArray<B>) => B[]
  }
}
