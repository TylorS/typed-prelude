import { chain as chainEff, Effect } from '@typed/effect'
import { fromRight, isLeft } from '@typed/either'
import { Arity1, curry } from '@typed/lambda'
import { Future } from './Future'

export const chain = curry(__chain) as {
  <A, B, C>(f: Arity1<B, Future<A, C>>, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: Arity1<B, Future<A, C>>): (future: Future<A, B>) => Future<A, C>
}

function __chain<A, B, C>(f: Arity1<B, Future<A, C>>, future: Future<A, B>): Future<A, C> {
  return chainEff(either => (isLeft(either) ? Effect.of(either) : f(fromRight(either))), future)
}
