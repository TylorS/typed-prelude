import { curry } from '@typed/lambda'
import { includes } from '../includes'

/**
 * Returns a list without the specified values.
 * @name without<A>(values: A[], list: A[]): Array<A>
 */
export const without = curry(__without) as {
  <A>(values: A[], list: ReadonlyArray<A>): A[]
  <A>(values: A[]): (list: ReadonlyArray<A>) => A[]
}

function __without<A>(values: A[], list: ReadonlyArray<A>): A[] {
  return list.filter((x) => !includes(x, values))
}
