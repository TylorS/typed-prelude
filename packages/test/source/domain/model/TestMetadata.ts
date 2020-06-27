import * as t from '@typed/io'
import { Uuid } from '@typed/uuid'
import { DocumentUri } from './DocumentUri'
import { Key } from './Key'
import { TestConfig } from './Test'

export type TestMetadata = t.TypeOf<typeof TestMetadata>

export const TestMetadata = t.record({
  documentUri: DocumentUri,
  exportNames: t.array(t.NonEmptyString),
  metadata: t.lazy(() => NodeMetadata),
})

export interface NodeMetadata extends NodePosition {
  readonly id: Uuid
  readonly config: TestConfig
  readonly text: string
  readonly children: readonly NodeMetadata[]
}

export const NodeMetadata: t.Type<NodeMetadata> = t.recursive((self) =>
  t.intersection([
    NodePosition,
    t.record({
      id: t.Uuid,
      config: TestConfig,
      text: t.String,
      children: t.array(self),
    }),
  ]),
)

export const MetadataId = Key<NodeMetadata>('MetadataId')
export type MetadataId = t.TypeOf<typeof MetadataId>

export interface NodePosition extends t.TypeOf<typeof NodePosition> {}
export const NodePosition = t.record({
  position: t.tuple([t.Number, t.Number]),
  startLine: t.NonNegativeInteger,
  endLine: t.NonNegativeInteger,
  numberOfLines: t.NonNegativeInteger,
})
