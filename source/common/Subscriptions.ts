import { Disposable } from '@most/types'
import { Effect, map } from '../effect'
import { apply, Arity1 } from '../lambda'

export class Subscriptions<A> {
  private subscriptions: Array<Arity1<A>> = []
  private getSubscriptions: Effect<Array<Arity1<A>>> = Effect.fromIO(() => this.subscriptions)

  public pushToSubscribers = (value: A): Effect<void> =>
    map(subscriptions => pushToSubscribers(subscriptions, value), this.getSubscriptions)

  public addSubsciber = (subscriber: Arity1<A>): Disposable => {
    this.subscriptions = this.subscriptions.concat(subscriber)

    return {
      dispose: () => this.removeSubscriber(subscriber),
    }
  }

  public removeSubscriber = (subscriber: Arity1<A>) => {
    this.subscriptions = this.subscriptions.filter(x => x !== subscriber)
  }
}

function pushToSubscribers<A>(subscriptions: Array<Arity1<A>>, value: A) {
  subscriptions.forEach(apply([value]))
}
