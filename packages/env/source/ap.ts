import { Arity1, curry } from '@typed/lambda'
import { chain } from './chain'
import { Env } from './Env'
import { map } from './map'

/**
 * Apply a functoin contained in one environment to the value of another.
 * @param fn :: Env a (b -> c)
 * @param value :: Env a b
 * @returns :: Env a c
 */
export const ap: {
  <A, B, C, D>(fn: Env<A, Arity1<B, C>>, value: Env<D, B>): Env<A & D, C>
  <A, B, C>(fn: Env<A, Arity1<B, C>>): <D>(value: Env<D, B>) => Env<A & D, C>
} = curry(__ap) as {
  <A, B, C, D>(fn: Env<A, Arity1<B, C>>, value: Env<D, B>): Env<A & D, C>
  <A, B, C>(fn: Env<A, Arity1<B, C>>): <D>(value: Env<D, B>) => Env<A & D, C>
}

function __ap<A, B, C, D>(fn: Env<A, Arity1<B, C>>, value: Env<D, B>): Env<A & D, C> {
  return chain(f => map(f, value), fn)
}
