import { curry, Is, Predicate } from '@typed/lambda'

/**
 * Filter a list given a predicate.
 * @param predicate :: (a -> boolean)
 * @param list :: [a]
 * @returns :: [a]
 */
export const filter: {
  <A, B extends A>(predicate: Is<B>, list: ReadonlyArray<A>): B[]
  <B>(predicate: Is<B>): <A>(list: ReadonlyArray<A>) => B[]

  <A>(predicate: Predicate<A>, list: ReadonlyArray<A>): A[]
  <A>(predicate: Predicate<A>): (list: ReadonlyArray<A>) => A[]
} = curry(<A>(predicate: Predicate<A>, list: ReadonlyArray<A>): A[] => list.filter(predicate)) as {
  <A, B extends A>(predicate: Is<B>, list: ReadonlyArray<A>): B[]
  <B>(predicate: Is<B>): <A>(list: ReadonlyArray<A>) => B[]

  <A>(predicate: Predicate<A>, list: ReadonlyArray<A>): A[]
  <A>(predicate: Predicate<A>): (list: ReadonlyArray<A>) => A[]
}
