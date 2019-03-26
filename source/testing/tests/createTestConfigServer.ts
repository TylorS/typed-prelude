import { Disposable } from '@most/types'
import { Subscriptions } from '@typed/common/Subscriptions'
import { Uuid } from '@typed/uuid'
import { Subscriber } from 'cote'
import { LogLevel, TestIdToTestConfig } from '../types'
import { TestConfigEvent, testConfigEventNames } from './common'

export type CreateTestConfigServerOptions = {
  namespace: string
  logLevel: LogLevel
}

export type TestConfigServer = Disposable & {
  readonly subscribe: (testRunId: Uuid, cb: (configs: TestIdToTestConfig) => void) => Disposable
  readonly once: (testRunId: Uuid) => Promise<TestIdToTestConfig>
}

export function createTestConfigServer({
  namespace,
  logLevel,
}: CreateTestConfigServerOptions): TestConfigServer {
  const subscriber = new Subscriber(
    { namespace, name: 'TestConfig Server', subscribesTo: testConfigEventNames },
    { log: LogLevel.DEBUG === logLevel },
  )
  const { subscribe, once, dispose: clearSubscriptions, publish } = new Subscriptions<
    Uuid,
    TestIdToTestConfig
  >()
  const dispose = () => {
    clearSubscriptions()
    subscriber.removeAllListeners()
    subscriber.close()
  }

  subscriber.on(testConfigEventNames[0], ({ testRunId, testConfigs }: TestConfigEvent) =>
    publish(
      testRunId,
      testConfigs.reduce((map, testConfig) => map.set(testConfig.id, testConfig), new Map()),
    ),
  )

  return { subscribe, once, dispose }
}
