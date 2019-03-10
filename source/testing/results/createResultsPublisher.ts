import { Disposable } from '@most/types'
import { Subscriptions } from '@typed/common/Subscriptions'
import { Uuid } from '@typed/uuid'
import { Publisher } from 'cote'
import { TestResult } from '../types'
import { eventNames, ResultsEvent } from './common'

export type CreateResultsPublisherOptions = {
  namespace: string
}

export type ResultsPublisherOptions = {
  testRunId: number
  testMetadataId: Uuid
  results: TestResult[]
}

export type ResultsPublisher = Disposable & {
  readonly publish: (options: ResultsPublisherOptions) => void
  readonly onAdded: (fn: () => void) => Disposable
}

export function createResultsPublisher({
  namespace,
}: CreateResultsPublisherOptions): ResultsPublisher {
  const publisher = new Publisher(
    { namespace, name: 'Results Publisher', broadcasts: eventNames },
    { log: false },
  )

  const { subscribe, publish: added } = new Subscriptions<1, void>()
  const onAdded = (fn: () => void) => subscribe(1, fn)

  const publish = (options: ResultsPublisherOptions) =>
    publisher.publish<ResultsEvent>(eventNames[0], {
      type: 'testResults',
      ...options,
    })

  publisher.on('cote:added', () => added(1))

  const dispose = () => {
    publisher.removeAllListeners()
    publisher.close()
  }

  return { publish, onAdded, dispose }
}
