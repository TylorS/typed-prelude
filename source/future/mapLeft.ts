import { map as mapEff } from '../effect'
import { isRight, mapLeft as mapEither } from '../either'
import { Arity1, curry } from '../lambda'
import { Future } from './Future'

export const mapLeft: {
  <A, B, C>(f: Arity1<A, C>, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: Arity1<A, C>): (future: Future<A, B>) => Future<C, B>
} = curry(__mapLeft)

function __mapLeft<A, B, C>(f: Arity1<A, C>, future: Future<A, B>): Future<C, B> {
  return mapEff(either => (isRight(either) ? either : mapEither(f, either)), future)
}
