import { IO } from '@typed/lambda'
import { Timer } from '@typed/timer'
import { Maybe } from '../../../maybe/esm'
import { useDisposable } from './useDisposable'
import { useMaybe } from './useMaybe'

export function useTimer<A>(
  fn: IO<A>,
  { timer, delay }: UseTimerOptions,
  deps?: ReadonlyArray<any>,
): Maybe<A> {
  const [state, setState] = useMaybe<A>()

  useDisposable(() => timer.delay(() => setState(fn()), delay), deps)

  return state
}

export type UseTimerOptions = {
  readonly timer: Timer
  readonly delay: number
}
