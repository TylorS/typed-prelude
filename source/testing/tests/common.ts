import { TestConfig } from '../types'

export const eventNames = ['testConfig']

export type TestConfigEvent = {
  readonly type: 'testConfig'
  readonly testRunId: number
  readonly testConfigs: TestConfig[]
}
