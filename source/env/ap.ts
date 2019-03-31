import { Arity1, curry } from '@typed/lambda'
import { chain } from './chain'
import { Env } from './Env'
import { map } from './map'

export const ap = curry(__ap) as {
  <A, B, C, D>(fn: Env<A, Arity1<B, C>>, value: Env<D, B>): Env<A & D, C>
  <A, B, C>(fn: Env<A, Arity1<B, C>>): <D>(value: Env<D, B>) => Env<A & D, C>
}

function __ap<A, B, C, D>(fn: Env<A, Arity1<B, C>>, value: Env<D, B>): Env<A & D, C> {
  return chain(f => map(f, value), fn)
}
