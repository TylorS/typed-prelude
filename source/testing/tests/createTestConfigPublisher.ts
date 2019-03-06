import { Disposable } from '@most/types'
import { Publisher } from 'cote'
import { TestConfig } from '../types'
import { eventNames, TestConfigEvent } from './common'

export type CreateTestConfigPublisherOptions = {
  namespace: string
}

export type TestConfigPublisher = Disposable & {
  readonly publish: (testRunId: number, configs: TestConfig[]) => void
}

export function createTestConfigPublisher({
  namespace,
}: CreateTestConfigPublisherOptions): TestConfigPublisher {
  const publisher = new Publisher(
    { namespace, name: 'TestConfig Publisher', broadcasts: eventNames },
    { log: false },
  )
  const publish = (testRunId: number, testConfigs: TestConfig[]) =>
    publisher.publish<TestConfigEvent>(eventNames[0], {
      type: 'testConfig',
      testRunId,
      testConfigs,
    })
  const dispose = () => {
    publisher.removeAllListeners()
    publisher.close()
  }

  return { publish, dispose }
}
