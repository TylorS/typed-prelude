import { curry } from '@typed/lambda'

/**
 * Slice chunks out of a list
 * @param from :: int
 * @param to :: int
 * @param list :: [a]
 * @returns :: [a]
 */
export const slice = curry(<A>(from: number, to: number, list: ArrayLike<A>): A[] =>
  Array.from(list).slice(from, to),
) as {
  <A>(from: number, to: number, list: ArrayLike<A>): A[]
  (from: number, to: number): <A>(list: ArrayLike<A>) => A[]
  (from: number): {
    <A>(to: number, list: ArrayLike<A>): A[]
    (to: number): <A>(list: ArrayLike<A>) => A[]
  }
}
