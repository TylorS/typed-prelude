import { Compact } from '@typed/common'
import * as E from '@typed/either'
import { Resume } from '@typed/env'
import { Arity1, curry } from '@typed/lambda'
import { chain } from './chain'
import { Future } from './Future'
import { map } from './map'

export const ap = curry(__ap) as {
  <E1, E2, A, B, C>(fn: Future<E1, A, Arity1<B, C>>, value: Future<E2, A, B>): Future<
    Compact<E1 & E2>,
    A,
    C
  >

  <E1, A, B, C>(fn: Future<E1, A, Arity1<B, C>>): <E2>(
    value: Future<E2, A, B>,
  ) => Future<Compact<E1 & E2>, A, C>
}

export const apSeq = curry(__apSeq) as {
  <E1, E2, A, B, C>(fn: Future<E1, A, Arity1<B, C>>, value: Future<E2, A, B>): Future<
    Compact<E1 & E2>,
    A,
    C
  >

  <E1, A, B, C>(fn: Future<E1, A, Arity1<B, C>>): <E2>(
    value: Future<E2, A, B>,
  ) => Future<Compact<E1 & E2>, A, C>
}

function __ap<E1, E2, A, B, C>(
  fn: Future<E1, A, Arity1<B, C>>,
  value: Future<E2, A, B>,
): Future<Compact<E1 & E2>, A, C> {
  return (c) => Resume.chain(([f, v]) => Resume.of(E.ap(f, v)), Resume.combine(fn(c), value(c)))
}

function __apSeq<E1, E2, A, B, C>(
  fn: Future<E1, A, Arity1<B, C>>,
  value: Future<E2, A, B>,
): Future<Compact<E1 & E2>, A, C> {
  return chain((f) => map(f, value), fn)
}
