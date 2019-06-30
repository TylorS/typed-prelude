import { curry } from '@typed/lambda'

/**
 * Drop `n` amount of values from the beginning of a list.
 * @param quantity :: number
 * @param list :: [a]
 * @returns :: [a]
 */
export const drop = curry(<A>(quantity: number, list: ReadonlyArray<A>): A[] =>
  list.slice(quantity),
) as {
  <A>(quantity: number, list: ReadonlyArray<A>): A[]
  <A>(quantity: number): (list: ReadonlyArray<A>) => A[]
}
