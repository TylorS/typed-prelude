import { Disposable } from '@most/types'
import { Subscriptions } from '@typed/common/Subscriptions'
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

export function createResultsServer({ namespace }: CreateResultsServerOptions): ResultsServer {
  const subscriber = new Subscriber(
    { namespace, name: 'Results Server', subscribesTo: eventNames },
    { log: false },
  )
  const { subscribe, once, dispose: clearSubscriptions, publish } = new Subscriptions<
    number,
    TestResult[]
  >()

  const dispose = () => {
    clearSubscriptions()
    subscriber.removeAllListeners()
    subscriber.close()
  }

  subscriber.on(eventNames[0], ({ testRunId, results }: ResultsEvent) =>
    publish(testRunId, results),
  )

  return { subscribe, once, dispose }
}
