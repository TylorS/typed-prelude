import { Disposable } from '@most/types'
import { Effect, map } from '../effect'
import { apply, Arity1 } from '../lambda'

export class Subscriptions<A> {
  public readonly subscriptions: ReadonlyArray<Arity1<A>> = []
  private getSubscriptions: Effect<ReadonlyArray<Arity1<A>>> = Effect.fromIO(
    () => this.subscriptions,
  )

  public pushToSubscribers = (value: A): Effect<void> =>
    map(subscriptions => pushToSubscribers(subscriptions, value), this.getSubscriptions)

  public addSubsciber = (subscriber: Arity1<A>): Disposable => {
    // To enable readonly subscriptions
    ;(this as any).subscriptions = this.subscriptions.concat(subscriber)

    return {
      dispose: () => this.removeSubscriber(subscriber),
    }
  }

  public removeSubscriber = (subscriber: Arity1<A>) => {
    ;(this as any).subscriptions = this.subscriptions.filter(x => x !== subscriber)
  }
}

export function pushToSubscribers<A>(subscriptions: ReadonlyArray<Arity1<A>>, value: A) {
  subscriptions.forEach(apply([value]))
}
