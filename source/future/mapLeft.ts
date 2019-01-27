import { map as mapEff } from '@typed/effect'
import { isRight, mapLeft as mapEither } from '@typed/either'
import { Arity1, curry } from '@typed/lambda'
import { Future } from './Future'

export const mapLeft = curry(__mapLeft) as {
  <A, B, C>(f: Arity1<A, C>, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: Arity1<A, C>): (future: Future<A, B>) => Future<C, B>
}

function __mapLeft<A, B, C>(f: Arity1<A, C>, future: Future<A, B>): Future<C, B> {
  return mapEff(either => (isRight(either) ? either : mapEither(f, either)), future)
}
