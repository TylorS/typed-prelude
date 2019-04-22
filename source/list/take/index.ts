import { curry } from '@typed/lambda'

/**
 * Take `n` number of values from the beginning of a list
 * @param n :: int
 * @param list :: [a]
 * @returns :: [a]
 */
export const take = curry(<A>(n: number, list: ReadonlyArray<A>) =>
  list.slice(0, n < 0 ? Infinity : n),
) as {
  <A>(n: number, list: ReadonlyArray<A>): A[]
  <A>(n: number): (list: ReadonlyArray<A>) => A[]
}
