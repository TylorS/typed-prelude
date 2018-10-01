import { curry } from '../../lambda'
import { Tuple } from '../../tuple'

export const splitAt: {
  <A>(index: number, list: A[]): Tuple<A[], A[]>
  <A>(index: number): (list: A[]) => Tuple<A[], A[]>
} = curry(
  <A>(index: number, list: A[]): Tuple<A[], A[]> => [list.slice(0, index), list.slice(index)],
)
