import { execPure } from '@typed/env'
import { IO, pipe } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { Timer, whenIdle } from '@typed/timer'
import { useDisposable } from './useDisposable'
import { useMaybe } from './useMaybe'

export function useWhenIdle<A>(
  fn: IO<A>,
  { timer }: UseWhenIdleOptions,
  deps?: ReadonlyArray<any>,
) {
  const [state, setState] = useMaybe(Maybe.of(fn()))

  useDisposable(
    () =>
      whenIdle(
        pipe(
          fn,
          setState,
          execPure,
        ),
        timer,
      ),
    deps,
  )

  return state
}

export type UseWhenIdleOptions = {
  readonly timer: Timer
}
