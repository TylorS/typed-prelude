import { curry } from '@typed/lambda'

/**
 * Split a list into a list of lists containing a specified amount of values.
 * @param amount :: int
 * @param list :: [a]
 * @returns :: [[a]]
 */
export const splitEvery = curry(function splitEvery<A>(
  amount: number,
  list: ReadonlyArray<A>,
): A[][] {
  if (amount <= 0) {
    return [list.slice()]
  }

  const result: A[][] = []
  let i = 0

  while (i < list.length) {
    result.push(list.slice(i, (i += amount)))
  }

  return result
}) as {
  <A>(amount: number, list: ReadonlyArray<A>): A[][]
  <A>(amount: number): (list: ReadonlyArray<A>) => A[][]
}
