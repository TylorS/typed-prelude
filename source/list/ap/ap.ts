import { Arity1, curry } from '@typed/lambda'
import { chain } from '../chain'
import { map } from '../map'

export const ap = curry(
  <A, B>(fn: Array<Arity1<A, B>>, value: A[]): B[] => chain(f => map(f, value), fn),
) as {
  <A, B>(fn: Array<Arity1<A, B>>, value: A[]): B[]
  <A, B>(fn: Array<Arity1<A, B>>): (value: A[]) => B[]
}
