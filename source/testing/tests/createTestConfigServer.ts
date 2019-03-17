import { Disposable } from '@most/types'
import { Subscriptions } from '@typed/common/Subscriptions'
import { Subscriber } from 'cote'
import { LogLevel, TestConfig } from '../types'
import { eventNames, TestConfigEvent } from './common'

export type CreateTestConfigServerOptions = {
  namespace: string
  logLevel: LogLevel
}

export type TestConfigServer = Disposable & {
  readonly subscribe: (testRunId: number, cb: (configs: TestConfig[]) => void) => Disposable
  readonly once: (testRunId: number) => Promise<TestConfig[]>
}

export function createTestConfigServer({
  namespace,
  logLevel,
}: CreateTestConfigServerOptions): TestConfigServer {
  const subscriber = new Subscriber(
    { namespace, name: 'TestConfig Server', subscribesTo: eventNames },
    { log: LogLevel.DEBUG === logLevel },
  )
  const { subscribe, once, dispose: clearSubscriptions, publish } = new Subscriptions<
    number,
    TestConfig[]
  >()
  const dispose = () => {
    clearSubscriptions()
    subscriber.removeAllListeners()
    subscriber.close()
  }

  subscriber.on(eventNames[0], ({ testRunId, testConfigs }: TestConfigEvent) =>
    publish(testRunId, testConfigs),
  )

  return { subscribe, once, dispose }
}
