import { Arity1, curry } from '../lambda'
import { chain } from './chain'
import { Future } from './Future'
import { map } from './map'

export const ap = curry(__ap) as {
  <A, B, C>(fn: Future<A, Arity1<B, C>>, value: Future<A, B>): Future<A, C>
  <A, B, C>(fn: Future<A, Arity1<B, C>>): (value: Future<A, B>) => Future<A, C>
}

function __ap<A, B, C>(fn: Future<A, Arity1<B, C>>, value: Future<A, B>): Future<A, C> {
  return chain(f => map(f, value), fn)
}
