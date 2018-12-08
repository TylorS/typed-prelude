import { curry } from '../../lambda'
import { equals } from '../../logic'
import { slice } from '../slice'

export const endsWith = curry(<A>(expected: A[], list: ArrayLike<A>) =>
  equals(expected, slice(list.length - expected.length, list.length, list)),
) as {
  <A>(expected: A[], list: ArrayLike<A>): boolean
  <A>(expected: A[]): (list: ArrayLike<A>) => boolean
}
