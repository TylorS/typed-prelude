import { map as mapEff } from '@typed/effect'
import { isLeft, map as mapEither } from '@typed/either'
import { Arity1, curry } from '@typed/lambda'
import { Future } from './Future'

export const map = curry(__map) as {
  <A, B, C>(f: Arity1<B, C>, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: Arity1<B, C>): (future: Future<A, B>) => Future<A, C>
}

function __map<A, B, C>(f: Arity1<B, C>, future: Future<A, B>): Future<A, C> {
  return mapEff(either => (isLeft(either) ? either : mapEither(f, either)), future)
}
