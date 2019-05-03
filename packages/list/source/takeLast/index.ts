import { curry } from '@typed/lambda'
import { drop } from '../drop'

/**
 * Take `n` number of values from the end of a list
 * @param n :: int
 * @param list :: [a]
 * @returns :: [a]
 */
export const takeLast = curry(<A>(n: number, list: ReadonlyArray<A>) =>
  drop(n >= 0 ? list.length - n : 0, list),
) as {
  <A>(n: number, list: ReadonlyArray<A>): A[]
  <A>(n: number): (list: ReadonlyArray<A>) => A[]
}
