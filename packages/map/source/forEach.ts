import { Arity2, curry, flip } from '@typed/lambda'

export const forEach: {
  <A, B>(fn: Arity2<A, B>, map: ReadonlyMap<A, B>): ReadonlyMap<A, B>
  <A, B>(fn: Arity2<A, B>): (map: ReadonlyMap<A, B>) => ReadonlyMap<A, B>
} = curry(__forEach)

function __forEach<A, B>(fn: Arity2<A, B>, map: ReadonlyMap<A, B>): ReadonlyMap<A, B> {
  map.forEach(flip(fn))

  return map
}
