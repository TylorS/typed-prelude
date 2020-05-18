import { Effects } from '@typed/effects'
import { Uuid } from '@typed/uuid'
import { DocumentUri } from './common'
import { TestConfig } from './Test'

export interface TestMetadata extends NodeMetadata {
  readonly documentUri: DocumentUri
  readonly exportNames: readonly string[]
}

export interface NodeMetadata extends NodePosition {
  readonly id: Uuid
  readonly config: TestConfig
  readonly text: string
  readonly children: readonly NodeMetadata[]
}

export interface NodePosition {
  readonly position: readonly [number, number]
  readonly startLine: number
  readonly endLine: number
  readonly numberOfLines: number
}

/**
 * Given a set of DocumentUris generate all the TestMetadata
 */
export type GetTestMetadata<E> = (
  documentUris: readonly DocumentUri[],
) => Effects<E, readonly TestMetadata[]>
