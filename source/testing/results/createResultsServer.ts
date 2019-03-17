import { Disposable } from '@most/types'
import { Subscriptions } from '@typed/common/Subscriptions'
import { Subscriber } from 'cote'
import { LogLevel } from '../types'
import { eventNames, ResultsEvent } from './common'

export type CreateResultsServerOptions = {
  namespace: string
  logLevel: LogLevel
}

export type ResultsServer = Disposable & {
  readonly subscribe: (testRunId: number, cb: (results: ResultsEvent) => void) => Disposable
  readonly once: (testRunId: number) => Promise<ResultsEvent>
}

export function createResultsServer({
  namespace,
  logLevel,
}: CreateResultsServerOptions): ResultsServer {
  const subscriber = new Subscriber(
    { namespace, name: 'Results Server', subscribesTo: eventNames },
    { log: LogLevel.DEBUG === logLevel },
  )
  const { subscribe, once, dispose: clearSubscriptions, publish } = new Subscriptions<
    number,
    ResultsEvent
  >()
  const dispose = () => {
    clearSubscriptions()
    subscriber.removeAllListeners()
    subscriber.close()
  }

  subscriber.on(eventNames[0], (event: ResultsEvent) => publish(event.testRunId, event))

  return { subscribe, once, dispose }
}
