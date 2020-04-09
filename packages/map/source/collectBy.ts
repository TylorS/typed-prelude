import { forEach } from '@typed/iterable'
import { Arity1, curry } from '@typed/lambda'

/**
 * Index an Iterable into a ReadonlyMap
 */
export const collectBy: {
  <A, B>(fn: Arity1<A, B>, iterable: Iterable<A>): ReadonlyMap<B, ReadonlyArray<A>>
  <A, B>(fn: Arity1<A, B>): (iterable: Iterable<A>) => ReadonlyMap<B, ReadonlyArray<A>>
} = curry(__collectBy)

function __collectBy<A, B>(
  fn: Arity1<A, B>,
  iterable: Iterable<A>,
): ReadonlyMap<B, ReadonlyArray<A>> {
  const map = new Map<B, A[]>()

  forEach((a) => {
    const key = fn(a)
    const values = map.get(key) || []

    values.push(a)

    map.set(key, values)
  }, iterable)

  return map
}
