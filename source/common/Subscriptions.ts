import { asap } from '@most/scheduler'
import { Disposable, Scheduler } from '@most/types'
import { callbackTask } from 'source/effect/callbackTask'
import { Arity1 } from '../lambda'

export class Subscriptions<A> {
  private subscriptions: Array<Arity1<A>> = []
  constructor(private scheduler: Scheduler) {}

  public pushToSubscribers = (value: A): Disposable =>
    asap(callbackTask(pushToSubscribers(this.subscriptions), value), this.scheduler)

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

function pushToSubscribers<A>(subscriptions: Array<Arity1<A>>) {
  return (value: A) => subscriptions.forEach(f => f(value))
}
