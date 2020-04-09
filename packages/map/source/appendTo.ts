import { curry } from '@typed/lambda'
import { withMutations } from './withMutations'

export const appendTo: {
  <A, B>(key: A, value: B, map: ReadonlyMap<A, ReadonlyArray<B>>): ReadonlyMap<A, ReadonlyArray<B>>
  <A, B>(key: A, value: B): (
    map: ReadonlyMap<A, ReadonlyArray<B>>,
  ) => ReadonlyMap<A, ReadonlyArray<B>>
  <A, B>(key: A): {
    (value: B, map: ReadonlyMap<A, ReadonlyArray<B>>): ReadonlyMap<A, ReadonlyArray<B>>
    (value: B): (map: ReadonlyMap<A, ReadonlyArray<B>>) => ReadonlyMap<A, ReadonlyArray<B>>
  }
} = curry(__appendTo)

function __appendTo<A, B>(
  key: A,
  value: B,
  map: ReadonlyMap<A, ReadonlyArray<B>>,
): ReadonlyMap<A, ReadonlyArray<B>> {
  return withMutations((x) => {
    const currentValues = x.get(key) || []

    x.set(key, [...currentValues, value])
  }, map)
}
