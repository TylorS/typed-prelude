import { chain as chainEff, Effect } from '@typed/effect'
import { fromLeft, isRight } from '@typed/either'
import { Arity1, curry } from '@typed/lambda'
import { Future } from './Future'

export const chainLeft = curry(__chainLeft) as {
  <A, B, C>(f: Arity1<A, Future<C, B>>, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: Arity1<A, Future<C, B>>): (future: Future<A, B>) => Future<C, B>
}

function __chainLeft<A, B, C>(f: Arity1<A, Future<C, B>>, future: Future<A, B>): Future<C, B> {
  return chainEff(either => (isRight(either) ? Effect.of(either) : f(fromLeft(either))), future)
}
