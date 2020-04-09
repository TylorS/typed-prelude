import { Compact } from '@typed/common'
import { Left, unpack } from '@typed/either'
import { chain as chainEnv, Pure } from '@typed/env'
import { curry } from '@typed/lambda'
import { Future } from './Future'

export const chain = curry(__chain) as {
  <E1, E2, A, B, C>(fn: (value: B) => Future<E2, A, C>, future: Future<E1, A, B>): Future<
    Compact<E1 & E2>,
    A,
    C
  >
  <E2, A, B, C>(fn: (value: B) => Future<E2, A, C>): <E1>(
    future: Future<E1, A, B>,
  ) => Future<Compact<E1 & E2>, A, C>
}

function __chain<A, B, C, D, E>(
  fn: (value: A) => Future<B, C, D>,
  future: Future<E, C, A>,
): Future<Compact<B & E>, C, D> {
  return chainEnv(
    (either) => unpack((error) => Pure.of(Left.of(error)) as Future<B, C, D>, fn, either),
    future,
  )
}
