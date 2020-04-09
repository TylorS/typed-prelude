import { Arity1 } from '@typed/lambda'
import { chain } from './chain'
import { map } from './map'

/**
 * Apply a fn contained in a promise to the value of a promise
 * @param fn :: Promise (a -> b)
 * @param value :: Promise a
 * @returns :: Promise b
 */
export const ap = <A, B>(fn: Promise<Arity1<A, B>>, value: Promise<A>): Promise<B> =>
  chain((f) => map(f, value), fn)
