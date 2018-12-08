import { NodePosition } from '@typed/typescript'
import { Uuid } from '../../uuid'

export interface TestMetadata extends NodeMetadata {
  readonly exportNames: string[]
}

export interface NodeMetadata extends NodePosition {
  readonly id: Uuid
  readonly filePath: string
  readonly text: string
  readonly children: NodeMetadata[]
}
