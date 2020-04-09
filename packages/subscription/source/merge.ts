import { disposeAll } from '@typed/disposable'
import {
  createSubscription,
  Subscription,
  SubscriptionInput,
  SubscriptionOutput,
} from './Subscription'

export function merge<A extends ReadonlyArray<Subscription<any>>>(
  ...subscriptions: A
): Subscription<SubscriptionInput<A[number]>, SubscriptionOutput<A[number]>> {
  const subscription = createSubscription<any>()

  return {
    ...subscription,
    subscribe: (fn) => disposeAll(subscriptions.map((s) => s.subscribe(fn))),
  }
}
