import { Arity1, curry } from '@typed/lambda'
import { chain } from '../chain'
import { map } from '../map'

/**
 * Apply a list of functions to a list of values.
 */
export const ap = curry(<A, B>(fn: ReadonlyArray<Arity1<A, B>>, value: ReadonlyArray<A>): B[] =>
  chain((f) => map(f, value), fn),
) as {
  <A, B>(fn: ReadonlyArray<Arity1<A, B>>, value: ReadonlyArray<A>): B[]
  <A, B>(fn: ReadonlyArray<Arity1<A, B>>): (value: ReadonlyArray<A>) => B[]
}
