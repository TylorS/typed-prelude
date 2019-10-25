import { Disposable } from '@typed/disposable'
import { Arity1 } from '@typed/lambda'
import { equals } from '@typed/logic'

/**
 * A generic subscription type
 */
export interface Subscription<A, B = A> {
  readonly subscribe: Arity1<Subscriber<B>, Disposable>
  readonly publish: Arity1<A>
  readonly clearSubscribers: () => void
}

export type SubscriptionInput<A> = A extends Subscription<infer R, any> ? R : never
export type SubscriptionOuput<A> = A extends Subscription<any, infer R> ? R : never

export type Subscriber<A> = Arity1<A>

/**
 * Create a simple subscription
 */
export function createSubscription<A>(): Subscription<A> {
  let subscribers: Array<Subscriber<A>> = []
  const unsubscribe = (subscriber: Subscriber<A>): void => {
    const index = subscribers.findIndex(equals(subscriber))

    if (index > -1) {
      subscribers.splice(index)
    }
  }
  const subscribe = (subscriber: Subscriber<A>): Disposable => {
    subscribers.push(subscriber)

    return { dispose: () => unsubscribe(subscriber) }
  }
  const reset = () => {
    subscribers = []
  }

  const publish = (value: A) => subscribers.forEach(f => f(value))

  return { subscribe, publish, clearSubscribers: reset }
}
