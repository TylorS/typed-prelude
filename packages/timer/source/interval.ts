import { Disposable, disposeAll } from '@typed/disposable'
import { Arity1 } from '@typed/lambda'
import { Timer } from './types'

/**
 * Call a function at a given interval using a Timer.
 * @param fn :: (number -> *)
 * @param interval :: number
 * @param timer :: Timer
 * @returns :: Disposable
 */
export function interval(
  fn: Arity1<number, Disposable>,
  interval: number,
  timer: Timer,
): Disposable {
  return timer.delay(onInterval, interval)

  function onInterval(time: number) {
    return disposeAll([fn(time), timer.delay(onInterval, interval)])
  }
}
