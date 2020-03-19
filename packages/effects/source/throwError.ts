import { CapabilitiesOf, Env, Provide, Resume } from '@typed/env'
import { Effect } from './Effect'
import { Fail, Failure } from './Failure'
import { runEffect } from './runEffect'

export function* fail<Err>(error: Err): Effect<Fail<Err>, void> {
  yield ({ failure }) => failure(error)
}

export function* handleError<Y extends Env<any, any>, A, B>(
  effect: Generator<Y, B, any>,
  onError: (error: A) => B,
): Effect<CapabilitiesOf<Provide<Y, Fail<A>>>, B> {
  const env = runEffect(effect)

  return yield (e: CapabilitiesOf<Provide<Y, Fail<A>>>) =>
    env({ ...e, failure: (e: A) => Resume.of(Failure.of(e, onError(e))) } as any)
}
