import { Disposable } from '@typed/disposable'
import { Arity1 } from '@typed/lambda'
import { findIndex } from '@typed/list'
import { equals } from '@typed/logic'
import { isNothing, map, withDefault } from '@typed/maybe'

export interface Subscription<A> {
  readonly subscribe: Arity1<Subscriber<A>, Disposable>
  readonly unsubscribe: Arity1<Subscriber<A>, boolean>
  readonly publish: Arity1<A, void>
}

export type Subscriber<A> = Arity1<A>

export function createSubscription<A>(): Subscription<A> {
  const subscribers: Array<Subscriber<A>> = []
  const unsubscribe = (subscriber: Subscriber<A>): boolean => {
    const index = findIndex(equals(subscriber), subscribers)
    const removeSubscriber = map(i => subscribers.splice(i).length > -1, index)

    return withDefault(false, removeSubscriber)
  }
  const subscribe = (subscriber: Subscriber<A>): Disposable => {
    const index = findIndex(equals(subscriber), subscribers)
    const dispose = () => unsubscribe(subscriber)

    if (isNothing(index)) {
      subscribers.push(subscriber)
    }

    return { dispose }
  }

  const publish = (value: A) => subscribers.forEach(f => f(value))

  return { subscribe, unsubscribe, publish }
}
