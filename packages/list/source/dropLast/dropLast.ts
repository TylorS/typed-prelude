import { curry } from '@typed/lambda'

/**
 * Drop `n` amount of items from the end of a list
 * @param quantity :: number
 * @param list :: [a]
 * @returns:: [a]
 */
export const dropLast = curry(<A>(quantity: number, list: ReadonlyArray<A>): A[] =>
  list.slice(0, list.length - quantity),
) as {
  <A>(quantity: number, list: ReadonlyArray<A>): A[]
  <A>(quantity: number): (list: ReadonlyArray<A>) => A[]
}
