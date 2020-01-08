import { Arity2, curry } from '@typed/lambda'

/**
 * Combine a list of lists together by applying a function to
 * the values contained in a list.
 * @param fn :: (a -> [b])
 * @param list :: [a]
 * @returns :: [b]
 */
export const chain = curry((f, list) => unnest(list.map(f))) as {
  <A, B>(fn: Arity2<A, number, ReadonlyArray<B>>, list: ReadonlyArray<A>): B[]
  <A, B>(fn: Arity2<A, number, ReadonlyArray<B>>): (list: ReadonlyArray<A>) => B[]
}

/**
 * Flatten a list of lists with a depth of 1.
 * @param nestedList :: [[a]]
 * @returns:: [a]
 */
export function unnest<A>(nestedList: ReadonlyArray<ReadonlyArray<A>>): A[] {
  const unnestedList: A[] = []

  for (const list of nestedList) {
    unnestedList.push(...list)
  }

  return unnestedList
}
