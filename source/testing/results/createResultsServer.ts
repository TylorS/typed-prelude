import { Disposable } from '@most/types'
import { Subscriber } from 'cote'
import { TestResult } from '../types'
import { eventNames, ResultsEvent } from './common'

export type CreateResultsServerOptions = {
  namespace: string
}

export type ResultsServer = Disposable & {
  readonly subscribe: (testRunId: number, cb: (results: TestResult[]) => void) => Disposable
  readonly once: (testRunId: number) => Promise<TestResult[]>
}

type Subscription = {
  testRunId: number
  cb: (results: TestResult[]) => void
}

export function createResultsServer({ namespace }: CreateResultsServerOptions): ResultsServer {
  const subscriber = new Subscriber(
    { namespace, name: 'Results Server', subscribesTo: eventNames },
    { log: false },
  )
  const subscriptions: Subscription[] = []

  const unsubscribe = (subscription: Subscription) => {
    const index = subscriptions.findIndex(x => x === subscription)

    if (index > -1) {
      subscriptions.splice(index)
    }
  }

  const subscribe = (testRunId: number, cb: (results: TestResult[]) => void): Disposable => {
    const subscription = { testRunId, cb }

    subscriptions.push(subscription)

    const dispose = () => unsubscribe(subscription)

    return { dispose }
  }

  const once = async (testRunId: number): Promise<TestResult[]> => {
    return new Promise<TestResult[]>(resolve => {
      const subscription: Subscription = { testRunId, cb: () => void 0 }
      subscription.cb = (results: TestResult[]) => {
        unsubscribe(subscription)

        resolve(results)
      }

      subscriptions.push(subscription)
    })
  }

  const dispose = () => {
    subscriber.removeAllListeners()
    subscriber.close()
  }

  subscriber.on(eventNames[0], ({ testRunId, results }: ResultsEvent) => {
    const subscribers = subscriptions.filter(x => x.testRunId === testRunId)

    subscribers.forEach(({ cb }) => cb(results))
  })

  return { subscribe, once, dispose }
}
