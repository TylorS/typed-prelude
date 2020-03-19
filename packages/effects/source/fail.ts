import { CapabilitiesOf, Env, Provide, Resume } from '@typed/env'
import { Effect } from './Effect'
import { Fail, Failure } from './Failure'
import { runWith } from './runWith'

export function* fail<Err>(error: Err): Effect<Fail<Err>, void> {
  yield ({ failure }) => failure(error)
}

export function* catchFailure<Y extends Env<any, any>, A, B>(
  effect: Generator<Y, B, any>,
  onError: (error: A) => B,
): Effect<CapabilitiesOf<Provide<Y, Fail<A>>>, B> {
  return yield* runWith(effect, { failure: (e: A) => Resume.of(Failure.of(e, onError(e))) })
}
