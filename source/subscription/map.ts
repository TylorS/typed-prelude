import { Disposable } from '@typed/disposable'
import { Arity1, curry, pipe } from '@typed/lambda'
import { Subscriber, Subscription } from './Subscription'

export const map = curry(
  <A, B, C>(fn: Arity1<B, C>, subscription: Subscription<A, B>): Subscription<A, C> => {
    const subscribe = (subscriber: Subscriber<C>): Disposable =>
      subscription.subscribe(
        pipe(
          fn,
          subscriber,
        ),
      )

    return {
      ...subscription,
      subscribe,
    }
  },
) as {
  <A, B, C>(fn: Arity1<B, C>, subscription: Subscription<A, B>): Subscription<A, C>
  <B, C>(fn: Arity1<B, C>): <A>(subscription: Subscription<A, B>) => Subscription<A, C>
}
