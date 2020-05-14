import { Stream } from '@most/types'
import { combine, get, PureEffect, runEffects, TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, InitialState, useMemo, useState } from '@typed/hooks'
import { Just, Maybe, Nothing } from '@typed/maybe'
import { SchedulerEnv } from '../SchedulerEnv'
import { useRunStream } from './useRunStream'

const toNothing = InitialState.of(Nothing)

export type StreamState<A> = {
  readonly value: A
  readonly error: Maybe<Error>
  readonly clearError: () => PureEffect<Maybe<Error>>
}

/**
 * Mirrors the latest values of a stream and possible errors into A and Maybe<Error> respectively
 * backed by useState so your HookEnvironment's will be marked as needing an update as the stream
 * changes. If your component is updating to often, consider using debounce or another time-altering
 * stream combinators.
 */
export function* useStreamState<E, A>(
  stream: Stream<A>,
  initial: InitialState<E, A>,
): HookEffects<E & TimerEnv & HooksManagerEnv & SchedulerEnv, StreamState<A>> {
  const env = yield* get()
  const [getValue, setValue] = yield* useState<E, A>(initial)
  const [getError, setError] = yield* useState<unknown, Maybe<Error>>(toNothing)
  const clearError = yield* useMemo(() => () => setError(() => Nothing), [])

  yield* useRunStream(stream, {
    event: (_, value) => {
      runEffects(setValue(() => value))
    },
    error: (_, error) => {
      runEffects(setError(() => Just.of(error)))
    },
    end: (_) => {
      runEffects(initial(), env, (a: A) => runEffects(setValue(() => a)))
      runEffects(setError(() => Nothing))
    },
  })

  const [value, error] = yield* combine(getValue(), getError())

  return {
    value,
    error,
    clearError,
  }
}
