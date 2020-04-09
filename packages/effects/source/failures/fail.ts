import { Resume } from '@typed/env'
import { Just } from '@typed/maybe'
import { Effect, Effects, Return } from '../Effect'
import { runWith, RunWith } from '../run/runWith'
import { ErrorOf, FailEnv, Failure, FailureTypes } from './Failure'

export function* fail<A extends keyof any, Err>(
  errorType: A,
  error: Err,
): Effects<FailEnv<A, Err>, any> {
  return yield (c) => c[errorType](error)
}

export function catchFailure<A extends Effect<any, any>, K extends FailureTypes<A>>(
  effect: A,
  errorType: K,
  onError: (error: ErrorOf<A, K>) => Return<A>,
) {
  const failEnv = {
    [errorType]: (e: ErrorOf<A, K>) => Resume.of(Failure.of(e, Just.of(onError(e)))),
  } as FailEnv<K, ErrorOf<A, K>>

  return runWith(effect, failEnv) as RunWith<A, typeof failEnv>
}
