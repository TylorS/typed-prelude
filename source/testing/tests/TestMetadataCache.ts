import { groupBy, unnest } from '@typed/list'
import { Uuid } from '@typed/uuid'
import { TestMetadata } from '../types'

export class TestMetadataCache {
  private testMetadataByFilePath: Map<string, TestMetadata[]> = new Map()
  private testMetadataChanged: Map<string, TestMetadata[]> = new Map()

  public addTestMetadata = (testMetadata: TestMetadata[]): void => {
    const byFilePath = groupBy(x => x.filePath, testMetadata)
    const filePaths = Object.keys(byFilePath)

    filePaths.forEach(filePath => {
      const metadata = byFilePath[filePath]

      this.testMetadataByFilePath.set(filePath, metadata)
      this.testMetadataChanged.set(filePath, metadata)
    })
  }

  public removeFilePath = (filePath: string): void => {
    this.testMetadataByFilePath.delete(filePath)
    this.testMetadataChanged.delete(filePath)
  }

  public clear = (): void => {
    this.testMetadataByFilePath.clear()
    this.testMetadataChanged.clear()
  }

  public getTestMetadata = (): {
    readonly testMetadata: TestMetadata[]
    readonly testMetadataById: ReadonlyMap<Uuid, TestMetadata>
  } => {
    const testMetadata = unnest(Array.from(this.testMetadataByFilePath.values()))
    const testMetadataById = new Map<Uuid, TestMetadata>(
      testMetadata.map(m => [m.id, m] as [Uuid, TestMetadata]),
    )

    return { testMetadata, testMetadataById }
  }

  public getChangedMetadata = (): {
    readonly testMetadata: TestMetadata[]
    readonly testMetadataById: ReadonlyMap<Uuid, TestMetadata>
  } => {
    const testMetadata = unnest(Array.from(this.testMetadataChanged.values()))
    const testMetadataById = new Map<Uuid, TestMetadata>(
      testMetadata.map(m => [m.id, m] as [Uuid, TestMetadata]),
    )

    this.testMetadataChanged.clear()

    return { testMetadata, testMetadataById }
  }
}
