import { disposeBoth } from '@most/disposable'
import { delay } from '@most/scheduler'
import { Either } from '@typed/either'
import { curry } from '@typed/lambda'
import { callbackTask } from './callbackTask'
import { Effect } from './Effect'
import { map } from './map'

export const timeout = curry(__timeout) as {
  <A, B extends {}>(ms: number, effect: Effect<A, B>): Effect<Either<Error, A>, B>
  (ms: number): <A, B extends {}>(effect: Effect<A, B>) => Effect<Either<Error, A>, B>
}

function __timeout<A, B extends {}>(ms: number, effect: Effect<A, B>): Effect<Either<Error, A>, B> {
  return Effect.create((cb, resources) => {
    const { scheduler } = resources
    const timeoutDisposable = delay(
      ms,
      callbackTask(cb, Either.left(new TimeoutError(ms))),
      scheduler,
    )
    const disposable = map(a => {
      timeoutDisposable.dispose()

      return Either.of<A, Error>(a)
    }, effect).runEffect(cb, resources)

    return disposeBoth(timeoutDisposable, disposable)
  })
}

export class TimeoutError extends Error {
  public static is = (error: Error): error is TimeoutError => error instanceof TimeoutError

  constructor(ms: number) {
    super(`Timed out after ${ms}ms`)
  }
}
