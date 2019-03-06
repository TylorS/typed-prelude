import { Disposable } from '@most/types'
import { Publisher } from 'cote'
import { TestResult } from '../types'
import { eventNames, ResultsEvent } from './common'

export type CreateResultsPublisherOptions = {
  namespace: string
}

export type ResultsPublisher = Disposable & {
  readonly publish: (testRunId: number, results: TestResult[]) => void
}

export function createResultsPublisher({
  namespace,
}: CreateResultsPublisherOptions): ResultsPublisher {
  const publisher = new Publisher(
    { namespace, name: 'Results Publisher', broadcasts: eventNames },
    { log: false },
  )

  const publish = (testRunId: number, results: TestResult[]) =>
    publisher.publish<ResultsEvent>(eventNames[0], { type: 'testResults', testRunId, results })

  const dispose = () => {
    publisher.removeAllListeners()
    publisher.close()
  }

  return { publish, dispose }
}
