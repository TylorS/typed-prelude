import { Disposable } from '@most/types'
import { Subscriptions } from '@typed/common/Subscriptions'
import { Uuid } from '@typed/uuid'
import { Subscriber } from 'cote'
import { LogLevel } from '../types'
import { eventNames, ResultsEvent } from './common'

export type CreateResultsServerOptions = {
  namespace: string
  logLevel: LogLevel
}

export type ResultsServer = Disposable & {
  readonly subscribe: (testRunId: Uuid, cb: (results: ResultsEvent) => void) => Disposable
  readonly once: (testRunId: Uuid) => Promise<ResultsEvent>
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
    Uuid,
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
