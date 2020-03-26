import { Either, fromLeft, fromRight, isRight } from '@typed/either'
import { Effect } from '../Effect'
import { fail } from './fail'
import { FailEnv } from './Failure'

export function* orFail<F extends PropertyKey, E, A, B>(
  key: F,
  effect: Effect<E, Either<A, B>>,
): Effect<E & FailEnv<F, A>, B> {
  const either = yield* effect

  if (isRight(either)) {
    return fromRight(either)
  }

  return yield* fail(key, fromLeft(either))
}
