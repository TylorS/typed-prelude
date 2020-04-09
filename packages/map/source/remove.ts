import { curry } from '@typed/lambda'
import { withMutations } from './withMutations'

export const remove: {
  <A, B>(key: A, map: ReadonlyMap<A, B>): ReadonlyMap<A, B>
  <A, B>(key: A): (map: ReadonlyMap<A, B>) => ReadonlyMap<A, B>
} = curry(
  <A, B>(key: A, map: ReadonlyMap<A, B>): ReadonlyMap<A, B> =>
    withMutations((x) => x.delete(key), map),
)
