import { chain, groupBy, uniq } from '../../list'
import { isTestCollection } from '../test-api/isTestCollection'
import { isTestRunner } from '../test-api/isTestRunner'
import {
  NodeMetadata,
  Test,
  TestMetadata,
  TestWithMetadataId,
  TYPED_COLLECTION,
  TYPED_TEST,
} from '../types'

export function collectNodeTests(testMetadata: TestMetadata[]): TestWithMetadataId[] {
  const metadataByFile = groupBy(x => x.filePath, testMetadata)
  const filePaths = uniq(Object.keys(metadataByFile))

  return chain(filePath => testsWithMetadataId(filePath, metadataByFile[filePath]), filePaths)
}

function testsWithMetadataId<A extends string>(
  filePath: A,
  testMetadata: TestMetadata[],
): TestWithMetadataId[] {
  const testModule = require(filePath)
  const testsWithMetadataId = testMetadata
    .map(testMetadata => {
      const test = testModule[testMetadata.exportNames[0]]
      const isTest = isTestRunner(test) || isTestCollection(test)

      return isTest ? zipTestMetadata(testMetadata, test) : null
    })
    .filter(x => x !== null) as TestWithMetadataId[]

  return testsWithMetadataId
}

function zipTestMetadata(nodeMetadata: NodeMetadata, test: Test): TestWithMetadataId {
  if (isTestRunner(test)) {
    return {
      ...test,
      [TYPED_TEST]: {
        ...test[TYPED_TEST],
        metadataId: nodeMetadata.id,
      },
    }
  }

  const config = test[TYPED_COLLECTION]

  return {
    ...test,
    [TYPED_COLLECTION]: {
      ...config,
      metadataId: nodeMetadata.id,
      tests: nodeMetadata.children.map((child, i) => zipTestMetadata(child, config.tests[i])),
    },
  }
}
