import { curry } from '@typed/lambda'
import { Subscription } from './Subscription'

export const scan = curry(__scan) as {
  <A, B, C>(
    reducer: (acc: C, value: B) => C,
    seed: C,
    subscription: Subscription<A, B>,
  ): Subscription<A, C>

  <B, C>(reducer: (acc: C, value: B) => C, seed: C): <A>(
    subscription: Subscription<A, B>,
  ) => Subscription<A, C>

  <B, C>(reducer: (acc: C, value: B) => C): {
    <A>(seed: C, subscription: Subscription<A, B>): Subscription<A, C>
    (seed: C): <A>(subscription: Subscription<A, B>) => Subscription<A, C>
  }
}

function __scan<A, B, C>(
  reducer: (acc: C, value: B) => C,
  seed: C,
  subscription: Subscription<A, B>,
): Subscription<A, C> {
  return {
    ...subscription,
    subscribe: fn => {
      let acc = seed

      return subscription.subscribe(b => fn((acc = reducer(acc, b))))
    },
  }
}
