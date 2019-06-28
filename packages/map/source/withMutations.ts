import { curry } from '@typed/lambda'

/** Create an updated ReadonlyMap by mutating a copy of the initial map */
export const withMutations: {
  <A, B>(fn: (map: Map<A, B>) => void, map: ReadonlyMap<A, B>): ReadonlyMap<A, B>
  <A, B>(fn: (map: Map<A, B>) => void): (map: ReadonlyMap<A, B>) => ReadonlyMap<A, B>
} = curry(__withMutations)

function __withMutations<A, B>(
  fn: (map: Map<A, B>) => void,
  map: ReadonlyMap<A, B>,
): ReadonlyMap<A, B> {
  const newMap = new Map(map)

  fn(newMap)

  return newMap
}
