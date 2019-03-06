import { Disposable } from '@most/types'
import { Arity1 } from '@typed/lambda'

export type Subscription<Id, A> = { readonly id: Id; readonly cb: Arity1<A, void> }

export class Subscriptions<Id, A> implements Disposable {
  private subscriptions: Array<Subscription<Id, A>> = []

  public subscribe = (id: Id, cb: Arity1<A, void>): Disposable => {
    const subscription: Subscription<Id, A> = { id, cb }
    const dispose = () => {
      const index = this.subscriptions.findIndex(x => x === subscription)

      if (index > -1) {
        this.subscriptions.splice(index)
      }
    }

    this.subscriptions.push(subscription)

    return { dispose }
  }

  public once = (id: Id): Promise<A> => {
    return new Promise(resolve => {
      const { dispose } = this.subscribe(id, a => {
        resolve(a)

        dispose()
      })
    })
  }

  public publish = (id: Id, value: A): void => {
    for (const subscription of this.subscriptions) {
      if (id === subscription.id) {
        subscription.cb(value)
      }
    }
  }

  public dispose = () => {
    this.subscriptions = []
  }
}
