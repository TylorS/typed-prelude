import { Either, fromLeft, fromRight, isRight } from '@typed/either'
import { Env } from '@typed/env'
import { Effect, Effects } from '../Effect'
import { fail } from './fail'
import { FailEnv } from './Failure'

export function* orFail<F extends PropertyKey, A, B, C>(
  key: F,
  effect: Effects<A, Either<B, C>>,
): Effect<Env<A, any> | Env<FailEnv<F, B>, any>, C> {
  const either = yield* effect

  if (isRight(either)) {
    return fromRight(either)
  }

  return yield* fail(key, fromLeft(either))
}
