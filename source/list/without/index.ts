import { curry } from '../../lambda'
import { includes } from '../includes'

/**
 * Returns a list without the specified values.
 * @name without<A>(values: A[], list: A[]): Array<A>
 */
export const without: {
  <A>(values: A[], list: A[]): A[]
  <A>(values: A[]): (list: A[]) => A[]
} = curry(__without)

function __without<A>(values: A[], list: A[]): A[] {
  return list.filter(x => !includes(x, values))
}
