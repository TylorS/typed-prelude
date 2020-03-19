import { CapabilitiesOf, Provide, Resume } from '@typed/env'
import { Just } from '@typed/maybe'
import { Effect, Return, Yield } from './Effect'
import { Fail, Failure } from './Failure'
import { runWith } from './runWith'

export function* fail<Err>(error: Err): Effect<Fail<Err>, void> {
  yield ({ failure }) => failure(error)
}

export function* catchFailure<A extends Effect<any, any>, B>(
  effect: A,
  onError: (error: B) => Return<A>,
): Effect<CapabilitiesOf<Provide<Yield<A>, Fail<A>>>, Return<A>> {
  return yield* runWith(effect, {
    failure: (e: B) => Resume.of(Failure.of(e, Just.of(onError(e)))),
  })
}
