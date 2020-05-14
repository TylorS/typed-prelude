import { Stream } from '@most/types'
import { TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, Ref, useMemo, useRef } from '@typed/hooks'
import { SchedulerEnv } from '../SchedulerEnv'
import { useRunStream } from './useRunStream'

export type StreamRef<A> = {
  readonly value: Readonly<Ref<A>>
  readonly error: Readonly<Ref<Error>>
  readonly clearError: () => void
}

/**
 * Mirrors the latest values of a stream and possible errors into Maybe<A> and Maybe<Error> respectively
 * backed by readonly references whose contained values will change as soon a the stream does.
 */
export function* useStreamRef<A>(
  stream: Stream<A>,
): HookEffects<SchedulerEnv & HooksManagerEnv & TimerEnv, StreamRef<A>> {
  const [value, setValue] = yield* useRef<unknown, A>()
  const [error, setError] = yield* useRef<unknown, Error>()
  const clearError = yield* useMemo(() => () => setError(null), [])

  yield* useRunStream(stream, {
    event: (_, value) => {
      setValue(value)
    },
    error: (_, error) => {
      setError(error)
    },
    end: (_) => {
      setValue(null)
      setError(null)
    },
  })

  return { value, error, clearError } as const
}
