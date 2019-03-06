import { Disposable } from '@most/types'
import { Subscriber } from 'cote'
import { TestResult } from '../types'
import { eventNames, ResultsEvent } from './common'

export type CreateResultsServerOptions = {
  namespace: string
  onTestResults: (testRunId: number, results: TestResult[]) => void
}

export function createResultsServer({
  namespace,
  onTestResults,
}: CreateResultsServerOptions): Disposable {
  const subscriber = new Subscriber(
    { namespace, name: 'Results Server', subscribesTo: eventNames },
    { log: false },
  )

  subscriber.on(eventNames[0], ({ testRunId, results }: ResultsEvent) =>
    onTestResults(testRunId, results),
  )

  const dispose = () => {
    subscriber.removeAllListeners()
    subscriber.close()
  }

  return { dispose }
}
