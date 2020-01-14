import { Disposable, disposeAll } from '@typed/disposable'
import { Arity1, curry } from '@typed/lambda'
import { Timer } from '@typed/timer'
import { Subscription } from './Subscription'

export const debounce = curry(__debounce) as {
  <A, B>(timer: Timer, delayMs: number, subscription: Subscription<A, B>): Subscription<A, B>
  (timer: Timer, delayMs: number): <A, B>(subscription: Subscription<A, B>) => Subscription<A, B>
  (timer: Timer): {
    <A, B>(delayMs: number, subscription: Subscription<A, B>): Subscription<A, B>
    (delayMs: number): <A, B>(subscription: Subscription<A, B>) => Subscription<A, B>
  }
}

function __debounce<A, B>(
  timer: Timer,
  delayMs: number,
  subscription: Subscription<A, B>,
): Subscription<A, B> {
  return {
    ...subscription,
    subscribe: (fn: Arity1<B>) => {
      let disposable = Disposable.None

      return disposeAll([
        { dispose: () => disposable.dispose() },
        subscription.subscribe(b => {
          disposable.dispose()
          disposable = timer.delay(() => fn(b), delayMs)

          return disposable
        }),
      ])
    },
  }
}
