import { curry } from '@typed/lambda'
import { Tuple } from '@typed/tuple'

/**
 * Split a list into two parts at a given index
 */
export const splitAt = curry(
  <A>(index: number, list: ReadonlyArray<A>): Tuple<A[], A[]> => [
    list.slice(0, index),
    list.slice(index),
  ],
) as {
  <A>(index: number, list: ReadonlyArray<A>): Tuple<A[], A[]>
  <A>(index: number): (list: ReadonlyArray<A>) => Tuple<A[], A[]>
}
