import { curry } from '@typed/lambda'

/**
 * Add a value at the beginning of a list
 * @param value :: a
 * @param list :: [a]
 * @returns :: [a]
 */
export const prepend = curry(<A>(value: A, list: A[]): A[] => [value].concat(list)) as {
  <A>(value: A, list: ReadonlyArray<A>): A[]
  <A>(value: A): (list: ReadonlyArray<A>) => A[]
}
