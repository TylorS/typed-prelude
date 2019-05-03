import { curry } from '@typed/lambda'

/**
 * Concatenate two lists together into one.
 * @param head :: [a]
 * @param tail :: [a]
 * @returns :: [a]
 */
export const concat = curry((a, b) => a.concat(b)) as {
  <A>(head: ReadonlyArray<A>, tail: ReadonlyArray<A>): A[]
  <A>(head: ReadonlyArray<A>): (tail: ReadonlyArray<A>) => A[]
}
