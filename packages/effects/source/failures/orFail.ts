import { Either, fromLeft, fromRight, isRight } from '@typed/either'
import { Effects } from '../Effect'
import { fail } from './fail'
import { FailEnv } from './Failure'

export function* orFail<F extends PropertyKey, A, B, C>(
  key: F,
  effect: Effects<A, Either<B, C>>,
): Effects<A & FailEnv<F, B>, C> {
  const either = yield* effect

  if (isRight(either)) {
    return fromRight(either)
  }

  return yield* fail(key, fromLeft(either))
}
