import { Disposable, disposeAll } from '@typed/disposable'
import { createSubscription, Subscription, SubscriptionOuput } from './Subscription'

export type CombineSubscriptions<A extends Array<Subscription<any, any>>> = Subscription<
  SubscriptionValues<A>
>

export type SubscriptionValues<A extends Array<Subscription<any, any>>> = {
  [K in keyof A]: SubscriptionOuput<A[K]>
}

export function combine<A extends Array<Subscription<any, any>>>(
  ...subscriptions: A
): CombineSubscriptions<A> {
  const subscription: CombineSubscriptions<A> = createSubscription()
  const hasValues: boolean[] = Array(subscriptions.length).fill(false)
  const values: SubscriptionValues<A> = [] as any
  let subscribers = 0
  let disposables: Disposable[] = []
  const disposable = {
    dispose: () => {
      disposeAll(disposables).dispose()
      disposables = []
    },
  }

  return {
    ...subscription,
    subscribe: fn => {
      if (++subscribers === 1) {
        disposables = subscriptions.map((sub, i) =>
          sub.subscribe(a => {
            hasValues[i] = true
            values[i] = a

            if (hasValues.every(Boolean)) {
              return subscription.publish(values)
            }

            return Disposable.None
          }),
        )
      }

      return refCountDisposable(() => --subscribers, subscription.subscribe(fn), disposable)
    },
  }
}

function refCountDisposable(
  numberOfListeners: () => number,
  wrapped: Disposable,
  delayed: Disposable,
): Disposable {
  return {
    dispose: () => {
      wrapped.dispose()

      if (numberOfListeners() === 0) {
        delayed.dispose()
      }
    },
  }
}
