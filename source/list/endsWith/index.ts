import { curry } from '@typed/lambda'
import { equals } from '@typed/logic'
import { slice } from '../slice'

/**
 * Returns true if a list ends with a given set of values otherwise false.
 * @param expected :: [a]
 * @param list :: [a]
 * @returns :: boolean
 */
export const endsWith = curry(<A>(expected: ReadonlyArray<A>, list: ArrayLike<A>) =>
  equals(expected, slice(list.length - expected.length, list.length, list)),
) as {
  <A>(expected: ReadonlyArray<A>, list: ArrayLike<A>): boolean
  <A>(expected: ReadonlyArray<A>): (list: ArrayLike<A>) => boolean
}
