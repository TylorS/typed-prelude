import { Uuid } from '@typed/uuid'
import { TestConfig } from '../types'

export const testConfigEventNames = ['testConfig']

export type TestConfigEvent = {
  readonly type: 'testConfig'
  readonly testRunId: Uuid
  readonly testConfigs: TestConfig[]
}

export const metadataEventNames = ['metadataToTestId']

export type MetadataToTestIdEvent = {
  readonly type: 'metadataToTestId'
  readonly testRunId: Uuid
  readonly testIdToMetadataId: Array<[Uuid, Uuid]>
}
