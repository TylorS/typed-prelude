import { Either, unpack } from '@typed/either'
import { chain as chainEnv, Env, Pure } from '@typed/env'
import { curry } from '@typed/lambda'
import { Future } from './Future'

export const chain = curry(__chain) as {
  <E1, E2, A, B, C>(fn: (value: B) => Future<E2, A, C>, future: Future<E1, A, B>): Future<
    E1 & E2,
    A,
    C
  >
  <E2, A, B, C>(fn: (value: B) => Future<E2, A, C>): <E1>(
    future: Future<E1, A, B>,
  ) => Future<E1 & E2, A, C>
}

function __chain<E1, E2, A, B, C>(
  fn: (value: B) => Future<E2, A, C>,
  future: Future<E1, A, B>,
): Future<E1 & E2, A, C> {
  return chainEnv(
    unpack(error => Pure.of(Either.left(error)) as Env<E2, Either<A, C>>, fn),
    future,
  )
}
