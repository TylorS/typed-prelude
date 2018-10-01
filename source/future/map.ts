import { map as mapEff } from '../effect'
import { isLeft, map as mapEither } from '../either'
import { Arity1, curry } from '../lambda'
import { Future } from './Future'

export const map: {
  <A, B, C>(f: Arity1<B, C>, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: Arity1<B, C>): (future: Future<A, B>) => Future<A, C>
} = curry(__map)

function __map<A, B, C>(f: Arity1<B, C>, future: Future<A, B>): Future<A, C> {
  return mapEff(either => (isLeft(either) ? either : mapEither(f, either)), future)
}
