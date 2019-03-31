import { Disposable } from '@typed/disposable'
import { Arity1 } from '@typed/lambda'
import { Timer } from './types'

export function interval(fn: Arity1<number>, interval: number, timer: Timer): Disposable {
  let disposable = timer.delay(onInterval, interval)

  function onInterval(time: number) {
    fn(time)

    disposable = timer.delay(onInterval, interval)
  }

  return Disposable.lazy(() => disposable)
}
