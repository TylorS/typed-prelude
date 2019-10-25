import { curry } from '@typed/lambda'
import { Timer } from '@typed/timer'
import { Subscription } from './Subscription'

export const delay = curry(__delay) as {
  <A, B>(timer: Timer, delayMs: number, subscription: Subscription<A, B>): Subscription<A, B>
  (timer: Timer, delayMs: number): <A, B>(subscription: Subscription<A, B>) => Subscription<A, B>
  (timer: Timer): {
    <A, B>(delayMs: number, subscription: Subscription<A, B>): Subscription<A, B>
    (delayMs: number): <A, B>(subscription: Subscription<A, B>) => Subscription<A, B>
  }
}

function __delay<A, B>(
  timer: Timer,
  delayMs: number,
  subscription: Subscription<A, B>,
): Subscription<A, B> {
  return {
    ...subscription,
    subscribe: fn => subscription.subscribe(b => timer.delay(() => fn(b), delayMs)),
  }
}
