import {
  NodeMetadata,
  NodeMetadataWithResult,
  TestInformation,
  TestMetadataWithResult,
  TestResult,
} from '../types'

export function testInformationToMetadataWithResults(
  info: TestInformation,
): TestMetadataWithResult[] {
  const { testResults } = info

  return testResults.map(testResult => resultToMetadata(info, testResult))
}

function resultToMetadata(info: TestInformation, result: TestResult): TestMetadataWithResult {
  const { testIdToMetadataId, testIdToTestConfig, testMetadataById } = info
  const { testId } = result
  const metadataId = testIdToMetadataId.get(testId)!
  const metadata = testMetadataById.get(metadataId)!
  const config = testIdToTestConfig.get(testId)!
  const additionalTests: NodeMetadataWithResult[] = []
  const additionalResults = result.type === 'group' ? result.results : []
  const additionalToProccess = additionalResults.map((result, i) => ({
    nodeMetadata: metadata.additionalTests[i],
    result,
    additional: additionalTests,
  }))

  while (additionalToProccess.length > 0) {
    const { nodeMetadata, result, additional } = additionalToProccess.shift() as {
      nodeMetadata: NodeMetadata
      result: TestResult
      additional: NodeMetadataWithResult[]
    }
    const additionalTests: NodeMetadataWithResult[] = []
    const nodeMetadataWithResult: NodeMetadataWithResult = {
      ...nodeMetadata,
      result,
      config: testIdToTestConfig.get(result.testId)!,
      additionalTests,
    }

    additional.push(nodeMetadataWithResult)

    if (result.type === 'group') {
      result.results.forEach((result, i) =>
        additionalToProccess.push({
          nodeMetadata: nodeMetadata.additionalTests[i],
          result,
          additional: additionalTests,
        }),
      )
    }
  }

  return {
    ...metadata,
    config,
    result,
    additionalTests,
  }
}
