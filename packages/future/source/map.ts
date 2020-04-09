import { Arity1, curry } from '@typed/lambda'
import { chain } from './chain'
import { Future } from './Future'

export const map = curry(__map) as {
  <E, A, B, C>(fn: Arity1<B, C>, future: Future<E, A, B>): Future<E, A, C>
  <B, C>(fn: Arity1<B, C>): <E, A>(future: Future<E, A, B>) => Future<E, A, C>
}

function __map<E, A, B, C>(fn: Arity1<B, C>, future: Future<E, A, B>): Future<E, A, C> {
  return chain((b) => Future.of(fn(b)) as Future<E, A, C>, future) as Future<E, A, C>
}
