import { chain as chainEff, Effect } from '../effect'
import { fromRight, isLeft } from '../either'
import { Arity1, curry } from '../lambda'
import { Future } from './Future'

export const chain: {
  <A, B, C>(f: Arity1<B, Future<A, C>>, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: Arity1<B, Future<A, C>>): (future: Future<A, B>) => Future<A, C>
} = curry(__chain)

function __chain<A, B, C>(f: Arity1<B, Future<A, C>>, future: Future<A, B>): Future<A, C> {
  return chainEff(either => (isLeft(either) ? Effect.of(either) : f(fromRight(either))), future)
}
