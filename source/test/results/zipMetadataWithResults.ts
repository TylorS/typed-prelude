import {
  NodeMetadata,
  TestMetadata,
  TestResultWithMetadata,
  TestResultWithMetadataId,
} from '../types'

export function zipMetadataWithResults(
  testMetadata: TestMetadata[],
  results: TestResultWithMetadataId[],
): TestResultWithMetadata[] {
  const metadataMap: Record<string, NodeMetadata | TestMetadata> = {}
  const metadataToProcess: NodeMetadata[] = [...testMetadata]

  while (metadataToProcess.length > 0) {
    const metadata = metadataToProcess.shift() as NodeMetadata

    metadataMap[metadata.id] = metadata

    metadataToProcess.push(...metadata.children)
  }

  const zipResult = ({
    metadataId,
    ...result
  }: TestResultWithMetadataId): TestResultWithMetadata => {
    const metadata = metadataMap[metadataId]

    if (result.type === 'collection') {
      return {
        ...result,
        metadata,
        results: result.results.map(zipResult),
      }
    }

    return {
      ...result,
      metadata,
    }
  }

  return results.map(zipResult)
}
