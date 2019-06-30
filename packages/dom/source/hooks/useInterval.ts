import { IO } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { interval as setInterval, Timer } from '@typed/timer'
import { useDisposable } from './useDisposable'
import { useMaybe } from './useMaybe'

export function useInterval<A>(
  fn: IO<A>,
  { timer, interval }: UseIntervalOptions,
  deps?: ReadonlyArray<any>,
) {
  const [state, setState] = useMaybe(Maybe.of(fn()))

  useDisposable(() => setInterval(() => setState(fn()), interval, timer), deps)

  return state
}

export type UseIntervalOptions = {
  readonly timer: Timer
  readonly interval: number
}
