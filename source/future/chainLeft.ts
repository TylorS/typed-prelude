import { chain as chainEff, Effect } from '../effect'
import { fromLeft, isRight } from '../either'
import { Arity1, curry } from '../lambda'
import { Future } from './Future'

export const chainLeft: {
  <A, B, C>(f: Arity1<A, Future<C, B>>, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: Arity1<A, Future<C, B>>): (future: Future<A, B>) => Future<C, B>
} = curry(__chainLeft)

function __chainLeft<A, B, C>(f: Arity1<A, Future<C, B>>, future: Future<A, B>): Future<C, B> {
  return chainEff(either => (isRight(either) ? Effect.of(either) : f(fromLeft(either))), future)
}
