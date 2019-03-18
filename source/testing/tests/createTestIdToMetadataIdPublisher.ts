import { Disposable } from '@most/types'
import { LogLevel } from '@typed/common/logger'
import { Uuid } from '@typed/uuid'
import { Publisher } from 'cote'
import { metadataEventNames, MetadataToTestIdEvent } from './common'

export type CreateTestIdToMetadataIdPublisherOptions = {
  namespace: string
  logLevel: LogLevel
}

export type TestIdToMetadataIdPublisher = Disposable & {
  readonly publish: (testRunId: number, testIdToMetadataId: Array<[Uuid, Uuid]>) => void
}

export function createTestIdToMetadataIdPublisher({
  namespace,
  logLevel,
}: CreateTestIdToMetadataIdPublisherOptions): TestIdToMetadataIdPublisher {
  const publisher = new Publisher(
    { namespace, name: 'TestIdToMetadataId Publisher', broadcasts: metadataEventNames },
    { log: LogLevel.DEBUG === logLevel },
  )
  const publish = (testRunId: number, testIdToMetadataId: Array<[Uuid, Uuid]>) =>
    publisher.publish<MetadataToTestIdEvent>(metadataEventNames[0], {
      type: 'metadataToTestId',
      testRunId,
      testIdToMetadataId,
    })
  const dispose = () => {
    publisher.removeAllListeners()
    publisher.close()
  }

  return { publish, dispose }
}
