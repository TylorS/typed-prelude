import { Resume } from '@typed/env'
import { Just } from '@typed/maybe'
import { Effect, Effects, Return } from '../Effect'
import { runWith, RunWith } from '../run/runWith'
import { FailEnv, Failure } from './Failure'

export function* fail<A extends keyof any, Err>(
  errorType: A,
  error: Err,
): Effects<FailEnv<A, Err>, any> {
  return yield c => c[errorType](error)
}

export function* catchFailure<A extends Effect<any, any>, B extends PropertyKey, Err>(
  effect: A,
  errorType: B,
  onError: (error: Err) => Return<A>,
): RunWith<A, FailEnv<B, Err>> {
  const failEnv = {
    [errorType]: (e: Err) => Resume.of(Failure.of(e, Just.of(onError(e)))),
  } as FailEnv<B, Err>

  return yield* runWith(effect, failEnv)
}
