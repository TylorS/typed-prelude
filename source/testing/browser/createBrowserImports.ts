import { groupBy } from '@typed/list'
import { Uuid } from '@typed/uuid'
import { TestMetadata } from '../types'
import { TEST_ID_TO_METADATA_MAP } from './constants'

export function createBrowserImports(
  testMetadata: TestMetadata[],
): { imports: string; metadataPush: string; numberOfTests: number } {
  let numberOfTests = 0

  function getTestNumber(): number {
    return numberOfTests++
  }

  const testMetadataByFilePath = groupBy(x => x.filePath, testMetadata)
  const filePaths = Object.keys(testMetadataByFilePath)
  const browserImports = filePaths.map(filePath =>
    createBrowserImport(testMetadataByFilePath[filePath], filePath, getTestNumber),
  )
  const imports = browserImports.map(x => x[0]).join(`\n`)
  const metadataPush = browserImports.map(x => x[1]).join(`\n`)

  return {
    imports,
    metadataPush,
    numberOfTests,
  }
}

function createBrowserImport(
  testMetadata: TestMetadata[],
  filePath: string,
  getTestNumber: () => number,
): [string, string] {
  const exportNames = testMetadata.map(
    ({ exportNames, id }) => [exportNames[0], id] as [string, Uuid],
  )
  const exportNamesByTestNumber = groupBy(getTestNumber, exportNames)
  const testNumbers = Object.keys(exportNamesByTestNumber).map(parseFloat)
  const importSpecifiers = testNumbers.map(testNumber =>
    testImportSpecifier(testNumber, exportNamesByTestNumber[testNumber][0][0]),
  )
  const metadataIdMapAdditions = testNumbers.map(testNumber =>
    metadataIdMapAddition(testNumber, exportNamesByTestNumber[testNumber][0][1]),
  )
  const imports = `import { ${importSpecifiers.join(',')} } from '${filePath}'`
  const metadataMapPush = `${TEST_ID_TO_METADATA_MAP}.push(${metadataIdMapAdditions.join(', ')})`

  return [imports, metadataMapPush]
}

function testImportSpecifier(testNumber: number, exportName: string): string {
  return `${exportName} as test${testNumber}`
}

function metadataIdMapAddition(testNumber: number, testMetadataId: Uuid): string {
  return `[getTestId(test${testNumber}), '${testMetadataId}']`
}
