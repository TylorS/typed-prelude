import { ComparisonNumbers, curry } from '@typed/lambda'

/**
 * Sort a list
 * @param sortFn :: Comparable b => (a -> a -> b)
 * @param list :: [a]
 * @returns :: [a]
 */
export const sort = curry(<A>(sortFn: SortFn<A>, list: ReadonlyArray<A>): A[] =>
  list.slice().sort(sortFn),
) as {
  <A>(sortFn: SortFn<A>, list: ReadonlyArray<A>): A[]
  <A>(sortFn: SortFn<A>): (list: ReadonlyArray<A>) => A[]
}

export type SortFn<A> = (a: A, b: A) => ComparisonNumbers
