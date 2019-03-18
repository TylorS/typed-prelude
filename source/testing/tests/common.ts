import { Uuid } from '@typed/uuid'
import { TestConfig } from '../types'

export const testConfigEventNames = ['testConfig']

export type TestConfigEvent = {
  readonly type: 'testConfig'
  readonly testRunId: number
  readonly testConfigs: TestConfig[]
}

export const metadataEventNames = ['metadataToTestId']

export type MetadataToTestIdEvent = {
  readonly type: 'metadataToTestId'
  readonly testRunId: number
  readonly testIdToMetadataId: Array<[Uuid, Uuid]>
}
