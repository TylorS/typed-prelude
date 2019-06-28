import { Arity2, curry } from '@typed/lambda'

export const map: {
  <A, B, C>(fn: Arity2<A, B, C>, map: ReadonlyMap<A, B>): ReadonlyMap<A, C>
  <A, B, C>(fn: Arity2<A, B, C>): (map: ReadonlyMap<A, B>) => ReadonlyMap<A, C>
} = curry(__map)

function __map<A, B, C>(fn: Arity2<A, B, C>, map: ReadonlyMap<A, B>): ReadonlyMap<A, C> {
  const newMap = new Map()

  for (const [a, b] of map) {
    newMap.set(a, fn(a, b))
  }

  return newMap
}
