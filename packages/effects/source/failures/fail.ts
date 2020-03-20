import { CapabilitiesOf, Provide, Resume } from '@typed/env'
import { Just } from '@typed/maybe'
import { Effect, Return, Yield } from '../Effect'
import { runWith } from '../run'
import { Fail, Failure } from './Failure'

export function* fail<A extends keyof any, Err>(
  errorType: A,
  error: Err,
): Effect<{ [K in A]: Fail<Err> }, void> {
  yield c => c[errorType](error)
}

export function* catchFailure<A extends Effect<any, any>, B extends keyof any, Err>(
  effect: A,
  errorType: B,
  onError: (error: Err) => Return<A>,
): Effect<CapabilitiesOf<Provide<Yield<A>, { [K in B]: Fail<Err> }>>, Return<A>> {
  return yield* runWith(effect, {
    [errorType]: (e: Err) => Resume.of(Failure.of(e, Just.of(onError(e)))),
  })
}
