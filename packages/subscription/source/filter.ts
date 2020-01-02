import { Disposable } from '@typed/disposable'
import { curry, Is, Predicate } from '@typed/lambda'
import { Subscription, SubscriptionInput } from './Subscription'

export const filter: {
  <A>(predicate: Is<A>, subscription: Subscription<any, any>): Subscription<
    SubscriptionInput<typeof subscription>,
    A
  >
  <A>(predicate: Predicate<A>, subscription: Subscription<any, A>): Subscription<
    SubscriptionInput<typeof subscription>,
    A
  >

  <A>(predicate: Is<A>): (
    subscription: Subscription<any, any>,
  ) => Subscription<SubscriptionInput<typeof subscription>, A>
  <A>(predicate: Predicate<A>): (
    subscription: Subscription<any, A>,
  ) => Subscription<SubscriptionInput<typeof subscription>, A>
} = curry(__filter)

function __filter<A>(predicate: Predicate<A>, subscription: Subscription<any, A>): Subscription<A> {
  return {
    ...subscription,
    subscribe: fn => subscription.subscribe(a => (predicate(a) ? fn(a) : Disposable.None)),
  }
}
